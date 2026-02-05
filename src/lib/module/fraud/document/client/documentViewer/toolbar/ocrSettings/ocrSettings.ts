type OcrColorBase = {
	label: string;
	border: string;
	text: string;
	swatch: string;
};

export const ocrColors = [
	{
		key: 'blue',
		label: 'Blau',
		border: 'border-blue-600',
		text: 'text-blue-700',
		swatch: 'bg-blue-500'
	},
	{
		key: 'purple',
		label: 'Violett',
		border: 'border-purple-600',
		text: 'text-purple-700',
		swatch: 'bg-purple-500'
	},
	{
		key: 'cyan',
		label: 'Türkis',
		border: 'border-cyan-600',
		text: 'text-cyan-700',
		swatch: 'bg-cyan-500'
	},
	{
		key: 'amber',
		label: 'Bernstein',
		border: 'border-amber-500',
		text: 'text-amber-700',
		swatch: 'bg-amber-500'
	},
	{
		key: 'yellow',
		label: 'Gelb',
		border: 'border-yellow-500',
		text: 'text-yellow-700',
		swatch: 'bg-yellow-400'
	},
	{
		key: 'black',
		label: 'Schwarz',
		border: 'border-zinc-800',
		text: 'text-zinc-900',
		swatch: 'bg-zinc-700'
	},
	{
		key: 'gray',
		label: 'Grau',
		border: 'border-zinc-400',
		text: 'text-zinc-600',
		swatch: 'bg-zinc-400'
	},
	{
		key: 'white',
		label: 'Weiß',
		border: 'border-zinc-300',
		text: 'text-zinc-700',
		swatch: 'bg-white ring-1 ring-zinc-300'
	}
] as const satisfies readonly (OcrColorBase & { key: string })[];

export type ColorKey = (typeof ocrColors)[number]['key'];
export type OcrColor = OcrColorBase & { key: ColorKey };

export const ocrFocusOptions = [
	{ key: 'low', label: 'Niedrig', blur: 'backdrop-blur-[0.5px]' },
	{ key: 'medium', label: 'Mittel', blur: 'backdrop-blur-[1px]' },
	{ key: 'high', label: 'Hoch', blur: 'backdrop-blur-[4px]' }
];

export const ocrFontSizes = [
	{ key: 'small', label: 'Klein', multiplier: 10 },
	{ key: 'medium', label: 'Mittel', multiplier: 14 },
	{ key: 'large', label: 'Groß', multiplier: 18 }
];
