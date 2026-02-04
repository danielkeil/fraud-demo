<script lang="ts">
	import type { Snippet } from 'svelte'
    import {resolve} from "$app/paths";

	type Props = {
		current?: boolean
		children: Snippet
		class?: string
		href?: string
		onclick?: () => void
		'aria-label'?: string
	}

	let { current = false, children, href, onclick, ...props }: Props = $props()

	const itemClasses = [
		// Base
		'relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-zinc-900 sm:text-sm/5',
		// Leading icon
		'[&>svg]:size-6 [&>svg]:shrink-0 [&>svg]:text-zinc-500 sm:[&>svg]:size-5',
		// Avatar
		'[&>[data-slot=avatar]]:-m-0.5 [&>[data-slot=avatar]]:size-7 sm:[&>[data-slot=avatar]]:size-6',
		// Hover
		'hover:bg-zinc-900/5 hover:[&>svg]:text-zinc-900',
		// Active
		'active:bg-zinc-900/5 active:[&>svg]:text-zinc-900'
	]
</script>

<span class={['relative', props.class]}>
	{#if href}
		<a {href} class={itemClasses} data-current={current ? 'true' : undefined} {...props}>
			{@render children()}
		</a>
	{:else}
		<button type="button" class={['cursor-default', itemClasses]} data-current={current ? 'true' : undefined} {onclick} {...props}>
			{@render children()}
		</button>
	{/if}
</span>
