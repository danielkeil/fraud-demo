<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLElement> & {
		children: Snippet;
		class?: string;
	};

	let { children, ...props }: Props = $props();
</script>

<nav class={['flex h-full min-h-0 flex-col', props.class]} {...props}>
	{@render children()}
</nav>
