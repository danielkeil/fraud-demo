<script lang="ts">
	import type { Ocr } from '$lib/module/fraud/document';
	import { uniformScaleStrategy } from './uniformScale';
	import {
		ocrColors,
		ocrFocusOptions,
		ocrFontSizes,
		type OcrColor,
		type ColorKey
	} from './toolbar/ocrSettings/ocrSettings.ts';

	type Props = {
		ocr: Ocr;
		scale: number;
		color?: ColorKey;
		focus?: string;
		fontSize?: string;
	};

	let { ocr, scale, color = 'blue', focus = 'medium', fontSize = 'medium' }: Props = $props();

	const renderRect = $derived(uniformScaleStrategy(ocr.rect, scale));
	const colorConfig = $derived(ocrColors.find((c: OcrColor) => c.key === color) ?? ocrColors[0]);
	const focusConfig = $derived(ocrFocusOptions.find((f) => f.key === focus) ?? ocrFocusOptions[1]);
	const fontSizeConfig = $derived(ocrFontSizes.find((f) => f.key === fontSize) ?? ocrFontSizes[2]);

	// Map color key to Tailwind bg class - using lighter shades for better contrast
	const bgColorMap: Record<ColorKey, string> = {
		blue: 'bg-blue-100/80',
		purple: 'bg-purple-100/80',
		cyan: 'bg-cyan-100/80',
		amber: 'bg-amber-100/80',
		yellow: 'bg-yellow-100/80',
		black: 'bg-zinc-200/80',
		gray: 'bg-zinc-100/80',
		white: 'bg-white/90'
	};
	const bgClass = $derived(bgColorMap[color] ?? 'bg-blue-500/20');
</script>

<div
	class="pointer-events-none absolute flex items-center border-2 {colorConfig.border} {bgClass} {focusConfig.blur}"
	style="left: {renderRect.left}; top: {renderRect.top}; width: {renderRect.width}; height: {renderRect.height};"
>
	<span
		class="px-1 font-medium {colorConfig.text}"
		style="font-size: {Math.max(8, fontSizeConfig.multiplier * scale)}px; white-space: nowrap;"
	>
		{ocr.text}
	</span>
</div>
