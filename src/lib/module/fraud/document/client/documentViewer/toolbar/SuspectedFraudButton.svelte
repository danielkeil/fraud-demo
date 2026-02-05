<script lang="ts">
	import { Flag } from 'lucide-svelte';

	type Props = {
		isFlagged: boolean;
		onToggle: (flagged: boolean) => void;
	};

	let { isFlagged, onToggle }: Props = $props();
</script>

<button
	type="button"
	onclick={() => onToggle(!isFlagged)}
	class="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors outline-none
		{isFlagged ? 'bg-red-100 text-red-700 hover:bg-red-200' : 'text-zinc-700 hover:bg-zinc-100'}
		focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
>
	<Flag class="size-4" />
	Betrugsverdacht
</button>
