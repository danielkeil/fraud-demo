<script lang="ts">
	import { Button, Toggle } from '$lib/designSystem/primitives';

	type Props = {
		scale: number;
		showAnomalies: boolean;
		showOcr: boolean;
		onZoomIn: () => void;
		onZoomOut: () => void;
		onReset: () => void;
		onToggleAnomalies: (show: boolean) => void;
		onToggleOcr: (show: boolean) => void;
	};

	let { scale, showAnomalies, showOcr, onZoomIn, onZoomOut, onReset, onToggleAnomalies, onToggleOcr }: Props = $props();

	const scalePercent = $derived(Math.round(scale * 100));

</script>

<div class="flex items-center gap-3 bg-white rounded-lg border border-zinc-200 p-1 pl-4">
	<Toggle label="Anomalies" checked={showAnomalies} onCheckedChange={onToggleAnomalies} />
	<Toggle label="OCR" checked={showOcr} onCheckedChange={onToggleOcr} />
	<div class="w-px h-6 bg-zinc-200"></div>
	<Button variant="plain" onclick={onZoomOut}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
			<path d="M6.75 9.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z" />
		</svg>
	</Button>
	<button
		class="min-w-16 text-center text-sm font-medium text-zinc-700 hover:bg-zinc-100 rounded px-2 py-1"
		onclick={onReset}
	>
		{scalePercent}%
	</button>
	<Button variant="plain" onclick={onZoomIn}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
			<path d="M10.75 6.75a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" />
		</svg>
	</Button>
</div>
