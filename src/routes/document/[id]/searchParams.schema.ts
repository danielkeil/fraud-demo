import * as v from 'valibot';

const toggleParam = v.fallback(v.picklist(['0', '1']), '1');

export const searchParamsSchema = v.object({
	anomalies: toggleParam,
	ocr: toggleParam
});

export const isEnabled = (value: '0' | '1') => value !== '0';
