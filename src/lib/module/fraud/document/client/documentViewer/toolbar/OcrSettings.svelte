<script lang="ts" module xmlns="http://www.w3.org/1999/html">
	export type OcrColor = {
		key: string;
		label: string;
		border: string;
		text: string;
		swatch: string;
	};

	export const ocrColors: OcrColor[] = [
		{
			key: 'blue',
			label: 'Blau',
			border: 'border-blue-600',
			text: 'text-blue-700',
			swatch: 'bg-blue-500'
		},
		{
			key: 'purple',
			label: 'Violett',
			border: 'border-purple-600',
			text: 'text-purple-700',
			swatch: 'bg-purple-500'
		},
		{
			key: 'cyan',
			label: 'Türkis',
			border: 'border-cyan-600',
			text: 'text-cyan-700',
			swatch: 'bg-cyan-500'
		},
		{
			key: 'amber',
			label: 'Bernstein',
			border: 'border-amber-500',
			text: 'text-amber-700',
			swatch: 'bg-amber-500'
		},
		{
			key: 'yellow',
			label: 'Gelb',
			border: 'border-yellow-500',
			text: 'text-yellow-700',
			swatch: 'bg-yellow-400'
		},
		{
			key: 'black',
			label: 'Schwarz',
			border: 'border-zinc-800',
			text: 'text-zinc-900',
			swatch: 'bg-zinc-700'
		},
		{
			key: 'gray',
			label: 'Grau',
			border: 'border-zinc-400',
			text: 'text-zinc-600',
			swatch: 'bg-zinc-400'
		},
		{
			key: 'white',
			label: 'Weiß',
			border: 'border-zinc-300',
			text: 'text-zinc-700',
			swatch: 'bg-white ring-1 ring-zinc-300'
		}
	];

	export const ocrFocusOptions = [
		{ key: 'sharp', label: 'Keine', blur: 'backdrop-blur-0' },
		{ key: 'medium', label: 'Mittel', blur: 'backdrop-blur-[1px]' },
		{ key: 'soft', label: 'Stark', blur: 'backdrop-blur-sm' }
	];

	export const ocrFontSizes = [
		{ key: 'small', label: 'S', multiplier: 10 },
		{ key: 'medium', label: 'M', multiplier: 14 },
		{ key: 'large', label: 'L', multiplier: 18 }
	];
</script>

<script lang="ts">
	import { X } from 'lucide-svelte';
	import { Toolbar, Popover } from 'bits-ui';
	import { tick } from 'svelte';

	type Props = {
		color: string;
		focus: string;
		fontSize: string;
		onColorChange: (color: string) => void;
		onFocusChange: (focus: string) => void;
		onFontSizeChange: (fontSize: string) => void;
	};

	let { color, focus, fontSize, onColorChange, onFocusChange, onFontSizeChange }: Props = $props();

	let containerRef: HTMLDivElement | undefined = $state();

	async function focusSelected() {
		await tick();
		const selected = containerRef?.querySelector<HTMLButtonElement>('[data-state="on"]');
		selected?.focus();
	}

	// we moved the handler into <script lang="ts"> for proper typing (value can be null).
	const handleColorChange = (value: string | null) => value && onColorChange(value);
	const handleFocusChange = (value: string | null) => value && onFocusChange(value);
	const handleSizeChange = (value: string | null) => value && onFontSizeChange(value);

	$effect(() => {
		focusSelected();
	});
</script>

<div class="min-w-56 rounded-lg border border-zinc-200 bg-white p-4" bind:this={containerRef}>
	<div class="mb-4 flex items-center justify-between">
		<h3 class="text-sm font-semibold text-zinc-900">OCR-Einstellungen</h3>
		<Popover.Close
			class="rounded p-0.5 text-zinc-400 outline-none hover:text-zinc-600 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
			aria-label="Einstellungen schließen"
		>
			<X class="size-4" />
		</Popover.Close>
	</div>

	<!-- Farbe -->
	<div class="mb-4">
		<span id="color-label" class="mb-2 block text-xs font-medium text-zinc-500">Farbe</span>
		<Toolbar.Root aria-labelledby="color-label">
			<Toolbar.Group
				type="single"
				value={color}
				onValueChange={handleColorChange}
				class="flex flex-wrap gap-2"
			>
				{#each ocrColors as c (c.key)}
					<Toolbar.GroupItem
						value={c.key}
						aria-label={c.label}
						class="size-7 rounded-full {c.swatch} ring-offset-2 transition-transform outline-none hover:scale-110 focus:ring-2 focus:ring-yellow-400 data-[state=on]:ring-2 data-[state=on]:ring-zinc-900 focus:data-[state=on]:ring-yellow-400"
					/>
				{/each}
			</Toolbar.Group>
		</Toolbar.Root>
	</div>

	<!-- Hintergrund-Unschärfe -->
	<div class="mb-4">
		<span id="focus-label" class="mb-2 block text-xs font-medium text-zinc-500"
			>Hintergrund-Unschärfe</span
		>
		<Toolbar.Root aria-labelledby="focus-label">
			<Toolbar.Group
				type="single"
				value={focus}
				onValueChange={handleFocusChange}
				class="flex gap-1"
			>
				{#each ocrFocusOptions as f (f.key)}
					<Toolbar.GroupItem
						value={f.key}
						class="rounded-md px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors outline-none hover:bg-zinc-100 focus:ring-2 focus:ring-yellow-400 data-[state=on]:bg-zinc-900 data-[state=on]:text-white"
					>
						{f.label}
					</Toolbar.GroupItem>
				{/each}
			</Toolbar.Group>
		</Toolbar.Root>
	</div>

	<!-- Schriftgröße -->
	<div>
		<span id="fontsize-label" class="mb-2 block text-xs font-medium text-zinc-500"
			>Schriftgröße</span
		>
		<Toolbar.Root aria-labelledby="fontsize-label">
			<Toolbar.Group
				type="single"
				value={fontSize}
				onValueChange={handleSizeChange}
				class="flex gap-1"
			>
				{#each ocrFontSizes as f (f.key)}
					<Toolbar.GroupItem
						value={f.key}
						class="rounded-md px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors outline-none hover:bg-zinc-100 focus:ring-2 focus:ring-yellow-400 data-[state=on]:bg-zinc-900 data-[state=on]:text-white"
					>
						{f.label}
					</Toolbar.GroupItem>
				{/each}
			</Toolbar.Group>
		</Toolbar.Root>
	</div>
</div>
