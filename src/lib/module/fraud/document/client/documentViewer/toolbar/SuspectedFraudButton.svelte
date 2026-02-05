<script lang="ts">
	import { Flag } from 'lucide-svelte';
	import { useDocViewerContext } from '$lib/module/fraud/document/client/documentViewer/_context/docViewerContext.svelte.js';

	const context = useDocViewerContext();

	function toggleFlag(flagged: boolean) {
		context.isSuspectedFraud = flagged;
	}

	let isFlagged = $derived(context.isSuspectedFraud);
</script>

<button
	type="button"
	onclick={() => toggleFlag(!isFlagged)}
	class="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors outline-none
		{isFlagged ? 'bg-red-100 text-red-700 hover:bg-red-200' : 'text-zinc-700 hover:bg-zinc-100'}
		focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
>
	<Flag class="size-4" />
	Betrugsverdacht
</button>
