// A4 at 150 DPI: 1240 x 1754 pixels
export const mockedDocuments = [
	{
		id: '550e8400-e29b-41d4-a716-446655440000',
		name: 'RE-2024-0847 - Demoklinik Halle (Saale)',
		images: [{ url: '/invoice-mock.png', width: 1240, height: 1754 }],
		ocrs: [
			// Header
			{ text: 'RECHNUNG', rect: { x: 78, y: 80, width: 279, height: 56 } },
			{ text: 'Demoklinik Halle (Saale)', rect: { x: 78, y: 160, width: 380, height: 35 } },
			{ text: 'Rehabilitationszentrum', rect: { x: 78, y: 199, width: 280, height: 29 } },
			{ text: 'Magdeburger Straße 42', rect: { x: 78, y: 232, width: 280, height: 29 } },
			{ text: '06112 Halle (Saale)', rect: { x: 78, y: 265, width: 250, height: 29 } },
			// Invoice details
			{ text: 'Rechnungsnr.: RE-2024-0847', rect: { x: 853, y: 160, width: 310, height: 32 } },
			{ text: 'Datum: 15.01.2024', rect: { x: 853, y: 199, width: 233, height: 32 } },
			{ text: 'IK: 261100842', rect: { x: 853, y: 239, width: 180, height: 32 } },
			// Patient info
			{ text: 'Patient:', rect: { x: 78, y: 351, width: 100, height: 29 } },
			{ text: 'Max Mustermann', rect: { x: 78, y: 384, width: 220, height: 35 } },
			{ text: 'geb. 12.05.1962', rect: { x: 78, y: 420, width: 200, height: 29 } },
			{ text: 'Vers.-Nr.: A123456789', rect: { x: 78, y: 453, width: 280, height: 29 } },
			// Kostenträger
			{ text: 'Kostenträger:', rect: { x: 620, y: 351, width: 180, height: 29 } },
			{ text: 'AOK Sachsen-Anhalt', rect: { x: 620, y: 384, width: 280, height: 35 } },
			{ text: 'IK: 101097008', rect: { x: 620, y: 420, width: 180, height: 29 } },
			// Behandlungszeitraum
			{
				text: 'Behandlungszeitraum: 04.12.2023 - 08.01.2024',
				rect: { x: 78, y: 510, width: 520, height: 32 }
			},
			// Table header
			{ text: 'Leistung', rect: { x: 78, y: 574, width: 120, height: 32 } },
			{ text: 'Anzahl', rect: { x: 620, y: 574, width: 93, height: 32 } },
			{ text: 'Einzelpreis', rect: { x: 806, y: 574, width: 155, height: 32 } },
			{ text: 'Betrag', rect: { x: 1054, y: 574, width: 109, height: 32 } },
			// Line items - Reha treatments
			{ text: 'Physiotherapie (KG)', rect: { x: 78, y: 638, width: 280, height: 32 } },
			{ text: '24', rect: { x: 620, y: 638, width: 50, height: 32 } },
			{ text: '28,50 €', rect: { x: 806, y: 638, width: 124, height: 32 } },
			{ text: '684,00 €', rect: { x: 1023, y: 638, width: 147, height: 32 } },
			{ text: 'Ergotherapie', rect: { x: 78, y: 694, width: 200, height: 32 } },
			{ text: '18', rect: { x: 620, y: 694, width: 50, height: 32 } },
			{ text: '42,00 €', rect: { x: 806, y: 694, width: 124, height: 32 } },
			{ text: '756,00 €', rect: { x: 1023, y: 694, width: 147, height: 32 } },
			{ text: 'Logopädie', rect: { x: 78, y: 750, width: 160, height: 32 } },
			{ text: '12', rect: { x: 620, y: 750, width: 50, height: 32 } },
			{ text: '52,80 €', rect: { x: 806, y: 750, width: 124, height: 32 } },
			{ text: '633,60 €', rect: { x: 1023, y: 750, width: 147, height: 32 } },
			{
				text: 'Unterkunft & Verpflegung (35 Tage)',
				rect: { x: 78, y: 806, width: 420, height: 32 }
			},
			{ text: '35', rect: { x: 620, y: 806, width: 50, height: 32 } },
			{ text: '185,00 €', rect: { x: 806, y: 806, width: 124, height: 32 } },
			{ text: '6.475,00 €', rect: { x: 1023, y: 806, width: 147, height: 32 } },
			// Totals
			{ text: 'Zwischensumme:', rect: { x: 806, y: 890, width: 202, height: 32 } },
			{ text: '8.548,60 €', rect: { x: 1023, y: 890, width: 147, height: 32 } },
			{ text: 'Zuzahlung Patient:', rect: { x: 806, y: 930, width: 202, height: 32 } },
			{ text: '- 280,00 €', rect: { x: 1023, y: 930, width: 147, height: 32 } },
			{ text: 'Rechnungsbetrag:', rect: { x: 806, y: 990, width: 186, height: 38 } },
			{ text: '8.268,60 €', rect: { x: 1008, y: 990, width: 163, height: 38 } },
			// Bankverbindung
			{ text: 'Bankverbindung:', rect: { x: 78, y: 1120, width: 202, height: 29 } },
			{ text: 'Demobank Halle', rect: { x: 78, y: 1156, width: 200, height: 29 } },
			{
				text: 'IBAN: DE12 8765 4321 0987 6543 21',
				rect: { x: 78, y: 1192, width: 420, height: 29 }
			},
			{ text: 'BIC: DEMODEXXHAL', rect: { x: 78, y: 1228, width: 264, height: 29 } },
			// Footer
			{ text: 'Zahlungsziel: 30 Tage', rect: { x: 78, y: 1280, width: 280, height: 29 } },
			{
				text: 'Bei Rückfragen: abrechnung@demoklinik-halle.de',
				rect: { x: 78, y: 1320, width: 520, height: 29 }
			}
		],
		anomalies: [
			{
				id: 'anomaly-1',
				type: 'manipulierter_betrag',
				rect: { x: 992, y: 974, width: 186, height: 64 },
				details:
					'Der Rechnungsbetrag weist Pixelartefakte auf, die auf eine nachträgliche Bearbeitung hindeuten. Die Ziffern stimmen nicht mit dem Schriftbild der restlichen Beträge überein.'
			},
			{
				id: 'anomaly-2',
				type: 'verdächtige_iban',
				rect: { x: 62, y: 1180, width: 440, height: 80 },
				details:
					'Die IBAN weicht von der im Institutionskennzeichen (IK) registrierten Bankverbindung der Demoklinik ab.'
			},
			{
				id: 'anomaly-3',
				type: 'überhöhte_leistungsmenge',
				rect: { x: 600, y: 790, width: 90, height: 48 },
				details:
					'35 Tage Unterkunft bei einem Behandlungszeitraum von 36 Tagen ist ungewöhnlich hoch. Prüfung der tatsächlichen Aufenthaltsdauer empfohlen.'
			},
			{
				id: 'anomaly-4',
				type: 'ik_abweichung',
				rect: { x: 837, y: 223, width: 200, height: 48 },
				details:
					'Das Institutionskennzeichen (IK) stimmt nicht mit dem im Kostenträgerverzeichnis hinterlegten IK der Demoklinik Halle überein.'
			}
		]
	}
];
