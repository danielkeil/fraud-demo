import { getContext } from 'svelte';

export function createZoomContext({ initial = 1, min = 0.75, max = 3, step = 0.25 } = {}) {
	const zoom = $state({ scale: initial });

	const clamp = (v: number) => Math.min(max, Math.max(min, v));

	return {
		get scale() {
			return zoom.scale;
		},
		in: () => (zoom.scale = clamp(zoom.scale + step)),
		out: () => (zoom.scale = clamp(zoom.scale - step)),
		reset: () => (zoom.scale = initial),
		set: (v: number) => (zoom.scale = clamp(v))
	};
}

export const ZOOM = Symbol('zoom');

export type ZoomContext = ReturnType<typeof createZoomContext>;

export function useZoomContext() {
	return getContext<ZoomContext>(ZOOM);
}
