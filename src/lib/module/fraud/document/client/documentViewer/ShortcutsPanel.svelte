<script lang="ts">
	import { X } from 'lucide-svelte';
	import { Toolbar, Popover } from 'bits-ui';
	import { browser } from '$app/environment';

	// todo: handle to deprecated browser.platform ( out of scope for this demo )
	const isMac = browser ? navigator.platform?.toUpperCase().includes('MAC') : false;
	let platform = $state(isMac ? 'mac' : 'windows');

	const shortcuts = {
		mac: {
			toggle: [
				{ label: 'Toggle Anomalies', keys: ['⌥', '⇧', 'F'] },
				{ label: 'Toggle OCR', keys: ['⌥', '⇧', 'O'] },
				{ label: 'Toggle Suspected Fraud', keys: ['⌥', '⇧', 'S'] }
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
				{ label: 'Toggle OCR', keys: ['Alt', 'Shift', 'O'] },
				{ label: 'Toggle Suspected Fraud', keys: ['Alt', 'Shift', 'S'] }
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
						<kbd
							class="rounded border border-zinc-300 bg-zinc-100 px-1.5 py-0.5 font-mono text-xs text-zinc-700"
						>
							{key}
						</kbd>
					{/each}
				</div>
			</div>
		{/each}
	</div>
	<div class="my-3 border-t border-zinc-200"></div>
	<div class="space-y-2">
		{#each zoom as shortcut (shortcut.label)}
			<div class="flex items-center justify-between gap-6">
				<span class="text-sm text-zinc-600">{shortcut.label}</span>
				<div class="flex items-center gap-1">
					{#each shortcut.keys as key, i (i)}
						{#if i > 0}
							<span class="text-xs text-zinc-400">+</span>
						{/if}
						<kbd
							class="rounded border border-zinc-300 bg-zinc-100 px-1.5 py-0.5 font-mono text-xs text-zinc-700"
						>
							{key}
						</kbd>
					{/each}
				</div>
			</div>
		{/each}
	</div>
{/snippet}

<div class="min-w-96 rounded-lg border border-zinc-200 bg-white p-4">
	<div class="mb-3 flex items-center justify-between">
		<h3 class="text-sm font-semibold text-zinc-900">Keyboard Shortcuts</h3>
		<Popover.Close
			class="rounded p-0.5 text-zinc-400 outline-none hover:text-zinc-600 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
			aria-label="Close shortcuts panel"
		>
			<X class="size-4" />
		</Popover.Close>
	</div>

	<Toolbar.Root class="mb-3 grid w-full grid-cols-2 gap-1 rounded-lg bg-zinc-100 p-1">
		<Toolbar.Group type="single" bind:value={platform} class="contents">
			<Toolbar.GroupItem
				value="windows"
				class="h-8 rounded-md text-sm font-medium text-zinc-600 transition-all outline-none focus:ring-2 focus:ring-yellow-400 data-[state=on]:bg-white data-[state=on]:text-zinc-900 data-[state=on]:shadow-sm"
			>
				Windows / Linux
			</Toolbar.GroupItem>
			<Toolbar.GroupItem
				value="mac"
				class="h-8 rounded-md text-sm font-medium text-zinc-600 transition-all outline-none focus:ring-2 focus:ring-yellow-400 data-[state=on]:bg-white data-[state=on]:text-zinc-900 data-[state=on]:shadow-sm"
			>
				Mac
			</Toolbar.GroupItem>
		</Toolbar.Group>
	</Toolbar.Root>

	{@render shortcutList(currentShortcuts.toggle, currentShortcuts.zoom)}
</div>
