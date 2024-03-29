import fs, { type PathOrFileDescriptor } from "node:fs";
import { parse } from "csv-parse/sync";
import path from "node:path";
import { type Country, type RegionCode, REGIONS } from "./regions";

export interface Result {
	MODE: "CW" | "PH";
	CALL: string;
	QSO_COUNT_80m: number;
	QSO_COUNT_40m: number;
	POINT_80m: number;
	POINT_40m: number;
	MULT_80m: number;
	MULT_40m: number;
	SCORE: number;
	POWER: "LOW" | "HIGH" | "MULTI";
	COUNTY: RegionCode;
	CHECKLOG: "Y" | "N";
	COUNTRY: Country;
}

declare const data: Record<number, Result[]>;
export { data };

export default {
	watch: ["assets/results/*.csv"],
	load(watchedFiles: PathOrFileDescriptor[]) {
		return watchedFiles.reduce((allResults, file) => {
			const year = path.basename(String(file), ".csv");

			const yearResults = (
				parse(fs.readFileSync(file, "utf-8"), {
					columns: true,
					skip_empty_lines: true,
					cast: true,
				}) as Result[]
			)
				.map((result) => ({
					...result,
					COUNTRY: REGIONS[result.COUNTY].country,
				}))
				.sort((a, b) => b.SCORE - a.SCORE);

			return {
				...allResults,
				[year]: yearResults,
			};
		}, {});
	},
};
