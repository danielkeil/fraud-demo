<script lang="ts">
	import type { Snippet } from 'svelte'

	type Props = {
		children: Snippet
		class?: string
	}

	let { children, ...props }: Props = $props()
</script>

<div class={['flex items-center gap-3', props.class]}>
	{@render children()}
</div>
