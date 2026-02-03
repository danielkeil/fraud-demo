<script lang="ts">
	import { Page, PageHeader, PageContent } from '$lib/designSystem/page';
	import { Settings } from 'lucide-svelte';
</script>

<Page>
	<PageHeader title="Einstellungen" description="Konfigurieren Sie Ihre Anwendungseinstellungen." />

	<PageContent>
		<div class="flex flex-col items-center justify-center py-24 text-zinc-400">
			<Settings class="mb-4 size-12" />
			<p class="text-sm">Diese Seite ist nicht Teil dieser Demo.</p>
		</div>
	</PageContent>
</Page>
