<script lang="ts">
	import type { Snippet } from 'svelte'

	type Props = {
		children: Snippet
	}

	let { children }: Props = $props()
</script>

<div class="px-4 sm:px-6 lg:px-10let pb-8">
	{#if children}
		{@render children()}
	{/if}
</div>
