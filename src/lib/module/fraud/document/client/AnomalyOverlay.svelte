<script lang="ts">
	import type { Anomaly } from '../domain/document.schema';
	import type { CoordinateMappingStrategy } from '../domain/coordinateMapping';

	type Props = {
		anomaly: Anomaly;
		sourceSize: { width: number; height: number };
		scale: number;
		strategy: CoordinateMappingStrategy;
	};

	let { anomaly, sourceSize, scale, strategy }: Props = $props();

	const renderRect = $derived(strategy.map(anomaly.rect, sourceSize, scale));
</script>

<div
	class="absolute border-2 border-red-500 bg-red-500/20 rounded-lg pointer-events-none"
	style="left: {renderRect.left}; top: {renderRect.top}; width: {renderRect.width}; height: {renderRect.height};"
	data-anomaly-id={anomaly.id}
	data-anomaly-type={anomaly.type}
></div>
