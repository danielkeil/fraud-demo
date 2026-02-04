<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		class?: string;
	};

	let { children, ...props }: Props = $props();
</script>

<span class={['truncate', props.class]}>
	{@render children()}
</span>
