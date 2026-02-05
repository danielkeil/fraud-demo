import * as v from 'valibot';

const booleanValues = ['0', '1'] as const;
const ocrColorValues = [
	'blue',
	'purple',
	'cyan',
	'amber',
	'yellow',
	'black',
	'gray',
	'white'
] as const;
const ocrFocusValues = ['low', 'medium', 'high'] as const;
const ocrFontSizeValues = ['small', 'medium', 'large'] as const;

const booleanParam = v.fallback(v.picklist(booleanValues), '1');
const ocrColorParam = v.fallback(v.picklist(ocrColorValues), 'blue');
const ocrFocusParam = v.fallback(v.picklist(ocrFocusValues), 'medium');
const ocrFontSizeParam = v.fallback(v.picklist(ocrFontSizeValues), 'medium');

export const documentViewerOptions = v.object({
	anomalies: booleanParam,
	ocr: booleanParam,
	ocrColor: ocrColorParam,
	ocrFocus: ocrFocusParam,
	ocrFontSize: ocrFontSizeParam
});

export const isEnabled = (value: '0' | '1') => value === '1';

function makePicklistGuard<const T extends readonly string[]>(values: T) {
	return (value: unknown): value is T[number] =>
		typeof value === 'string' && (values as readonly string[]).includes(value);
}

export const isOcrColor = makePicklistGuard(ocrColorValues);
export const isOcrFocus = makePicklistGuard(ocrFocusValues);
export const isOcrFontSize = makePicklistGuard(ocrFontSizeValues);
