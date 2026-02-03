import * as v from 'valibot';

const uuidSchema = v.pipe(v.string(), v.uuid('The UUID is badly formatted.'));

export const rectangleSchema = v.object({
	x: v.number(),
	y: v.number(),
	width: v.number(),
	height: v.number()
});

export const ocrSchema = v.object({
	text: v.string(),
	rect: rectangleSchema
});

export const documentSchema = v.object({
	id: uuidSchema,
	images: v.array(
		v.object({
			url: v.string(),
			width: v.number(),
			height: v.number()
		})
	),
	ocrs: v.array(ocrSchema)
});