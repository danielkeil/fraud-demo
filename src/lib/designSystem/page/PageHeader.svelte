<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		title: string;
		description?: string;
		children?: Snippet;
	};

	let { title, description, children }: Props = $props();
</script>

<div class="border-b border-b-zinc-200 pt-5 pb-4">
	<div class="sm:flex sm:items-center">
		<div class="sm:flex-auto">
			<h1 class="text-lg font-semibold text-zinc-900">{title}</h1>
			{#if description}
				<p class="mt-2 text-base text-gray-700">{description}</p>
			{/if}
		</div>
		{#if children}
			<div class="sm:ml-16 sm:flex-none">
				{@render children()}
			</div>
		{/if}
	</div>
</div>
