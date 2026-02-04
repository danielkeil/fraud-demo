<script lang="ts">
    import {useSearchParams} from 'runed/kit';
    import {Page, PageHeader} from '$lib/designSystem/page';
    import {DocumentViewer} from '$lib/module/fraud/document/client';
    import {getDocument} from '$lib/module/fraud/document/server/document.remote';
    import {searchParamsSchema, isEnabled} from './searchParams.schema';

    let {params} = $props();

    const searchParams = useSearchParams(searchParamsSchema, {showDefaults: false, noScroll: true});

    const showAnomalies = $derived(isEnabled(searchParams.anomalies));
    const showOcr = $derived(isEnabled(searchParams.ocr));

    function handleToggleAnomalies(show: boolean) {
        searchParams.anomalies = show ? '1' : '0';
    }

    function handleToggleOcr(show: boolean) {
        searchParams.ocr = show ? '1' : '0';
    }
</script>

{#await getDocument(params.id)}
    <Page>
        <PageHeader title="Document Review"/>
        <div class="flex items-center justify-center h-[calc(100vh-8rem)]">
            <p class="text-zinc-500">Loading document...</p>
        </div>
    </Page>
{:then document}
    {#if document}
        <Page>
            <PageHeader title="Document Review"/>
            <div class="flex flex-col h-[calc(100vh-8rem)]">
                <DocumentViewer
                    {document}
                    {showAnomalies}
                    {showOcr}
                    onToggleAnomalies={handleToggleAnomalies}
                    onToggleOcr={handleToggleOcr}
                />
            </div>
        </Page>
    {:else}
        <p>Document not found</p>
    {/if}
{:catch}
    <Page>
        <PageHeader title="Document Review"/>
        <p class="text-red-500">Error loading document</p>
    </Page>
{/await}
