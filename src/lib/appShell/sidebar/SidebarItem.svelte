<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fly } from 'svelte/transition';

	type Props = {
		current?: boolean;
		children: Snippet;
		class?: string;
		href?: string;
		onclick?: () => void;
	};

	let { current = false, children, href, onclick, ...props }: Props = $props();

	const itemClasses = $derived([
		// Base
		'flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-900 sm:py-2 sm:text-sm/5',
		// Hover
		'hover:bg-zinc-900/5 hover:[&>svg]:text-zinc-900',
		// Active
		'active:bg-zinc-900/5 active:[&>svg]:text-zinc-900',
		// Current
		current && '[&>svg]:text-zinc-900 rounded-lg bg-zinc-900/5',
		// Focus
		'focus:outline-2 focus:outline-yellow-400'
	]);
</script>

<span class={['relative', props.class]}>
	{#if current}
		<span
			class="absolute inset-y-2 -left-4 w-0.5 rounded-full bg-zinc-900"
			in:fly={{ x: -4, duration: 150 }}
		></span>
	{/if}
	{#if href}
		<a {href} class={itemClasses} data-current={current ? 'true' : undefined} {...props}>
			{@render children()}
		</a>
	{:else}
		<button
			type="button"
			class={['cursor-default', itemClasses]}
			data-current={current ? 'true' : undefined}
			{onclick}
			{...props}
		>
			{@render children()}
		</button>
	{/if}
</span>
