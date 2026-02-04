<script lang="ts">
	import './layout.css';

	let { children } = $props();

	import { SidebarLayout } from '$lib/appShell';
	import AppSidebar from '$lib/appShell/AppSidebar.svelte';

	import { Navbar, NavbarSpacer } from '$lib/appShell/navbar';
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" />
</svelte:head>

<SidebarLayout noPadding>
	{#snippet navbar()}
		<Navbar>
			<NavbarSpacer />
		</Navbar>
	{/snippet}

	{#snippet sidebar()}
		<AppSidebar />
	{/snippet}

	{@render children()}
</SidebarLayout>
