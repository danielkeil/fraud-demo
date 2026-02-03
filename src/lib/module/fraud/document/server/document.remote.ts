import * as v from 'valibot';
import { query } from '$app/server';
import { documentSchema } from '../domain/document.schema';
import { mockedDocuments } from './document.mock';

export const getDocument = query(v.string(), async (id) => {
	const doc = mockedDocuments.find((d) => d.id === id);
	if (!doc) {
		return null;
	}

	// Parsing is not needed for mocked data but
	// required when loading data from the backend api
	return v.parse(documentSchema, doc);
});
