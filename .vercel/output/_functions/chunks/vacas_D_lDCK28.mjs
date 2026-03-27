const vacas = new Proxy({"src":"/_astro/vacas.CKTapxEn.jpg","width":4608,"height":2112,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/izaskun/iturribero-abereak/src/assets/ganaderia/vacas.jpg";
							}
							
							return target[name];
						}
					});

export { vacas as v };
