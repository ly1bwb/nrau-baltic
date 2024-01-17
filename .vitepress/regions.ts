import { zipObject } from "lodash-es";

export type Country = (typeof COUNTRIES)[number];

export type RegionCode = keyof typeof REGIONS;

export type Region = {
	name: (typeof REGIONS)[RegionCode]["name"];
	isActive: boolean;
	country: Country;
};

export const COUNTRIES = [
	"Denmark",
	"Estonia",
	"Finland",
	"Iceland",
	"Latvia",
	"Lithuania",
	"Norway",
	"Sweden",
] as const;

export const REGIONS = {
	BH: {
		name: "Bornholm",
		country: "Denmark",
		isActive: true,
	},
	FA: {
		name: "Faroe Islands",
		country: "Denmark",
		isActive: true,
	},
	FB: {
		name: "FB (deleted)",
		country: "Denmark",
		isActive: false,
	},
	FY: {
		name: "FY (deleted)",
		country: "Denmark",
		isActive: false,
	},
	GR: {
		name: "Greenland",
		country: "Denmark",
		isActive: true,
	},
	KH: {
		name: "Hovedstaden",
		country: "Denmark",
		isActive: true,
	},
	NJ: {
		name: "Nordjylland",
		country: "Denmark",
		isActive: true,
	},
	RO: {
		name: "RO (deleted)",
		country: "Denmark",
		isActive: false,
	},
	SS: {
		name: "SS (deleted)",
		country: "Denmark",
		isActive: false,
	},
	SJ: {
		name: "Syddanmark",
		country: "Denmark",
		isActive: true,
	},
	VJ: {
		name: "Midtjylland",
		country: "Denmark",
		isActive: true,
	},
	VS: {
		name: "Sjaelland",
		country: "Denmark",
		isActive: true,
	},
	HM: {
		name: "Hiiu",
		country: "Estonia",
		isActive: true,
	},
	HR: {
		name: "Harju",
		country: "Estonia",
		isActive: true,
	},
	IV: {
		name: "Ida-Viru",
		country: "Estonia",
		isActive: true,
	},
	JG: {
		name: "Jögeva",
		country: "Estonia",
		isActive: true,
	},
	JR: {
		name: "Järva",
		country: "Estonia",
		isActive: true,
	},
	LN: {
		name: "Lääne",
		country: "Estonia",
		isActive: true,
	},
	LV: {
		name: "Lääne-Viru",
		country: "Estonia",
		isActive: true,
	},
	PL: {
		name: "Pölva",
		country: "Estonia",
		isActive: true,
	},
	PU: {
		name: "Pärnu",
		country: "Estonia",
		isActive: true,
	},
	RP: {
		name: "Rapla",
		country: "Estonia",
		isActive: true,
	},
	SR: {
		name: "Saare",
		country: "Estonia",
		isActive: true,
	},
	TA: {
		name: "Tartu",
		country: "Estonia",
		isActive: true,
	},
	TL: {
		name: "Tallinn",
		country: "Estonia",
		isActive: true,
	},
	VC: {
		name: "Valga",
		country: "Estonia",
		isActive: true,
	},
	VP: {
		name: "Viljandi",
		country: "Estonia",
		isActive: true,
	},
	VO: {
		name: "Vöru",
		country: "Estonia",
		isActive: true,
	},
	AL: {
		name: "Ahvenanmaa",
		country: "Finland",
		isActive: true,
	},
	EK: {
		name: "Etelä-Karjala",
		country: "Finland",
		isActive: true,
	},
	EP: {
		name: "Etelä-Pohjanmaa",
		country: "Finland",
		isActive: true,
	},
	ES: {
		name: "Etelä-Savo",
		country: "Finland",
		isActive: true,
	},
	KE: {
		name: "Keski-Suomi",
		country: "Finland",
		isActive: true,
	},
	KL: {
		name: "Kymenlaakso",
		country: "Finland",
		isActive: true,
	},
	KP: {
		name: "Keski-Pohjanmaa",
		country: "Finland",
		isActive: true,
	},
	KT: {
		name: "Kanta-Häme",
		country: "Finland",
		isActive: true,
	},
	KU: {
		name: "Kainuu",
		country: "Finland",
		isActive: true,
	},
	LA: {
		name: "Lappi",
		country: "Finland",
		isActive: true,
	},
	PH: {
		name: "Päijät-Häme",
		country: "Finland",
		isActive: true,
	},
	PK: {
		name: "Pohjois-Karjala",
		country: "Finland",
		isActive: true,
	},
	PM: {
		name: "Pirkanmaa",
		country: "Finland",
		isActive: true,
	},
	PO: {
		name: "Pohjanmaa",
		country: "Finland",
		isActive: true,
	},
	PP: {
		name: "Pohjois-Pohjanmaa",
		country: "Finland",
		isActive: true,
	},
	PS: {
		name: "Pohjois-Savo",
		country: "Finland",
		isActive: true,
	},
	SA: {
		name: "Satakunta",
		country: "Finland",
		isActive: true,
	},
	UU: {
		name: "Uusimaa",
		country: "Finland",
		isActive: true,
	},
	VA: {
		name: "Varsinais-Suomi",
		country: "Finland",
		isActive: true,
	},
	IS: {
		name: "Island",
		country: "Iceland",
		isActive: true,
	},
	AI: {
		name: "Aizkraukle",
		country: "Latvia",
		isActive: true,
	},
	AU: {
		name: "Aluksne",
		country: "Latvia",
		isActive: true,
	},
	BA: {
		name: "Bauska",
		country: "Latvia",
		isActive: true,
	},
	BV: {
		name: "Balvi",
		country: "Latvia",
		isActive: true,
	},
	CE: {
		name: "Cesis",
		country: "Latvia",
		isActive: true,
	},
	DG: {
		name: "Daugavpils",
		country: "Latvia",
		isActive: true,
	},
	DO: {
		name: "Dobele",
		country: "Latvia",
		isActive: true,
	},
	GU: {
		name: "Gulbene",
		country: "Latvia",
		isActive: true,
	},
	JE: {
		name: "Jelgava",
		country: "Latvia",
		isActive: true,
	},
	JP: {
		name: "Jekabpils",
		country: "Latvia",
		isActive: true,
	},
	KG: {
		name: "Kuldiga",
		country: "Latvia",
		isActive: true,
	},
	KV: {
		name: "Kraslava",
		country: "Latvia",
		isActive: true,
	},
	LI: {
		name: "Liepaja",
		country: "Latvia",
		isActive: true,
	},
	LM: {
		name: "Limbazi",
		country: "Latvia",
		isActive: true,
	},
	LU: {
		name: "Ludza",
		country: "Latvia",
		isActive: true,
	},
	MD: {
		name: "Madona",
		country: "Latvia",
		isActive: true,
	},
	OE: {
		name: "Ogre",
		country: "Latvia",
		isActive: true,
	},
	PR: {
		name: "Preili",
		country: "Latvia",
		isActive: true,
	},
	RE: {
		name: "Rezekne",
		country: "Latvia",
		isActive: true,
	},
	RR: {
		name: "Riga",
		country: "Latvia",
		isActive: true,
	},
	SD: {
		name: "Saldus",
		country: "Latvia",
		isActive: true,
	},
	TS: {
		name: "Talsi",
		country: "Latvia",
		isActive: true,
	},
	TU: {
		name: "Tukums",
		country: "Latvia",
		isActive: true,
	},
	VE: {
		name: "Ventspils",
		country: "Latvia",
		isActive: true,
	},
	VK: {
		name: "Valka",
		country: "Latvia",
		isActive: true,
	},
	VR: {
		name: "Valmiera",
		country: "Latvia",
		isActive: true,
	},
	AT: {
		name: "Alytus",
		country: "Lithuania",
		isActive: true,
	},
	KD: {
		name: "Klaipėda-city",
		country: "Lithuania",
		isActive: true,
	},
	KI: {
		name: "Klaipėda",
		country: "Lithuania",
		isActive: true,
	},
	KM: {
		name: "Kaunas-city",
		country: "Lithuania",
		isActive: true,
	},
	KN: {
		name: "Kaunas",
		country: "Lithuania",
		isActive: true,
	},
	MM: {
		name: "Marijampolė",
		country: "Lithuania",
		isActive: true,
	},
	PA: {
		name: "Panevėžys",
		country: "Lithuania",
		isActive: true,
	},
	PN: {
		name: "Panevėžys-city",
		country: "Lithuania",
		isActive: true,
	},
	SI: {
		name: "Šiauliai-city",
		country: "Lithuania",
		isActive: true,
	},
	SU: {
		name: "Šiauliai",
		country: "Lithuania",
		isActive: true,
	},
	TG: {
		name: "Tauragė",
		country: "Lithuania",
		isActive: true,
	},
	TI: {
		name: "Telšiai",
		country: "Lithuania",
		isActive: true,
	},
	UT: {
		name: "Utena",
		country: "Lithuania",
		isActive: true,
	},
	VU: {
		name: "Vilnius-city",
		country: "Lithuania",
		isActive: true,
	},
	VV: {
		name: "Vilnius",
		country: "Lithuania",
		isActive: true,
	},
	AA: {
		name: "Aust Agder",
		country: "Norway",
		isActive: false,
	},
	AG: {
		name: "Agder",
		country: "Norway",
		isActive: true,
	},
	AK: {
		name: "Akershus",
		country: "Norway",
		isActive: false,
	},
	BO: {
		name: "Björnöya",
		country: "Norway",
		isActive: true,
	},
	BU: {
		name: "Buskerud",
		country: "Norway",
		isActive: false,
	},
	FI: {
		name: "Finnmark",
		country: "Norway",
		isActive: true,
	},
	HE: {
		name: "Hedemark",
		country: "Norway",
		isActive: false,
	},
	HO: {
		name: "Vestland",
		country: "Norway",
		isActive: true,
	},
	IN: {
		name: "Innlandet",
		country: "Norway",
		isActive: true,
	},
	JA: {
		name: "Jan Mayen",
		country: "Norway",
		isActive: true,
	},
	MO: {
		name: "Möre og Romsdal",
		country: "Norway",
		isActive: true,
	},
	NT: {
		name: "Nord Tröndelag",
		country: "Norway",
		isActive: false,
	},
	NO: {
		name: "Nordland",
		country: "Norway",
		isActive: true,
	},
	MR: {
		name: "Möre og Romsdal",
		country: "Norway",
		isActive: false,
	},
	OS: {
		name: "Oslo",
		country: "Norway",
		isActive: true,
	},
	OP: {
		name: "Oppland",
		country: "Norway",
		isActive: false,
	},
	OF: {
		name: "Östfold",
		country: "Norway",
		isActive: false,
	},
	RL: {
		name: "Rogaland",
		country: "Norway",
		isActive: true,
	},
	SV: {
		name: "Svalbard",
		country: "Norway",
		isActive: true,
	},
	SF: {
		name: "Sogn og Fjordane",
		country: "Norway",
		isActive: false,
	},
	ST: {
		name: "Sör Tröndelag",
		country: "Norway",
		isActive: false,
	},
	TE: {
		name: "Vestfold og Telemark",
		country: "Norway",
		isActive: true,
	},
	TR: {
		name: "Tröndelag",
		country: "Norway",
		isActive: true,
	},
	VF: {
		name: "Viken",
		country: "Norway",
		isActive: true,
	},
	XX: {
		name: "Troms",
		country: "Norway",
		isActive: true,
	},
	BL: {
		name: "Blekinge",
		country: "Sweden",
		isActive: true,
	},
	DA: {
		name: "Dalarna",
		country: "Sweden",
		isActive: true,
	},
	GA: {
		name: "Gävleborg",
		country: "Sweden",
		isActive: true,
	},
	GO: {
		name: "Gotland",
		country: "Sweden",
		isActive: true,
	},
	HA: {
		name: "Halland",
		country: "Sweden",
		isActive: true,
	},
	JL: {
		name: "Jämtland",
		country: "Sweden",
		isActive: true,
	},
	JO: {
		name: "Jönköping",
		country: "Sweden",
		isActive: true,
	},
	KA: {
		name: "Kalmar",
		country: "Sweden",
		isActive: true,
	},
	KR: {
		name: "Kronoberg",
		country: "Sweden",
		isActive: true,
	},
	NB: {
		name: "Norrbotten",
		country: "Sweden",
		isActive: true,
	},
	OG: {
		name: "Östergötland",
		country: "Sweden",
		isActive: true,
	},
	OR: {
		name: "Örebro",
		country: "Sweden",
		isActive: true,
	},
	SE: {
		name: "Skåne",
		country: "Sweden",
		isActive: true,
	},
	SL: {
		name: "Stockholm",
		country: "Sweden",
		isActive: true,
	},
	SO: {
		name: "Södermanland",
		country: "Sweden",
		isActive: true,
	},
	UP: {
		name: "Uppsala",
		country: "Sweden",
		isActive: true,
	},
	VB: {
		name: "Västerbotten",
		country: "Sweden",
		isActive: true,
	},
	VD: {
		name: "Västra Götaland",
		country: "Sweden",
		isActive: true,
	},
	VL: {
		name: "Värmland",
		country: "Sweden",
		isActive: true,
	},
	VM: {
		name: "Västmanland",
		country: "Sweden",
		isActive: true,
	},
	VN: {
		name: "Västernorrland",
		country: "Sweden",
		isActive: true,
	},
} as const;

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
