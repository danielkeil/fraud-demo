<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		onSelect,
		icon,
		children
	}: {
		onSelect?: () => void;
		icon: Snippet;
		children: Snippet;
	} = $props();
</script>

<DropdownMenu.Item
	onSelect={onSelect}
	class="group flex cursor-pointer items-center gap-3 rounded-md px-2 py-2
		text-sm/5 text-zinc-900
	  hover:bg-gray-100
	  focus:bg-gray-100 focus:outline-2 focus:outline-yellow-400"
>
	<span class="size-5 text-zinc-500
		group-hover:text-yellow-400
		group-focus:text-yellow-400"
	>
		{@render icon()}
	</span>

	{@render children()}
</DropdownMenu.Item>
