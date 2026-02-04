<script lang="ts">
	import { X } from 'lucide-svelte';
	import { Toolbar, Popover } from 'bits-ui';
	import { browser } from '$app/environment';

	const isMac = browser ? navigator.platform?.toUpperCase().includes('MAC') : false;
	let platform = $state(isMac ? 'mac' : 'windows');

	const shortcuts = {
		mac: {
			toggle: [
				{ label: 'Toggle Anomalies', keys: ['⌥', '⇧', 'F'] },
				{ label: 'Toggle OCR', keys: ['⌥', '⇧', 'O'] }
			],
			zoom: [
				{ label: 'Zoom In', keys: ['⌥', '⇧', '+'] },
				{ label: 'Zoom Out', keys: ['⌥', '⇧', '-'] },
				{ label: 'Reset Zoom', keys: ['⌥', '⇧', '0'] }
			]
		},
		windows: {
			toggle: [
				{ label: 'Toggle Anomalies', keys: ['Alt', 'Shift', 'F'] },
				{ label: 'Toggle OCR', keys: ['Alt', 'Shift', 'O'] }
			],
			zoom: [
				{ label: 'Zoom In', keys: ['Alt', 'Shift', '+'] },
				{ label: 'Zoom Out', keys: ['Alt', 'Shift', '-'] },
				{ label: 'Reset Zoom', keys: ['Alt', 'Shift', '0'] }
			]
		}
	};

	const currentShortcuts = $derived(shortcuts[platform as keyof typeof shortcuts]);
</script>

{#snippet shortcutList(toggle: typeof shortcuts.mac.toggle, zoom: typeof shortcuts.mac.zoom)}
	<div class="space-y-2">
		{#each toggle as shortcut (shortcut.label)}
			<div class="flex items-center justify-between gap-6">
				<span class="text-sm text-zinc-600">{shortcut.label}</span>
				<div class="flex items-center gap-1">
					{#each shortcut.keys as key, i (i)}
						{#if i > 0}
							<span class="text-xs text-zinc-400">+</span>
						{/if}
						<kbd class="px-1.5 py-0.5 text-xs font-mono bg-zinc-100 border border-zinc-300 rounded text-zinc-700">
							{key}
						</kbd>
					{/each}
				</div>
			</div>
		{/each}
	</div>
	<div class="border-t border-zinc-200 my-3"></div>
	<div class="space-y-2">
		{#each zoom as shortcut (shortcut.label)}
			<div class="flex items-center justify-between gap-6">
				<span class="text-sm text-zinc-600">{shortcut.label}</span>
				<div class="flex items-center gap-1">
					{#each shortcut.keys as key, i (i)}
						{#if i > 0}
							<span class="text-xs text-zinc-400">+</span>
						{/if}
						<kbd class="px-1.5 py-0.5 text-xs font-mono bg-zinc-100 border border-zinc-300 rounded text-zinc-700">
							{key}
						</kbd>
					{/each}
				</div>
			</div>
		{/each}
	</div>
{/snippet}

<div class="bg-white rounded-lg border border-zinc-200 p-4 min-w-96">
	<div class="flex items-center justify-between mb-3">
		<h3 class="text-sm font-semibold text-zinc-900">Keyboard Shortcuts</h3>
		<Popover.Close
			class="text-zinc-400 hover:text-zinc-600 p-0.5 rounded outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
			aria-label="Close shortcuts panel"
		>
			<X class="size-4" />
		</Popover.Close>
	</div>

	<Toolbar.Root class="grid w-full grid-cols-2 gap-1 p-1 bg-zinc-100 rounded-lg mb-3">
		<Toolbar.Group type="single" bind:value={platform} class="contents">
			<Toolbar.GroupItem
				value="mac"
				class="h-8 rounded-md text-sm font-medium text-zinc-600 data-[state=on]:bg-white data-[state=on]:text-zinc-900 data-[state=on]:shadow-sm transition-all outline-none focus:ring-2 focus:ring-yellow-400"
			>
				Mac
			</Toolbar.GroupItem>
			<Toolbar.GroupItem
				value="windows"
				class="h-8 rounded-md text-sm font-medium text-zinc-600 data-[state=on]:bg-white data-[state=on]:text-zinc-900 data-[state=on]:shadow-sm transition-all outline-none focus:ring-2 focus:ring-yellow-400"
			>
				Windows / Linux
			</Toolbar.GroupItem>
		</Toolbar.Group>
	</Toolbar.Root>

	{@render shortcutList(currentShortcuts.toggle, currentShortcuts.zoom)}
</div>
