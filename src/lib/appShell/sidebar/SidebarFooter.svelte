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
		'flex flex-col border-t border-zinc-900/5 p-4',
		'[&>[data-slot=section]+[data-slot=section]]:mt-2.5',
		props.class
	]}
>
	{@render children()}
</div>
