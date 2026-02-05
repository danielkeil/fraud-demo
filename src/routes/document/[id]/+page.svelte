<script lang="ts">
	import { useSearchParams } from 'runed/kit';
	import { setContext } from 'svelte';

	import { Page, PageHeader } from '$lib/designSystem/page';
	import DocumentViewer from '$lib/module/fraud/document/client/documentViewer/DocumentViewer.svelte';
	import { getDocument } from '$lib/module/fraud/document/server/document.remote';
	import { documentViewerOptions } from '$lib/module/fraud/document/domain/viewerOptions.schema';
	import {
		DOC_VIEWER_SETTINGS,
		type DocViewerContext,
		useDocViewerContext
	} from '$lib/module/fraud/document/client/documentViewer/_context/docViewerContext.svelte.js';

	let { params } = $props();

	const searchParams = useSearchParams(documentViewerOptions, {
		showDefaults: false,
		noScroll: true
	});

	let isSuspectedFraud = $state(false);
	setContext<DocViewerContext>(DOC_VIEWER_SETTINGS, {
		searchParams,
		get isSuspectedFraud() {
			return isSuspectedFraud;
		},
		set isSuspectedFraud(v: boolean) {
			isSuspectedFraud = v;
		}
	});

	let docViewerContext = useDocViewerContext();
	let suspectedFraud = $derived(docViewerContext.isSuspectedFraud);

	// this prevents: https://svelte.dev/docs/svelte/runtime-warnings#Client-warnings-await_waterfall
	let documentPromise = $derived(getDocument(params.id));
	let document = $derived(await documentPromise);
</script>

{#if document}
	<Page>
		<PageHeader title={document.name}>
			<span
				class="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-base font-medium transition-colors {suspectedFraud
					? 'bg-red-100 text-red-700'
					: 'invisible'}"
			>
				Betrugsverdacht
			</span>
		</PageHeader>
		<div class="flex h-[calc(100vh-5.5rem-1px)] flex-col">
			<DocumentViewer {document} />
		</div>
	</Page>
{:else}
	<Page>
		<PageHeader title="Dokumentenprüfung" />
		<div class="flex h-[calc(100vh-8rem)] items-center justify-center">
			<p class="text-zinc-500">Dokument wird geladen...</p>
		</div>
	</Page>
{/if}
