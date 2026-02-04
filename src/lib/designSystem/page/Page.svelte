<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
	};

	let { children }: Props = $props();
</script>

<div class="w-full px-4">
	{#if children}
		{@render children()}
	{/if}
</div>
