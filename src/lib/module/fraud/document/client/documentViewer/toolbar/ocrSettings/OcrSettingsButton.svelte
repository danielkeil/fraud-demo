<script lang="ts">
	import { Popover } from 'bits-ui';
	import OcrSettings from './OcrSettings.svelte';
	import { ocrColors } from './ocrSettings.ts';
	import { useDocViewerContext } from '$lib/module/fraud/document/client/documentViewer/_context/docViewerContext.svelte.js';

	let docViewerContext = useDocViewerContext();

	let color = $derived(docViewerContext.searchParams.ocrColor);
	let currentColor = $derived(ocrColors.find((c) => c.key === color) ?? ocrColors[0]);
</script>

<Popover.Root>
	<Popover.Trigger
		class="size-6 rounded-full {currentColor.swatch} ring-offset-2 transition-transform outline-none hover:scale-110 focus:ring-2 focus:ring-yellow-400"
		aria-label="OCR-Farbe ändern"
	/>
	<Popover.Portal>
		<Popover.Content side="top" align="center" sideOffset={12} class="z-50">
			<OcrSettings />
		</Popover.Content>
	</Popover.Portal>
</Popover.Root>
