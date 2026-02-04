<script lang="ts">
	import type { Ocr } from '$lib/module/fraud/document';
	import { uniformScaleStrategy } from './uniformScale';
	import { ocrColors, type OcrColor } from '$lib/designSystem/ColorPicker';

	type Props = {
		ocr: Ocr;
		scale: number;
		color?: string;
	};

	let { ocr, scale, color = 'blue' }: Props = $props();

	const renderRect = $derived(uniformScaleStrategy(ocr.rect, scale));
	const colorConfig = $derived(ocrColors.find((c: OcrColor) => c.key === color) ?? ocrColors[0]);
</script>

<div
	class="pointer-events-none absolute flex items-center border {colorConfig.border} {colorConfig.bg}"
	style="left: {renderRect.left}; top: {renderRect.top}; width: {renderRect.width}; height: {renderRect.height};"
>
	<span class="truncate px-1 text-xs {colorConfig.text}" style="font-size: {Math.max(10, 12 * scale)}px;">
		{ocr.text}
	</span>
</div>
