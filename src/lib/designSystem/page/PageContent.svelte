<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<div class="lg:px-10let px-4 pb-8 sm:px-6">
	{#if children}
		{@render children()}
	{/if}
</div>
