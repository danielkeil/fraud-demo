<script lang="ts" module>
	export type OcrColor = {
		key: string;
		label: string;
		border: string;
		bg: string;
		text: string;
		swatch: string;
	};

	export const ocrColors: OcrColor[] = [
		{
			key: 'blue',
			label: 'Blue',
			border: 'border-blue-500',
			bg: 'bg-blue-500/10',
			text: 'text-blue-800',
			swatch: 'bg-blue-500'
		},
		{
			key: 'purple',
			label: 'Purple',
			border: 'border-purple-500',
			bg: 'bg-purple-500/10',
			text: 'text-purple-800',
			swatch: 'bg-purple-500'
		},
		{
			key: 'cyan',
			label: 'Cyan',
			border: 'border-cyan-600',
			bg: 'bg-cyan-600/10',
			text: 'text-cyan-800',
			swatch: 'bg-cyan-600'
		},
		{
			key: 'amber',
			label: 'Amber',
			border: 'border-amber-600',
			bg: 'bg-amber-600/10',
			text: 'text-amber-900',
			swatch: 'bg-amber-600'
		},
		{
			key: 'black',
			label: 'Black',
			border: 'border-zinc-700',
			bg: 'bg-zinc-700/10',
			text: 'text-zinc-900',
			swatch: 'bg-zinc-700'
		},
		{
			key: 'gray',
			label: 'Gray',
			border: 'border-zinc-500',
			bg: 'bg-zinc-500/10',
			text: 'text-zinc-700',
			swatch: 'bg-zinc-500'
		}
	];
</script>

<script lang="ts">
	import { X } from 'lucide-svelte';
	import { Toolbar, Popover } from 'bits-ui';
	import { tick } from 'svelte';

	type Props = {
		value: string;
		onValueChange: (color: string) => void;
	};

	let { value, onValueChange }: Props = $props();

	let containerRef: HTMLDivElement | undefined = $state();

	async function focusSelected() {
		await tick();
		const selected = containerRef?.querySelector<HTMLButtonElement>('[data-state="on"]');
		selected?.focus();
	}

	$effect(() => {
		focusSelected();
	});
</script>

<div class="min-w-48 rounded-lg border border-zinc-200 bg-white p-4" bind:this={containerRef}>
	<div class="mb-3 flex items-center justify-between">
		<h3 class="text-sm font-semibold text-zinc-900">OCR Color</h3>
		<Popover.Close
			class="rounded p-0.5 text-zinc-400 outline-none hover:text-zinc-600 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
			aria-label="Close color picker"
		>
			<X class="size-4" />
		</Popover.Close>
	</div>

	<Toolbar.Root>
		<Toolbar.Group
			type="single"
			{value}
			onValueChange={(v: string) => v && onValueChange(v)}
			class="flex flex-wrap gap-2"
		>
			{#each ocrColors as color (color.key)}
				<Toolbar.GroupItem
					value={color.key}
					aria-label={color.label}
					class="size-8 rounded-full {color.swatch} ring-offset-2 transition-transform outline-none hover:scale-110 focus:ring-2 focus:ring-yellow-400 data-[state=on]:ring-2 data-[state=on]:ring-zinc-900 focus:data-[state=on]:ring-yellow-400"
				/>
			{/each}
		</Toolbar.Group>
	</Toolbar.Root>
</div>
