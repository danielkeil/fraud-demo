<script lang="ts">
	import type { Document } from '$lib/module/fraud/document';
	import AnomalyOverlay from './AnomalyOverlay.svelte';
	import OcrOverlay from './OcrOverlay.svelte';
	import DocumentViewerToolbar from './toolbar/DocumentViewerToolbar.svelte';
	import ShortcutsButton from './ShortcutsButton.svelte';

	import {
		createZoomContext,
		ZOOM,
		useZoomContext,
		type ZoomContext
	} from './_context/zoomContext.svelte.js';
	import { setContext } from 'svelte';
	import { useDocViewerContext } from '$lib/module/fraud/document/client/documentViewer/_context/docViewerContext.svelte.js';

	import { isEnabled } from '$lib/module/fraud/document/domain/viewerOptions.schema.js';
	import { toBooleanSearchParam } from '$lib/module/_shared/utils';

	type Props = {
		document: Document;
	};

	let { document }: Props = $props();
	const image = $derived(document.images[0]);

	// zoom context
	const context = createZoomContext();
	setContext<ZoomContext>(ZOOM, context);

	const zoomContext = useZoomContext();

	const docViewerContext = useDocViewerContext();

	const isSuspectedFraud = $derived(docViewerContext.isSuspectedFraud);
	const showOcr = $derived(isEnabled(docViewerContext.searchParams.ocr));
	const showAnomalies = $derived(isEnabled(docViewerContext.searchParams.anomalies));
	const ocrColor = $derived(docViewerContext.searchParams.ocrColor);
	const ocrFocus = $derived(docViewerContext.searchParams.ocrFocus);
	const ocrFontSize = $derived(docViewerContext.searchParams.ocrFontSize);

	/*
	 * Sort anomalies in reading order (top-to-bottom, left-to-right)
	 * for accessible keyboard navigation and proper tab flow.
	 * This ensures users can tab through anomaly info buttons
	 * in the same order they would naturally read the document.
	 */
	const sortedAnomalies = $derived(
		[...document.anomalies].sort((a, b) => {
			if (a.rect.y !== b.rect.y) return a.rect.y - b.rect.y;
			return a.rect.x - b.rect.x;
		})
	);

	function handleKeydown(event: KeyboardEvent) {
		if (!event.altKey || !event.shiftKey) {
			return;
		}

		if (event.code === 'KeyF') {
			event.preventDefault();
			docViewerContext.searchParams.anomalies = toBooleanSearchParam(!showAnomalies);
		} else if (event.code === 'KeyO') {
			event.preventDefault();
			docViewerContext.searchParams.ocr = toBooleanSearchParam(!showOcr);
		} else if (event.code === 'KeyS') {
			event.preventDefault();
			docViewerContext.isSuspectedFraud = !isSuspectedFraud;
		} else if (
			event.code === 'Minus' ||
			event.code === 'Slash' ||
			event.code === 'NumpadSubtract'
		) {
			event.preventDefault();
			zoomContext.out();
		} else if (
			event.code === 'Equal' ||
			event.code === 'BracketRight' ||
			event.code === 'NumpadAdd'
		) {
			event.preventDefault();
			zoomContext.in();
		} else if (event.code === 'Digit0' || event.code === 'Numpad0') {
			event.preventDefault();
			zoomContext.reset();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="flex h-full flex-col">
	<div class="min-h-0 flex-1 overflow-auto bg-transparent">
		<div class="flex min-h-full w-fit min-w-full items-center justify-center p-2">
			<div
				class="relative {isSuspectedFraud ? 'ring-4 ring-red-500 ring-offset-4' : ''}"
				style="width: {image.width * zoomContext.scale}px; height: {image.height *
					zoomContext.scale}px;"
			>
				<img
					src={image.url}
					alt="Document"
					class="block"
					style="width: {image.width * zoomContext.scale}px; height: {image.height *
						zoomContext.scale}px;"
				/>
				{#if showOcr}
					{#each document.ocrs as ocr, i (i)}
						<OcrOverlay
							{ocr}
							scale={zoomContext.scale}
							color={ocrColor}
							focus={ocrFocus}
							fontSize={ocrFontSize}
						/>
					{/each}
				{/if}
				{#if showAnomalies}
					{#each sortedAnomalies as anomaly (anomaly.id)}
						<AnomalyOverlay {anomaly} scale={zoomContext.scale} />
					{/each}
				{/if}
			</div>
		</div>
	</div>
	<div class="relative -mx-4 h-[1px] border-t border-zinc-200 bg-white px-8"></div>
	<div class="relative flex h-[60px] items-center justify-center bg-zinc-50">
		<ShortcutsButton />
		<DocumentViewerToolbar />
	</div>
</div>
