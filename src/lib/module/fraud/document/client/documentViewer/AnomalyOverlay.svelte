<script lang="ts">
	import type { Anomaly } from '$lib/module/fraud/document';
	import { uniformScaleStrategy } from './uniformScale';

	type Props = {
		anomaly: Anomaly;
		scale: number;
	};

	let { anomaly, scale }: Props = $props();

	const renderRect = $derived(uniformScaleStrategy(anomaly.rect, scale));

	const label = $derived(
		anomaly.type
			.split('_')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ')
	);
</script>

<div
	class="pointer-events-none absolute rounded-lg border-2 border-red-500 bg-red-500/20"
	style="left: {renderRect.left}; top: {renderRect.top}; width: {renderRect.width}; height: {renderRect.height};"
	data-anomaly-id={anomaly.id}
	data-anomaly-type={anomaly.type}
>
	<span
		class="absolute -top-6 left-0 rounded bg-red-500 px-1.5 py-0.5 text-xs font-medium whitespace-nowrap text-white"
	>
		{label}
	</span>
</div>
