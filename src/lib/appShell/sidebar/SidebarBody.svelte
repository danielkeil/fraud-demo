<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		class?: string;
	};

	let { children, ...props }: Props = $props();
</script>

<div
	class={[
		'flex flex-1 flex-col overflow-y-auto p-4',
		'[&>[data-slot=section]+[data-slot=section]]:mt-8',
		props.class
	]}
>
	{@render children()}
</div>
