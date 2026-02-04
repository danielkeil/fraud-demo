export const mockedDocuments = [
	{
		id: '550e8400-e29b-41d4-a716-446655440000',
		images: [{ url: '/invoice-mock.png', width: 800, height: 1100 }],
		ocrs: [
			// Header
			{ text: 'RECHNUNG', rect: { x: 50, y: 50, width: 180, height: 35 } },
			{ text: 'Müller & Schmidt GmbH', rect: { x: 50, y: 100, width: 220, height: 22 } },
			{ text: 'Hauptstraße 123', rect: { x: 50, y: 125, width: 150, height: 18 } },
			{ text: '10115 Berlin, Deutschland', rect: { x: 50, y: 148, width: 200, height: 18 } },
			// Invoice details
			{ text: 'Rechnungsnr.: RE-2024-0847', rect: { x: 550, y: 100, width: 200, height: 20 } },
			{ text: 'Datum: 15.01.2024', rect: { x: 550, y: 125, width: 150, height: 20 } },
			{ text: 'Fällig: 15.02.2024', rect: { x: 550, y: 150, width: 150, height: 20 } },
			// Rechnungsempfänger
			{ text: 'Rechnungsempfänger:', rect: { x: 50, y: 220, width: 170, height: 18 } },
			{ text: 'Schneider Industries GmbH', rect: { x: 50, y: 245, width: 220, height: 22 } },
			{ text: 'Industrieweg 456', rect: { x: 50, y: 270, width: 150, height: 18 } },
			{ text: '80331 München, Deutschland', rect: { x: 50, y: 293, width: 210, height: 18 } },
			// Table header
			{ text: 'Beschreibung', rect: { x: 50, y: 360, width: 120, height: 20 } },
			{ text: 'Menge', rect: { x: 400, y: 360, width: 60, height: 20 } },
			{ text: 'Einzelpreis', rect: { x: 520, y: 360, width: 100, height: 20 } },
			{ text: 'Betrag', rect: { x: 680, y: 360, width: 70, height: 20 } },
			// Line items
			{ text: 'Beratungsleistungen - Q4 2023', rect: { x: 50, y: 400, width: 240, height: 20 } },
			{ text: '40 Std.', rect: { x: 400, y: 400, width: 60, height: 20 } },
			{ text: '150,00 €', rect: { x: 520, y: 400, width: 80, height: 20 } },
			{ text: '6.000,00 €', rect: { x: 660, y: 400, width: 95, height: 20 } },
			{ text: 'Softwarelizenz - Jahreslizenz', rect: { x: 50, y: 435, width: 230, height: 20 } },
			{ text: '1', rect: { x: 400, y: 435, width: 20, height: 20 } },
			{ text: '2.500,00 €', rect: { x: 520, y: 435, width: 95, height: 20 } },
			{ text: '2.500,00 €', rect: { x: 660, y: 435, width: 95, height: 20 } },
			{ text: 'Technischer Support - Premium', rect: { x: 50, y: 470, width: 250, height: 20 } },
			{ text: '12 Mon.', rect: { x: 400, y: 470, width: 65, height: 20 } },
			{ text: '89,00 €', rect: { x: 520, y: 470, width: 70, height: 20 } },
			{ text: '1.068,00 €', rect: { x: 660, y: 470, width: 95, height: 20 } },
			// Totals
			{ text: 'Zwischensumme:', rect: { x: 520, y: 540, width: 130, height: 20 } },
			{ text: '9.568,00 €', rect: { x: 660, y: 540, width: 95, height: 20 } },
			{ text: 'MwSt. (19%):', rect: { x: 520, y: 570, width: 110, height: 20 } },
			{ text: '1.817,92 €', rect: { x: 660, y: 570, width: 95, height: 20 } },
			{ text: 'Gesamtbetrag:', rect: { x: 520, y: 610, width: 120, height: 24 } },
			{ text: '11.385,92 €', rect: { x: 650, y: 610, width: 105, height: 24 } },
			// Bankverbindung
			{ text: 'Bankverbindung:', rect: { x: 50, y: 750, width: 130, height: 18 } },
			{
				text: 'IBAN: DE89 3704 0044 0532 0130 00',
				rect: { x: 50, y: 780, width: 290, height: 18 }
			},
			{ text: 'BIC: COBADEFFXXX', rect: { x: 50, y: 805, width: 170, height: 18 } },
			// Footer
			{ text: 'Vielen Dank für Ihren Auftrag!', rect: { x: 280, y: 920, width: 240, height: 22 } }
		],
		anomalies: [
			{
				id: 'anomaly-1',
				type: 'manipulierter_betrag',
				rect: { x: 640, y: 600, width: 120, height: 40 }
			},
			{
				id: 'anomaly-2',
				type: 'verdächtige_iban',
				rect: { x: 40, y: 770, width: 310, height: 35 }
			},
			{
				id: 'anomaly-3',
				type: 'schriftart_abweichung',
				rect: { x: 650, y: 425, width: 110, height: 30 }
			},
			{
				id: 'anomaly-4',
				type: 'datum_manipulation',
				rect: { x: 540, y: 115, width: 170, height: 30 }
			}
		]
	}
];
