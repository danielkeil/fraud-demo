<script lang="ts">
	import { X, Menu } from 'lucide-svelte'
	import type { Snippet } from 'svelte'
	import { Dialog } from 'bits-ui'
	import NavbarItem from '../navbar/NavbarItem.svelte'

	type Props = {
		navbar: Snippet
		sidebar: Snippet
		children: Snippet
		noPadding?: boolean
	}

	let { navbar, sidebar, children, noPadding = false }: Props = $props()

	let showSidebar = $state(false)
</script>

<div class="relative isolate flex min-h-svh w-full bg-white max-lg:flex-col lg:bg-zinc-100">
	<!-- Sidebar on desktop -->
	<div class="fixed inset-y-0 left-0 w-64 max-lg:hidden">
		{@render sidebar()}
	</div>

	<!-- Sidebar on mobile (Dialog) -->
	<Dialog.Root bind:open={showSidebar}>
		<Dialog.Portal>
			<Dialog.Overlay class="fixed inset-0 z-50 bg-black/30 transition-opacity duration-200 data-[state=open]:opacity-100 data-[state=closed]:opacity-0" />
			<Dialog.Content class="fixed inset-y-0 left-0 z-50 w-full max-w-80 p-2 transition-transform duration-300 ease-out data-[state=open]:translate-x-0 data-[state=closed]:-translate-x-full">
				<div class="flex h-full flex-col rounded-lg bg-white ring-1 ring-zinc-900/5">
					<div class="-mb-3 px-4 pt-3">
						<Dialog.Close class="relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-zinc-900 hover:bg-zinc-900/5 sm:text-sm/5">
							<X class="size-5 text-zinc-500" />
							<span class="sr-only">Close navigation</span>
						</Dialog.Close>
					</div>
					{@render sidebar()}
				</div>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>

	<!-- Navbar on mobile -->
	<header class="flex items-center px-4 lg:hidden">
		<div class="py-2.5">
			<NavbarItem onclick={() => (showSidebar = true)} aria-label="Open navigation">
				<Menu class="size-5" />
			</NavbarItem>
		</div>
		<div class="min-w-0 flex-1">
			{@render navbar()}
		</div>
	</header>

	<!-- Content -->
	<main class="flex min-h-0 flex-1 flex-col pb-2 lg:min-w-0 lg:pl-64 lg:pr-2 lg:pt-2">
		<div class="flex min-h-0 flex-1 flex-col overflow-hidden lg:rounded-lg lg:bg-white lg:ring-1 lg:ring-zinc-900/5">
			{#if noPadding}
				{@render children()}
			{:else}
				<div class="flex min-h-0 flex-1 flex-col overflow-auto p-6 lg:p-10">
					{@render children()}
				</div>
			{/if}
		</div>
	</main>
</div>
