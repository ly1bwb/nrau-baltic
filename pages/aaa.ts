console.log(
	chain(results[2022])
		.groupBy("CALL")
		.filter(["length", 2])
		.map((group, call) =>
			mergeWith({}, ...group, (objValue, srcValue, key, object, source) => {
				if (key === "MODE") {
					return;
				}
				if (key !== "CALL" && key !== "POWER") {
					object[source.MODE + "_" + key] = srcValue;
					return;
				}
				return srcValue;
			}),
		)
		.value(),
);
