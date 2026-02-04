import type { Rectangle } from './document.schema';

export type RenderRect = {
	left: string;
	top: string;
	width: string;
	height: string;
};

export interface CoordinateMappingStrategy {
	map(sourceRect: Rectangle, sourceSize: { width: number; height: number }, scale: number): RenderRect;
}

export const pixelPerfectStrategy: CoordinateMappingStrategy = {
	map(sourceRect: Rectangle, _sourceSize: { width: number; height: number }, scale: number): RenderRect {
		return {
			left: `${sourceRect.x * scale}px`,
			top: `${sourceRect.y * scale}px`,
			width: `${sourceRect.width * scale}px`,
			height: `${sourceRect.height * scale}px`
		};
	}
};
