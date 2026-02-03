<script lang="ts">
    import {Page, PageHeader} from '$lib/designSystem/page';
    import {getDocument} from '$lib/module/fraud/document/server/document.remote';

    let {params} = $props();

    const document = $derived(await getDocument(params.id));
</script>

{#if document}
    <Page>
        <PageHeader title="Konto" description="Verwalten Sie Ihr Benutzerkonto und Profil."/>

        <PageHeader title={document.id}/>
    </Page>
{:else}
    <p>Document not found</p>
{/if}
