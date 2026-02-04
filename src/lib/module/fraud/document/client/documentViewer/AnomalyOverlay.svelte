<script lang="ts">
	import type { Anomaly } from '$lib/module/fraud/document';
	import { uniformScaleStrategy } from './uniformScale';
	import { Popover } from 'bits-ui';
	import { Info } from 'lucide-svelte';

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
	<div class="absolute -top-8 left-0 flex items-center gap-1.5">
		{#if anomaly.details}
			<Popover.Root>
				<Popover.Trigger
					class="pointer-events-auto flex size-6 items-center justify-center rounded-full bg-red-500 text-red-50 outline-none hover:bg-red-600 focus:ring-2 focus:ring-black focus:ring-offset-1"
					aria-label="Anomalie-Details anzeigen"
				>
					<Info class="size-4" />
				</Popover.Trigger>
				<Popover.Portal>
					<Popover.Content
						side="top"
						align="start"
						sideOffset={8}
						class="z-50 max-w-xs rounded-lg border border-zinc-200 bg-white p-3 text-sm text-zinc-700 shadow-lg focus:outline-none"
					>
						{anomaly.details}
					</Popover.Content>
				</Popover.Portal>
			</Popover.Root>
		{/if}
		<span class="rounded bg-red-500 px-2 py-1 text-sm font-medium whitespace-nowrap text-white">
			{label}
		</span>
	</div>
</div>
