import * as v from 'valibot';

const booleanParam = v.fallback(v.picklist(['0', '1']), '1');
const ocrColorParam = v.fallback(
	v.picklist(['blue', 'purple', 'cyan', 'amber', 'black', 'gray']),
	'blue'
);

export const searchParamsSchema = v.object({
	anomalies: booleanParam,
	ocr: booleanParam,
	ocrColor: ocrColorParam
});

export const isEnabled = (value: '0' | '1') => value === '1';
