<script lang="ts">
	import type { Snippet } from 'svelte'

	type Props = {
		title: string
		description?: string
		children?: Snippet
	}

	let { title, description, children }: Props = $props()
</script>

<div class="px-4 pt-7 sm:px-6 lg:px-10">
	<div class="sm:flex sm:items-center">
		<div class="sm:flex-auto">
			<h1 class="text-lg font-semibold text-zinc-900">{title}</h1>
			{#if description}
				<p class="mt-2 text-base text-gray-700">{description}</p>
			{/if}
		</div>
		{#if children}
			<div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
				{@render children()}
			</div>
		{/if}
	</div>
</div>
