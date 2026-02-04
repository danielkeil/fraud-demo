<script lang="ts">
	import { Popover } from 'bits-ui';
	import { Info } from 'lucide-svelte';
	import ShortcutsPanel from './ShortcutsPanel.svelte';
</script>

<div class="absolute left-0">
	<Popover.Root>
		<Popover.Trigger
			class="p-2 text-zinc-600 flex items-center gap-4 bg-white rounded-lg border border-dashed border-zinc-400 hover:border-zinc-600 hover:text-zinc-900 transition-colors outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 data-[state=open]:border-zinc-600 data-[state=open]:text-zinc-900"
			aria-label="Keyboard shortcuts"
		>
			<Info class="size-5" />
            Shortcuts
		</Popover.Trigger>
		<Popover.Portal>
			<Popover.Content
				side="top"
				align="start"
				sideOffset={8}
				class="z-50"
			>
				<ShortcutsPanel />
			</Popover.Content>
		</Popover.Portal>
	</Popover.Root>
</div>
