<script lang="ts">
	import { Page, PageHeader, PageContent } from '$lib/designSystem/page';
	import { Toggle, Button } from '$lib/designSystem/primitives';

	let notifications = $state(true);
	let darkMode = $state(false);
	let disabledToggle = $state(false);
</script>

<Page>
	<PageHeader title="Demo"></PageHeader>

	<PageContent>
		<div class="space-y-6 px-4 pt-16">
			<h2 class="text-lg font-semibold">Toggle Component</h2>

			<div class="space-y-4">
				<Toggle bind:checked={notifications} label="Enable notifications" />
				<Toggle bind:checked={darkMode} label="Dark mode" />
				<Toggle bind:checked={disabledToggle} label="Disabled toggle" disabled />
			</div>

			<h3 class="text-md font-medium">Bordered Variant</h3>
			<div class="space-y-4">
				<Toggle bind:checked={notifications} label="Enable notifications" variant="bordered" />
				<Toggle bind:checked={darkMode} label="Dark mode" variant="bordered" />
			</div>

			<div class="mt-4 rounded bg-zinc-100 p-4 text-sm">
				<p>Notifications: {notifications ? 'On' : 'Off'}</p>
				<p>Dark mode: {darkMode ? 'On' : 'Off'}</p>
			</div>

			<h2 class="text-lg font-semibold">Button Component</h2>

			<div class="flex gap-4">
				<Button variant="primary">Primary</Button>
				<Button>Solid</Button>
				<Button variant="outline">Outline</Button>
				<Button variant="plain">Plain</Button>
				<Button variant="danger">Delete</Button>
			</div>
		</div>
	</PageContent>
</Page>