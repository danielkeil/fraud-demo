<script lang="ts">
	import { Page, PageHeader, PageContent } from '$lib/designSystem/page';
	import { CircleUser } from 'lucide-svelte';
</script>

<Page>
	<PageHeader title="Konto" description="Verwalten Sie Ihr Benutzerkonto und Profil." />

	<PageContent>
		<div class="flex flex-col items-center justify-center py-24 text-zinc-800">
			<CircleUser class="mb-4 size-12" />
			<p class="text-sm">Diese Seite ist nicht Teil dieser Demo.</p>
		</div>
	</PageContent>
</Page>
