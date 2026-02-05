<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		variant?: 'solid' | 'outline' | 'plain' | 'danger' | 'primary';
		children: Snippet;
		class?: string;
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
		onclick: () => void;
	};

	let {
		variant = 'solid',
		children,
		type = 'button',
		disabled,
		onclick,
		class: className,
		...props
	}: Props = $props();

	const baseStyles = [
		'relative isolate inline-flex items-center justify-center gap-x-2',
		'rounded-lg border text-base font-semibold',
		'px-3.5 py-2.5 sm:px-3 sm:py-1.5 sm:text-sm/6',
		'outline-none focus:ring-2 focus:ring-offset-2',
		'disabled:opacity-50 disabled:cursor-not-allowed'
	];

	const variantStyles = {
		solid: [
			'border-transparent bg-zinc-900 text-white',
			'hover:bg-zinc-700 active:bg-zinc-800',
			'focus:ring-zinc-800'
		],
		outline: [
			'border-zinc-900/10 text-zinc-900',
			'hover:bg-zinc-900/5 active:bg-zinc-900/10',
			'focus:ring-yellow-400'
		],
		plain: [
			'border-transparent text-zinc-900',
			'hover:bg-zinc-900/5 active:bg-zinc-900/10',
			'focus:ring-yellow-400'
		],
		danger: [
			'border-transparent bg-red-600 text-white',
			'hover:bg-red-500 active:bg-red-700',
			'focus:ring-red-600'
		],
		primary: [
			'border-transparent bg-yellow-400 text-yellow-900',
			'hover:bg-yellow-300 active:bg-yellow-500',
			'focus:ring-yellow-400'
		]
	};

	const classes = $derived([...baseStyles, ...variantStyles[variant], className]);
</script>

<button {type} class={classes} {disabled} {onclick} {...props}>
	<span
		class="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
		aria-hidden="true"
	></span>
	{@render children()}
</button>
