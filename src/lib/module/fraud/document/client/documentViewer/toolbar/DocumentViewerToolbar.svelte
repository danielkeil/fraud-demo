<script lang="ts">
	import { Popover } from 'bits-ui';
	import Button from '$lib/designSystem/primitives/Button.svelte';
	import Toggle from '$lib/designSystem/primitives/Toggle.svelte';
	import SuspectedFraudButton from './SuspectedFraudButton.svelte';

	import { useZoomContext } from '../_context/zoomContext.svelte.js';
	import { useDocViewerContext } from '$lib/module/fraud/document/client/documentViewer/_context/docViewerContext.svelte.js';
	import { isEnabled } from '$lib/module/fraud/document/domain/viewerOptions.schema.js';
	import OcrSettingsButton from '$lib/module/fraud/document/client/documentViewer/toolbar/ocrSettings/OcrSettingsButton.svelte';

	const zoomContext = useZoomContext();
	const scalePercent = $derived(Math.round(zoomContext.scale * 100));

	// Document Viewer Context
	const docViewerContext = useDocViewerContext();

	const showOcr = $derived(isEnabled(docViewerContext.searchParams.ocr));
	const onToggleOcr = (value: boolean) => {
		docViewerContext.searchParams.ocr = value ? '1' : '0';
	};

	const showAnomalies = $derived(isEnabled(docViewerContext.searchParams.anomalies));
	const onToggleAnomalies = (value: boolean) => {
		docViewerContext.searchParams.anomalies = value ? '1' : '0';
	};
</script>

{#snippet separator()}
	<div class="h-6 w-px bg-zinc-200"></div>
{/snippet}

<div class="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white p-1 pl-4">
	<Toggle label="Anomalien" checked={showAnomalies} onCheckedChange={onToggleAnomalies} />

	{@render separator()}

	<Toggle label="OCR" checked={showOcr} onCheckedChange={onToggleOcr} />

	{@render separator()}

	<OcrSettingsButton />

	{@render separator()}

	<Button variant="plain" onclick={() => zoomContext.out()}>-</Button>
	<Button variant="plain" class="w-12" onclick={() => zoomContext.reset()}>{scalePercent}%</Button>
	<Button variant="plain" onclick={() => zoomContext.in()}>+</Button>

	{@render separator()}

	<SuspectedFraudButton />
</div>
