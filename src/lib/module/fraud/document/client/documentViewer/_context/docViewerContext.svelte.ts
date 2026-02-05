import { getContext } from 'svelte';
import type { ReturnUseSearchParams } from 'runed/kit';
import { documentViewerOptions } from '$lib/module/fraud/document/domain/viewerOptions.schema';

export const DOC_VIEWER_SETTINGS = Symbol('doc_viewer_settings');

export function useDocViewerContext() {
	return getContext<DocViewerContext>(DOC_VIEWER_SETTINGS);
}

export type DocViewerContext = {
	searchParams: ReturnUseSearchParams<typeof documentViewerOptions>;
	isSuspectedFraud: boolean;
};
