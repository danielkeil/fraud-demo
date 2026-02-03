<script lang="ts">
	import { CircleUser, ChevronDown, Settings, LogOut } from 'lucide-svelte'
	import SidebarAccountItem from './SidebarAccountItem.svelte';
	import { goto } from '$app/navigation';

	let menuOpen = $state(false);

	function logout() {
			// out of scope
	}
</script>

<div class="relative">
	<DropdownMenu.Root bind:open={menuOpen}>
		<DropdownMenu.Trigger
			class="flex w-full items-center gap-3 rounded-lg px-2 py-2.5
			       text-left text-base/6 font-medium text-zinc-900
			       hover:bg-zinc-900/5
			       focus:outline-2 focus:outline-yellow-400
			       sm:py-2 sm:text-sm/5"
		>
			<CircleUser class="size-6 shrink-0 text-zinc-500 sm:size-5" />
			<span class="truncate">Admin</span>

			<ChevronDown
				class="ml-auto size-5 shrink-0 text-zinc-400
				       transition-transform duration-200 sm:size-4
				       {menuOpen ? 'rotate-180' : ''}"
			/>
		</DropdownMenu.Trigger>

		<DropdownMenu.Portal>
			<DropdownMenu.Content
				class="z-50 w-[var(--bits-dropdown-menu-anchor-width)]
				       rounded-lg bg-white p-1
				       ring-1 ring-zinc-900/5"
				side="top"
				sideOffset={8}
			>
				<SidebarAccountItem
					onSelect={() => goto('/account')}
				>
					Konto
				</SidebarAccountItem>

				<SidebarAccountItem
					onSelect={() => goto('/settings')}
				>
					Einstellungen
				</SidebarAccountItem>

				<DropdownMenu.Separator class="my-1 h-px bg-zinc-900/5" />

				<SidebarAccountItem
					onSelect={logout}
				>
					Abmelden
				</SidebarAccountItem>
			</DropdownMenu.Content>
		</DropdownMenu.Portal>
	</DropdownMenu.Root>
</div>