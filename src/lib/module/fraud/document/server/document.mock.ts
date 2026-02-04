export const mockedDocuments = [
	{
		id: '550e8400-e29b-41d4-a716-446655440000',
		images: [{ url: 'https://picsum.photos/800/1100', width: 800, height: 1100 }],
		ocrs: [{ text: 'Sample text', rect: { x: 10, y: 20, width: 100, height: 30 } }],
		anomalies: [
			{ id: 'anomaly-1', type: 'signature_mismatch', rect: { x: 150, y: 400, width: 200, height: 80 } },
			{ id: 'anomaly-2', type: 'date_inconsistency', rect: { x: 500, y: 100, width: 120, height: 40 } }
		]
	}
];
