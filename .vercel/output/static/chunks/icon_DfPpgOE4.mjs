const icon = new Proxy({"src":"/_astro/icon.l4Br3cEs.png","width":101,"height":101,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/gafoor work files/lovosis/src/images/icon.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/gafoor work files/lovosis/src/images/icon.png");
							return target[name];
						}
					});

export { icon as i };
