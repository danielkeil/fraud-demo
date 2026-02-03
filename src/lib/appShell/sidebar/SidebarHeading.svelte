<script lang="ts">
	import type { Snippet } from 'svelte'

	type Props = {
		children: Snippet
		class?: string
	}

	let { children, ...props }: Props = $props()
</script>

<h3 class={['mb-1 px-2 text-xs/6 font-medium text-zinc-500', props.class]}>
	{@render children()}
</h3>
