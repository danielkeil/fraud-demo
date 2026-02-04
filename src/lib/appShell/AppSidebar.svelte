<script lang="ts">
	import { page } from '$app/state';
	import {
		Sidebar,
		SidebarHeader,
		SidebarBody,
		SidebarFooter,
		SidebarSection,
		SidebarItem,
		SidebarLabel,
		SidebarHeading
	} from '.';
	import { DropdownMenu } from 'bits-ui';
	import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';
	import { FileText, CircleUser, ChevronDown, Settings, LogOut } from 'lucide-svelte';

	const pathname = $derived(page.url.pathname);

	const isActive = (base: string) => pathname === base || pathname.startsWith(`${base}/`);

	const isDemoActive = $derived(isActive('/demo'));

	let menuOpen = $state(false);

	const itemBaseClass = [
		'flex cursor-pointer items-center gap-3 px-2 py-2',
		'group rounded-md text-sm/5 text-zinc-900 hover:bg-gray-100',
		'focus:bg-gray-100 focus:outline-2 focus:outline-yellow-400'
	];

	const iconBaseClass =
		'size-5 text-zinc-500 group-hover:text-yellow-400 group-focus:text-yellow-400';
</script>

<Sidebar>
	<SidebarHeader>
		<SidebarSection>
			<div class="mt-4 mb-8 flex items-center gap-3 px-2">
				<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-950 text-white">
					<span class="text-sm font-bold">DT</span>
				</div>
				<span class="text-base font-semibold text-emerald-950">DemoTool</span>
			</div>
		</SidebarSection>
	</SidebarHeader>

	<SidebarBody>
		<SidebarSection>
			<SidebarHeading>Verwaltung</SidebarHeading>
			<SidebarItem href={resolve('/demo')} current={isDemoActive}>
				<FileText class="size-5" />
				<SidebarLabel>Demo</SidebarLabel>
			</SidebarItem>
		</SidebarSection>
	</SidebarBody>

	<SidebarFooter>
		<SidebarSection>
			<div class="relative">
				<DropdownMenu.Root bind:open={menuOpen}>
					<DropdownMenu.Trigger
						class="flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-900 hover:bg-zinc-900/5 focus:outline-2 focus:outline-yellow-400 sm:py-2 sm:text-sm/5"
					>
						<CircleUser class="size-6 shrink-0 text-zinc-500 sm:size-5" />
						<span class="truncate">Max Mustermann</span>
						<ChevronDown
							class="ml-auto size-5 shrink-0 text-zinc-400 transition-transform duration-200 sm:size-4 {menuOpen
								? 'rotate-180'
								: ''}"
						/>
					</DropdownMenu.Trigger>
					<DropdownMenu.Portal>
						<DropdownMenu.Content
							class="z-50 w-[var(--bits-dropdown-menu-anchor-width)] rounded-lg bg-white p-1 ring-1 ring-zinc-900/5 hover:ring-zinc-900/5 focus:outline-yellow-400"
							sideOffset={8}
							side="top"
						>
							<DropdownMenu.Item onSelect={() => goto(resolve('/account'))} class={itemBaseClass}>
								<CircleUser class={iconBaseClass} />
								Konto
							</DropdownMenu.Item>
							<DropdownMenu.Item onSelect={() => goto(resolve('/settings'))} class={itemBaseClass}>
								<Settings class={iconBaseClass} />
								Einstellungen
							</DropdownMenu.Item>
							<DropdownMenu.Separator class="my-1 h-px bg-zinc-900/5" />
							<DropdownMenu.Item class={itemBaseClass}>
								<LogOut class={iconBaseClass} />
								Abmelden
							</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu.Portal>
				</DropdownMenu.Root>
			</div>
		</SidebarSection>
	</SidebarFooter>
</Sidebar>
