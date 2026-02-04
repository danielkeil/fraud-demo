<script lang="ts">
	import type { Document } from '$lib/module/fraud/document';
	import AnomalyOverlay from './AnomalyOverlay.svelte';
	import OcrOverlay from './OcrOverlay.svelte';
	import DocumentViewerToolbar from './DocumentViewerToolbar.svelte';
	import ShortcutsButton from './ShortcutsButton.svelte';

	type Props = {
		document: Document;
		showAnomalies: boolean;
		showOcr: boolean;
		ocrColor: string;
		suspectedFraud: boolean;
		onToggleAnomalies: (show: boolean) => void;
		onToggleOcr: (show: boolean) => void;
		onOcrColorChange: (color: string) => void;
		onSuspectedFraudChange: (flagged: boolean) => void;
	};

	let {
		document,
		showAnomalies = true,
		showOcr = true,
		ocrColor = 'blue',
		suspectedFraud = false,
		onToggleAnomalies,
		onToggleOcr,
		onOcrColorChange,
		onSuspectedFraudChange
	}: Props = $props();

	let scale = $state(1);
	const minScale = 0.75;
	const maxScale = 3;
	const scaleStep = 0.25;

	const image = $derived(document.images[0]);

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
		if (!event.altKey || !event.shiftKey) {
			return;
		}

		// todo: this needs to be testen on windows and linux
		if (event.code === 'KeyF') {
			event.preventDefault();
			onToggleAnomalies?.(!showAnomalies);
		} else if (event.code === 'KeyO') {
			event.preventDefault();
			onToggleOcr?.(!showOcr);
		} else if (event.code === 'KeyS') {
			event.preventDefault();
			onSuspectedFraudChange?.(!suspectedFraud);
		} else if (
			event.code === 'Minus' ||
			event.code === 'Slash' ||
			event.code === 'NumpadSubtract'
		) {
			event.preventDefault();
			zoomOut();
		} else if (
			event.code === 'Equal' ||
			event.code === 'BracketRight' ||
			event.code === 'NumpadAdd'
		) {
			event.preventDefault();
			zoomIn();
		} else if (event.code === 'Digit0' || event.code === 'Numpad0') {
			event.preventDefault();
			resetZoom();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="flex h-full flex-col">
	<div class="min-h-0 flex-1 overflow-auto bg-transparent">
		<div class="flex min-w-full items-center justify-center p-8">
			<div
				class="relative {suspectedFraud ? 'ring-4 ring-red-500 ring-offset-4' : ''}"
				style="width: {image.width * scale}px; height: {image.height * scale}px;"
			>
				<img
					src={image.url}
					alt="Document"
					class="block"
					style="width: {image.width * scale}px; height: {image.height * scale}px;"
				/>
				{#if showOcr}
					{#each document.ocrs as ocr, i (i)}
						<OcrOverlay {ocr} {scale} color={ocrColor} />
					{/each}
				{/if}
				{#if showAnomalies}
					{#each document.anomalies as anomaly (anomaly.id)}
						<AnomalyOverlay {anomaly} {scale} />
					{/each}
				{/if}
			</div>
		</div>
	</div>
    <div class="-mx-4 px-8 relative border-t border-zinc-200 bg-white h-[1px]"></div>
    <div class="relative bg-white h-[60px] flex items-center justify-center">
		<ShortcutsButton />
		<DocumentViewerToolbar
			{scale}
			{showAnomalies}
			{showOcr}
			{ocrColor}
			{suspectedFraud}
			onZoomIn={zoomIn}
			onZoomOut={zoomOut}
			onReset={resetZoom}
			{onToggleAnomalies}
			{onToggleOcr}
			{onOcrColorChange}
			{onSuspectedFraudChange}
        />
	</div>
</div>
