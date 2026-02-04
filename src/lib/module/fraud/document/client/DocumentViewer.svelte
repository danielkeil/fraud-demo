<script lang="ts">
	import type { Document } from '../domain/document.schema';
	import { pixelPerfectStrategy } from '../domain/coordinateMapping';
	import AnomalyOverlay from './AnomalyOverlay.svelte';
	import DocumentViewerToolbar from './DocumentViewerToolbar.svelte';
	import ShortcutsButton from './ShortcutsButton.svelte';

	type Props = {
		document: Document;
		showAnomalies?: boolean;
		showOcr?: boolean;
		onToggleAnomalies?: (show: boolean) => void;
		onToggleOcr?: (show: boolean) => void;
	};

	let { document, showAnomalies = true, showOcr = true, onToggleAnomalies, onToggleOcr }: Props = $props();

	let scale = $state(1);
	const minScale = 0.25;
	const maxScale = 3;
	const scaleStep = 0.25;

	let scrollContainer: HTMLDivElement;
	let savedScrollTop = 0;
	let savedScrollLeft = 0;

	// Restore scroll position after toggle changes
	$effect(() => {
		// Track these to trigger effect
		showAnomalies;
		showOcr;

		// Use double rAF to ensure we restore after all browser updates
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				if (scrollContainer && (savedScrollTop > 0 || savedScrollLeft > 0)) {
					scrollContainer.scrollTop = savedScrollTop;
					scrollContainer.scrollLeft = savedScrollLeft;
				}
			});
		});
	});

	function saveScrollPosition() {
		if (scrollContainer) {
			savedScrollTop = scrollContainer.scrollTop;
			savedScrollLeft = scrollContainer.scrollLeft;
		}
	}

	const image = $derived(document.images[0]);
	const strategy = pixelPerfectStrategy;

	function zoomIn() {
		scale = Math.min(maxScale, scale + scaleStep);
	}

	function zoomOut() {
		scale = Math.max(minScale, scale - scaleStep);
	}

	function resetZoom() {
		scale = 1;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (!event.altKey || !event.shiftKey) return;

		if (event.code === 'KeyF') {
			event.preventDefault();
			onToggleAnomalies?.(!showAnomalies);
		} else if (event.code === 'KeyO') {
			event.preventDefault();
			onToggleOcr?.(!showOcr);
		} else if (event.code === 'Minus' || event.code === 'Slash' || event.code === 'NumpadSubtract') {
			event.preventDefault();
			zoomOut();
		} else if (event.code === 'Equal' || event.code === 'BracketRight' || event.code === 'NumpadAdd') {
			event.preventDefault();
			zoomIn();
		} else if (event.code === 'Digit0' || event.code === 'Numpad0') {
			event.preventDefault();
			resetZoom();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="relative flex-1 min-h-0 flex flex-col">
	<div bind:this={scrollContainer} class="flex-1 min-h-0 overflow-auto bg-zinc-100">
		<div class="min-h-full min-w-full flex items-center justify-center p-8">
			<div class="relative" style="width: {image.width * scale}px; height: {image.height * scale}px;">
				<img
					src={image.url}
					alt="Document"
					class="block"
					style="width: {image.width * scale}px; height: {image.height * scale}px;"
				/>
				{#if showAnomalies}
					{#each document.anomalies as anomaly (anomaly.id)}
						<AnomalyOverlay
							{anomaly}
							sourceSize={{ width: image.width, height: image.height }}
							{scale}
							{strategy}
						/>
					{/each}
				{/if}
			</div>
		</div>
	</div>
	<div class="relative flex items-center justify-center p-4 bg-white border-t border-zinc-200">
		<ShortcutsButton />
		<DocumentViewerToolbar
			{scale}
			{showAnomalies}
			{showOcr}
			onZoomIn={zoomIn}
			onZoomOut={zoomOut}
			onReset={resetZoom}
			onToggleAnomalies={(show) => { saveScrollPosition(); onToggleAnomalies?.(show); }}
			onToggleOcr={(show) => { saveScrollPosition(); onToggleOcr?.(show); }}
		/>
	</div>
</div>
