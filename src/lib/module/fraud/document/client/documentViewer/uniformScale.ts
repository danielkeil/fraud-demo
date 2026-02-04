import type { Rectangle } from '$lib/module/fraud/document';

type RenderRect = {
	left: string;
	top: string;
	width: string;
	height: string;
};

type UniformScaleMap = (sourceRect: Rectangle, scale: number) => RenderRect;

export const uniformScaleStrategy: UniformScaleMap = (sourceRect, scale) => ({
	left: `${sourceRect.x * scale}px`,
	top: `${sourceRect.y * scale}px`,
	width: `${sourceRect.width * scale}px`,
	height: `${sourceRect.height * scale}px`
});
