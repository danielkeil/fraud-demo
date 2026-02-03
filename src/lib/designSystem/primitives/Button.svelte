<script lang="ts">
	import type { Snippet } from 'svelte'

	type Props = {
		variant?: 'solid' | 'outline' | 'plain'
		children: Snippet
		class?: string
		href?: string
		type?: 'button' | 'submit' | 'reset'
		disabled?: boolean
		onclick?: () => void
	}

	let { variant = 'solid', children, href, type = 'button', disabled, onclick, ...props }: Props = $props()

	const baseStyles = [
		'relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border text-base/6 font-semibold',
		'px-3.5 py-2.5 sm:px-3 sm:py-1.5 sm:text-sm/6',
		'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500',
		'disabled:opacity-50 disabled:cursor-not-allowed',
	]

	const variantStyles = {
		solid: [
			'border-transparent bg-zinc-900 text-white',
			'hover:bg-zinc-700 active:bg-zinc-800',
		],
		outline: [
			'border-zinc-900/10 text-zinc-900',
			'hover:bg-zinc-900/5 active:bg-zinc-900/10',
		],
		plain: [
			'border-transparent text-zinc-900',
			'hover:bg-zinc-900/5 active:bg-zinc-900/10',
		],
	}

	const classes = $derived([baseStyles, variantStyles[variant], props.class])
</script>

{#if href}
	<a {href} class={classes} {...props}>
		<span
			class="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
			aria-hidden="true"
		></span>
		{@render children()}
	</a>
{:else}
	<button {type} class={classes} {disabled} {onclick} {...props}>
		<span
			class="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
			aria-hidden="true"
		></span>
		{@render children()}
	</button>
{/if}
