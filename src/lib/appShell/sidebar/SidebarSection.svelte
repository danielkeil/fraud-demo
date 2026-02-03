<script lang="ts">
	import type { Snippet } from 'svelte'

	type Props = {
		children: Snippet
		class?: string
	}

	let { children, ...props }: Props = $props()
</script>

<div data-slot="section" class={['flex flex-col gap-0.5', props.class]}>
	{@render children()}
</div>
