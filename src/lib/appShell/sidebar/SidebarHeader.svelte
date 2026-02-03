<script lang="ts">
	import type { Snippet } from 'svelte'

	type Props = {
		children: Snippet
		class?: string
	}

	let { children, ...props }: Props = $props()
</script>

<div
	class={[
		'flex flex-col justify-center border-b border-zinc-900/5 px-4 py-4',
		'[&>[data-slot=section]+[data-slot=section]]:mt-2.5',
		props.class
	]}
>
	{@render children()}
</div>
