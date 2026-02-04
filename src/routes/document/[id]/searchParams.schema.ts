import * as v from 'valibot';

const booleanParam = v.fallback(v.picklist(['0', '1']), '1');
const ocrColorParam = v.fallback(
	v.picklist(['blue', 'purple', 'cyan', 'amber', 'yellow', 'black', 'gray', 'white']),
	'blue'
);
const ocrFocusParam = v.fallback(v.picklist(['sharp', 'medium', 'soft']), 'medium');
const ocrFontSizeParam = v.fallback(v.picklist(['small', 'medium', 'large']), 'medium');

export const searchParamsSchema = v.object({
	anomalies: booleanParam,
	ocr: booleanParam,
	ocrColor: ocrColorParam,
	ocrFocus: ocrFocusParam,
	ocrFontSize: ocrFontSizeParam
});

export const isEnabled = (value: '0' | '1') => value === '1';
