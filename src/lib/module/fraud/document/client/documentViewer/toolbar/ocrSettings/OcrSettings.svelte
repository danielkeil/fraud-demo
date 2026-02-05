<script lang="ts">
	import { X } from 'lucide-svelte';
	import { tick } from 'svelte';
	import { Popover, Toolbar } from 'bits-ui';
	import { ocrColors, ocrFontSizes, ocrFocusOptions } from './ocrSettings';
	import { useDocViewerContext } from '$lib/module/fraud/document/client/documentViewer/_context/docViewerContext.svelte.js';
	import {
		isOcrColor,
		isOcrFocus,
		isOcrFontSize
	} from '$lib/module/fraud/document/domain/viewerOptions.schema';

	let containerRef: HTMLDivElement | undefined = $state();

	const docViewerContext = useDocViewerContext();

	const focus = $derived(docViewerContext.searchParams.ocrFocus);
	const handleFocusChange = (value: string) => {
		if (value && isOcrFocus(value)) {
			docViewerContext.searchParams.ocrFocus = value;
		}
	};

	const color = $derived(docViewerContext.searchParams.ocrColor);
	const handleColorChange = (value: string) => {
		if (value && isOcrColor(value)) {
			docViewerContext.searchParams.ocrColor = value;
		}
	};

	const fontSize = $derived(docViewerContext.searchParams.ocrFontSize);
	const handleFontSizeChange = (value: string) => {
		if (value && isOcrFontSize(value)) {
			docViewerContext.searchParams.ocrFontSize = value;
		}
	};

	async function focusSelected() {
		await tick();
		const selected = containerRef?.querySelector<HTMLButtonElement>('[data-state="on"]');
		selected?.focus();
	}

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
				{#each ocrColors as color (color.key)}
					<Toolbar.GroupItem
						value={color.key}
						aria-label={color.label}
						class="size-7 rounded-full {color.swatch} ring-offset-2 transition-transform outline-none hover:scale-110 focus:ring-2 focus:ring-yellow-400 data-[state=on]:ring-2 data-[state=on]:ring-zinc-900 focus:data-[state=on]:ring-yellow-400"
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
				{#each ocrFocusOptions as option (option.key)}
					<Toolbar.GroupItem
						value={option.key}
						class="rounded-md px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors outline-none hover:bg-zinc-100 focus:ring-2 focus:ring-yellow-400 data-[state=on]:bg-zinc-900 data-[state=on]:text-white"
					>
						{option.label}
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
				onValueChange={handleFontSizeChange}
				class="flex gap-1"
			>
				{#each ocrFontSizes as size (size.key)}
					<Toolbar.GroupItem
						value={size.key}
						class="rounded-md px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors outline-none hover:bg-zinc-100 focus:ring-2 focus:ring-yellow-400 data-[state=on]:bg-zinc-900 data-[state=on]:text-white"
					>
						{size.label}
					</Toolbar.GroupItem>
				{/each}
			</Toolbar.Group>
		</Toolbar.Root>
	</div>
</div>
