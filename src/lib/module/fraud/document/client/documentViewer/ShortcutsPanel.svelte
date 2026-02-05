<script lang="ts">
	import { X } from 'lucide-svelte';
	import { Toolbar, Popover } from 'bits-ui';
	import { browser } from '$app/environment';

	// todo: handle to deprecated browser.platform ( out of scope for this demo )
	const isMac = browser ? (navigator.platform?.toUpperCase().includes('MAC') ?? false) : false;

	let platform = $state<string>(isMac ? 'mac' : 'windows');

	function getPlatform() {
		return platform;
	}

	function setPlatform(value: string) {
		if (value) {
			platform = value;
		}
	}

	const shortcuts = {
		mac: {
			toggle: [
				{ label: 'Anomalien ein/aus', keys: ['⌥', '⇧', 'F'] },
				{ label: 'OCR ein/aus', keys: ['⌥', '⇧', 'O'] },
				{ label: 'Betrugsverdacht ein/aus', keys: ['⌥', '⇧', 'S'] }
			],
			zoom: [
				{ label: 'Vergrößern', keys: ['⌥', '⇧', '+'] },
				{ label: 'Verkleinern', keys: ['⌥', '⇧', '-'] },
				{ label: 'Zoom zurücksetzen', keys: ['⌥', '⇧', '0'] }
			]
		},
		windows: {
			toggle: [
				{ label: 'Anomalien ein/aus', keys: ['Alt', 'Shift', 'F'] },
				{ label: 'OCR ein/aus', keys: ['Alt', 'Shift', 'O'] },
				{ label: 'Betrugsverdacht ein/aus', keys: ['Alt', 'Shift', 'S'] }
			],
			zoom: [
				{ label: 'Vergrößern', keys: ['Alt', 'Shift', '+'] },
				{ label: 'Verkleinern', keys: ['Alt', 'Shift', '-'] },
				{ label: 'Zoom zurücksetzen', keys: ['Alt', 'Shift', '0'] }
			]
		}
	};

	const currentShortcuts = $derived(
		shortcuts[platform as keyof typeof shortcuts] ?? shortcuts.windows
	);
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
		<h3 class="text-sm font-semibold text-zinc-900">Tastenkürzel</h3>
		<Popover.Close
			class="rounded p-0.5 text-zinc-400 outline-none hover:text-zinc-600 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
			aria-label="Tastenkürzel schließen"
		>
			<X class="size-4" />
		</Popover.Close>
	</div>

	<Toolbar.Root class="mb-3 grid w-full grid-cols-2 gap-1 rounded-lg bg-zinc-100 p-1">
		<Toolbar.Group type="single" value={getPlatform()} onValueChange={setPlatform} class="contents">
			<Toolbar.GroupItem
				value="windows"
				class="flex h-8 w-full items-center justify-center rounded-md text-sm font-medium text-zinc-600 transition-all outline-none focus:ring-2 focus:ring-yellow-400 data-[state=on]:bg-white data-[state=on]:text-zinc-900 data-[state=on]:shadow-sm"
			>
				Windows / Linux
			</Toolbar.GroupItem>
			<Toolbar.GroupItem
				value="mac"
				class="flex h-8 w-full items-center justify-center rounded-md text-sm font-medium text-zinc-600 transition-all outline-none focus:ring-2 focus:ring-yellow-400 data-[state=on]:bg-white data-[state=on]:text-zinc-900 data-[state=on]:shadow-sm"
			>
				Mac
			</Toolbar.GroupItem>
		</Toolbar.Group>
	</Toolbar.Root>

	{@render shortcutList(currentShortcuts.toggle, currentShortcuts.zoom)}
</div>
