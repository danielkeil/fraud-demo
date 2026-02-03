<script lang="ts">
	import type { Snippet } from 'svelte'

	type Props = {
		children: Snippet
		class?: string
	}

	let { children, ...props }: Props = $props()
</script>

<nav class={['flex flex-1 items-center gap-4 py-2.5', props.class]}>
	{@render children()}
</nav>
