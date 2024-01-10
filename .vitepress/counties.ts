import { zipObject } from "lodash-es";

export type Country = keyof typeof COUNTIES;

export type CountyCode = {
	[K in keyof typeof COUNTIES]: keyof (typeof COUNTIES)[K];
}[keyof typeof COUNTIES];

export type County = {
	name: string;
	isActive: boolean;
};

export const COUNTIES = {
	Denmark: {
		BH: {
			name: "Bornholm",
			isActive: true,
		},
		FA: {
			name: "Faroe Islands",
			isActive: true,
		},
		FB: {
			name: "FB (deleted)",
			isActive: false,
		},
		FY: {
			name: "FY (deleted)",
			isActive: false,
		},
		GR: {
			name: "Greenland",
			isActive: true,
		},
		KH: {
			name: "Hovedstaden",
			isActive: true,
		},
		NJ: {
			name: "Nordjylland",
			isActive: true,
		},
		RO: {
			name: "RO (deleted)",
			isActive: false,
		},
		SS: {
			name: "SS (deleted)",
			isActive: false,
		},
		SJ: {
			name: "Syddanmark",
			isActive: true,
		},
		VJ: {
			name: "Midtjylland",
			isActive: true,
		},
		VS: {
			name: "Sjaelland",
			isActive: true,
		},
	},
	Estonia: {
		HM: {
			name: "Hiiu",
			isActive: true,
		},
		HR: {
			name: "Harju",
			isActive: true,
		},
		IV: {
			name: "Ida-Viru",
			isActive: true,
		},
		JG: {
			name: "Jögeva",
			isActive: true,
		},
		JR: {
			name: "Järva",
			isActive: true,
		},
		LN: {
			name: "Lääne",
			isActive: true,
		},
		LV: {
			name: "Lääne-Viru",
			isActive: true,
		},
		PL: {
			name: "Pölva",
			isActive: true,
		},
		PU: {
			name: "Pärnu",
			isActive: true,
		},
		RP: {
			name: "Rapla",
			isActive: true,
		},
		SR: {
			name: "Saare",
			isActive: true,
		},
		TA: {
			name: "Tartu",
			isActive: true,
		},
		TL: {
			name: "Tallinn",
			isActive: true,
		},
		VC: {
			name: "Valga",
			isActive: true,
		},
		VP: {
			name: "Viljandi",
			isActive: true,
		},
		VO: {
			name: "Vöru",
			isActive: true,
		},
	},
	Finland: {
		AL: {
			name: "Ahvenanmaa",
			isActive: true,
		},
		EK: {
			name: "Etelä-Karjala",
			isActive: true,
		},
		EP: {
			name: "Etelä-Pohjanmaa",
			isActive: true,
		},
		ES: {
			name: "Etelä-Savo",
			isActive: true,
		},
		KE: {
			name: "Keski-Suomi",
			isActive: true,
		},
		KL: {
			name: "Kymenlaakso",
			isActive: true,
		},
		KP: {
			name: "Keski-Pohjanmaa",
			isActive: true,
		},
		KT: {
			name: "Kanta-Häme",
			isActive: true,
		},
		KU: {
			name: "Kainuu",
			isActive: true,
		},
		LA: {
			name: "Lappi",
			isActive: true,
		},
		PH: {
			name: "Päijät-Häme",
			isActive: true,
		},
		PK: {
			name: "Pohjois-Karjala",
			isActive: true,
		},
		PM: {
			name: "Pirkanmaa",
			isActive: true,
		},
		PO: {
			name: "Pohjanmaa",
			isActive: true,
		},
		PP: {
			name: "Pohjois-Pohjanmaa",
			isActive: true,
		},
		PS: {
			name: "Pohjois-Savo",
			isActive: true,
		},
		SA: {
			name: "Satakunta",
			isActive: true,
		},
		UU: {
			name: "Uusimaa",
			isActive: true,
		},
		VA: {
			name: "Varsinais-Suomi",
			isActive: true,
		},
	},
	Iceland: {
		IS: {
			name: "Island",
			isActive: true,
		},
	},
	Latvia: {
		AI: {
			name: "Aizkraukle",
			isActive: true,
		},
		AU: {
			name: "Aluksne",
			isActive: true,
		},
		BA: {
			name: "Bauska",
			isActive: true,
		},
		BV: {
			name: "Balvi",
			isActive: true,
		},
		CE: {
			name: "Cesis",
			isActive: true,
		},
		DG: {
			name: "Daugavpils",
			isActive: true,
		},
		DO: {
			name: "Dobele",
			isActive: true,
		},
		GU: {
			name: "Gulbene",
			isActive: true,
		},
		JE: {
			name: "Jelgava",
			isActive: true,
		},
		JP: {
			name: "Jekabpils",
			isActive: true,
		},
		KG: {
			name: "Kuldiga",
			isActive: true,
		},
		KV: {
			name: "Kraslava",
			isActive: true,
		},
		LI: {
			name: "Liepaja",
			isActive: true,
		},
		LM: {
			name: "Limbazi",
			isActive: true,
		},
		LU: {
			name: "Ludza",
			isActive: true,
		},
		MD: {
			name: "Madona",
			isActive: true,
		},
		OE: {
			name: "Ogre",
			isActive: true,
		},
		PR: {
			name: "Preili",
			isActive: true,
		},
		RE: {
			name: "Rezekne",
			isActive: true,
		},
		RR: {
			name: "Riga",
			isActive: true,
		},
		SD: {
			name: "Saldus",
			isActive: true,
		},
		TS: {
			name: "Talsi",
			isActive: true,
		},
		TU: {
			name: "Tukums",
			isActive: true,
		},
		VE: {
			name: "Ventspils",
			isActive: true,
		},
		VK: {
			name: "Valka",
			isActive: true,
		},
		VR: {
			name: "Valmiera",
			isActive: true,
		},
	},
	Lithuania: {
		AT: {
			name: "Alytus",
			isActive: true,
		},
		KD: {
			name: "Klaipėda-city",
			isActive: true,
		},
		KI: {
			name: "Klaipėda",
			isActive: true,
		},
		KM: {
			name: "Kaunas-city",
			isActive: true,
		},
		KN: {
			name: "Kaunas",
			isActive: true,
		},
		MM: {
			name: "Marijampolė",
			isActive: true,
		},
		PA: {
			name: "Panevėžys",
			isActive: true,
		},
		PN: {
			name: "Panevėžys-city",
			isActive: true,
		},
		SI: {
			name: "Šiauliai-city",
			isActive: true,
		},
		SU: {
			name: "Šiauliai",
			isActive: true,
		},
		TG: {
			name: "Tauragė",
			isActive: true,
		},
		TI: {
			name: "Telšiai",
			isActive: true,
		},
		UT: {
			name: "Utena",
			isActive: true,
		},
		VU: {
			name: "Vilnius-city",
			isActive: true,
		},
		VV: {
			name: "Vilnius",
			isActive: true,
		},
	},
	Norway: {
		AA: {
			name: "Aust Agder",
			isActive: false,
		},
		AG: {
			name: "Agder",
			isActive: true,
		},
		AK: {
			name: "Akershus",
			isActive: false,
		},
		BO: {
			name: "Björnöya",
			isActive: true,
		},
		BU: {
			name: "Buskerud",
			isActive: false,
		},
		FI: {
			name: "Finnmark",
			isActive: true,
		},
		HE: {
			name: "Hedemark",
			isActive: false,
		},
		HO: {
			name: "Vestland",
			isActive: true,
		},
		IN: {
			name: "Innlandet",
			isActive: true,
		},
		JA: {
			name: "Jan Mayen",
			isActive: true,
		},
		MO: {
			name: "Möre og Romsdal",
			isActive: true,
		},
		NT: {
			name: "Nord Tröndelag",
			isActive: false,
		},
		NO: {
			name: "Nordland",
			isActive: true,
		},
		MR: {
			name: "Möre og Romsdal",
			isActive: false,
		},
		OS: {
			name: "Oslo",
			isActive: true,
		},
		OP: {
			name: "Oppland",
			isActive: false,
		},
		OF: {
			name: "Östfold",
			isActive: false,
		},
		RL: {
			name: "Rogaland",
			isActive: true,
		},
		SV: {
			name: "Svalbard",
			isActive: true,
		},
		SF: {
			name: "Sogn og Fjordane",
			isActive: false,
		},
		ST: {
			name: "Sör Tröndelag",
			isActive: false,
		},
		TE: {
			name: "Vestfold og Telemark",
			isActive: true,
		},
		TR: {
			name: "Tröndelag",
			isActive: true,
		},
		VF: {
			name: "Viken",
			isActive: true,
		},
		XX: {
			name: "Troms",
			isActive: true,
		},
	},
	Sweden: {
		BL: {
			name: "Blekinge",
			isActive: true,
		},
		DA: {
			name: "Dalarna",
			isActive: true,
		},
		GA: {
			name: "Gävleborg",
			isActive: true,
		},
		GO: {
			name: "Gotland",
			isActive: true,
		},
		HA: {
			name: "Halland",
			isActive: true,
		},
		JL: {
			name: "Jämtland",
			isActive: true,
		},
		JO: {
			name: "Jönköping",
			isActive: true,
		},
		KA: {
			name: "Kalmar",
			isActive: true,
		},
		KR: {
			name: "Kronoberg",
			isActive: true,
		},
		NB: {
			name: "Norrbotten",
			isActive: true,
		},
		OG: {
			name: "Östergötland",
			isActive: true,
		},
		OR: {
			name: "Örebro",
			isActive: true,
		},
		SE: {
			name: "Skåne",
			isActive: true,
		},
		SL: {
			name: "Stockholm",
			isActive: true,
		},
		SO: {
			name: "Södermanland",
			isActive: true,
		},
		UP: {
			name: "Uppsala",
			isActive: true,
		},
		VB: {
			name: "Västerbotten",
			isActive: true,
		},
		VD: {
			name: "Västra Götaland",
			isActive: true,
		},
		VL: {
			name: "Värmland",
			isActive: true,
		},
		VM: {
			name: "Västmanland",
			isActive: true,
		},
		VN: {
			name: "Västernorrland",
			isActive: true,
		},
	},
} as const;

export const COUNTRIES = Object.keys(COUNTIES) as Country[];

const colorList = [
	"#5470c6",
	"#91cc75",
	"#fac858",
	"#ee6666",
	"#73c0de",
	"#3ba272",
	"#fc8452",
	"#9a60b4",
];

export const countryColorMap = zipObject(COUNTRIES, colorList);

export const findCountry = (county: CountyCode): Country | undefined => {
	const country = Object.entries(COUNTIES).find(([_, counties]) =>
		Object.keys(counties).includes(county),
	)?.[0] as Country;

	if (!country) {
		throw Error(`Could not find country for ${county} county`);
	}

	return country;
};
