<script lang="ts">
	import { useSearchParams } from 'runed/kit';
	import { Page, PageHeader } from '$lib/designSystem/page';
	import DocumentViewer from '$lib/module/fraud/document/client/documentViewer/DocumentViewer.svelte';
	import { getDocument } from '$lib/module/fraud/document/server/document.remote';
	import { searchParamsSchema, isEnabled } from './searchParams.schema';

	let { params } = $props();

	// this prevents: https://svelte.dev/docs/svelte/runtime-warnings#Client-warnings-await_waterfall
	let documentPromise = $derived(getDocument(params.id));
	let document = $derived(await documentPromise);

	const searchParams = useSearchParams(searchParamsSchema, {
		showDefaults: false,
		noScroll: true
	});

	const showAnomalies = $derived(isEnabled(searchParams.anomalies));
	const showOcr = $derived(isEnabled(searchParams.ocr));
	const ocrColor = $derived(searchParams.ocrColor);
	const ocrFocus = $derived(searchParams.ocrFocus);
	const ocrFontSize = $derived(searchParams.ocrFontSize);

	let suspectedFraud = $state(false);

	function handleToggleAnomalies(show: boolean) {
		searchParams.anomalies = show ? '1' : '0';
	}

	function handleToggleOcr(show: boolean) {
		searchParams.ocr = show ? '1' : '0';
	}

	function handleOcrColorChange(color: string) {
		searchParams.ocrColor = color as typeof searchParams.ocrColor;
	}

	function handleOcrFocusChange(focus: string) {
		searchParams.ocrFocus = focus as typeof searchParams.ocrFocus;
	}

	function handleOcrFontSizeChange(fontSize: string) {
		searchParams.ocrFontSize = fontSize as typeof searchParams.ocrFontSize;
	}

	function handleSuspectedFraudChange(flagged: boolean) {
		suspectedFraud = flagged;
	}
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
			<DocumentViewer
				{document}
				{showAnomalies}
				{showOcr}
				{ocrColor}
				{ocrFocus}
				{ocrFontSize}
				{suspectedFraud}
				onToggleAnomalies={handleToggleAnomalies}
				onToggleOcr={handleToggleOcr}
				onOcrColorChange={handleOcrColorChange}
				onOcrFocusChange={handleOcrFocusChange}
				onOcrFontSizeChange={handleOcrFontSizeChange}
				onSuspectedFraudChange={handleSuspectedFraudChange}
			/>
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
