<script lang="ts">
	import { Popover } from 'bits-ui';
	import { Button, Toggle } from '$lib/designSystem/primitives';
	import { ColorPicker, ocrColors, type OcrColor } from '$lib/designSystem/ColorPicker';
	import SuspectedFraudButton from './SuspectedFraudButton.svelte';

	type Props = {
		scale: number;
		showAnomalies: boolean;
		showOcr: boolean;
		ocrColor: string;
		suspectedFraud: boolean;
		onZoomIn: () => void;
		onZoomOut: () => void;
		onReset: () => void;
		onToggleAnomalies: (show: boolean) => void;
		onToggleOcr: (show: boolean) => void;
		onOcrColorChange: (color: string) => void;
		onSuspectedFraudChange: (flagged: boolean) => void;
	};

	let {
		scale,
		showAnomalies,
		showOcr,
		ocrColor,
		suspectedFraud,
		onZoomIn,
		onZoomOut,
		onReset,
		onToggleAnomalies,
		onToggleOcr,
		onOcrColorChange,
		onSuspectedFraudChange
	}: Props = $props();

	const scalePercent = $derived(Math.round(scale * 100));
	const currentColor = $derived(
		ocrColors.find((c: OcrColor) => c.key === ocrColor) ?? ocrColors[0]
	);
</script>

<div class="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white p-1 pl-4">
	<Toggle label="Anomalies" checked={showAnomalies} onCheckedChange={onToggleAnomalies} />

	<div class="h-6 w-px bg-zinc-200"></div>

	<Toggle label="OCR" checked={showOcr} onCheckedChange={onToggleOcr} />

	<div class="h-6 w-px bg-zinc-200"></div>

	<Popover.Root>
		<Popover.Trigger
			class="size-6 rounded-full {currentColor.swatch} ring-offset-2 transition-transform outline-none hover:scale-110 focus:ring-2 focus:ring-yellow-400"
			aria-label="Change OCR color"
		/>
		<Popover.Portal>
			<Popover.Content side="top" align="center" sideOffset={12} class="z-50">
				<ColorPicker value={ocrColor} onValueChange={onOcrColorChange} />
			</Popover.Content>
		</Popover.Portal>
	</Popover.Root>

	<div class="h-6 w-px bg-zinc-200"></div>

	<Button variant="plain" onclick={onZoomOut}>-</Button>
	<Button variant="plain" class="w-12" onclick={onReset}>{scalePercent}%</Button>
	<Button variant="plain" onclick={onZoomIn}>+</Button>

	<div class="h-6 w-px bg-zinc-200"></div>

	<SuspectedFraudButton isFlagged={suspectedFraud} onToggle={onSuspectedFraudChange} />
</div>
