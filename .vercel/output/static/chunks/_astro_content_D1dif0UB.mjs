import pLimit from 'p-limit';
import { A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_BXJjkkiU.mjs';
import { b as createComponent, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent, d as renderTemplate, f as renderComponent, u as unescapeHTML } from './astro/server_C2zacUNG.mjs';
import 'kleur/colors';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://lovosis.com/", "ASSETS_PREFIX": undefined}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/docs/advanced/technical-specifications.mdx": () => import('./technical-specifications_BxErwm1B.mjs'),"/src/content/docs/construction/custom-solutions.mdx": () => import('./custom-solutions_MOKbQ7q5.mjs'),"/src/content/docs/construction/project-planning.mdx": () => import('./project-planning_BsrO-vYJ.mjs'),"/src/content/docs/construction/safety.mdx": () => import('./safety_Cq4fYeem.mjs'),"/src/content/docs/construction/service-overview.mdx": () => import('./service-overview_Dt-ci5VA.mjs'),"/src/content/docs/de/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CZAI9IKc.mjs'),"/src/content/docs/de/guides/getting-started.mdx": () => import('./getting-started_3hpJWoM_.mjs'),"/src/content/docs/de/guides/intro.mdx": () => import('./intro_BbZn7mtl.mjs'),"/src/content/docs/de/welcome-to-docs.mdx": () => import('./welcome-to-docs_AqtVlIh5.mjs'),"/src/content/docs/es/guides/first-project-checklist.mdx": () => import('./first-project-checklist_5yYdbpz6.mjs'),"/src/content/docs/es/guides/getting-started.mdx": () => import('./getting-started_B4whJ0aC.mjs'),"/src/content/docs/es/guides/intro.mdx": () => import('./intro_CP7TnsJg.mjs'),"/src/content/docs/es/welcome-to-docs.mdx": () => import('./welcome-to-docs_BtHGV43E.mjs'),"/src/content/docs/fa/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DaWzmDRe.mjs'),"/src/content/docs/fa/guides/getting-started.mdx": () => import('./getting-started_B8BcFQ0j.mjs'),"/src/content/docs/fa/guides/intro.mdx": () => import('./intro_D4Ixhfuy.mjs'),"/src/content/docs/fa/welcome-to-docs.mdx": () => import('./welcome-to-docs_we7AOMi-.mjs'),"/src/content/docs/fr/guides/first-project-checklist.mdx": () => import('./first-project-checklist_2atM-Kwg.mjs'),"/src/content/docs/fr/guides/getting-started.mdx": () => import('./getting-started_CiCfLB9Q.mjs'),"/src/content/docs/fr/guides/intro.mdx": () => import('./intro_MOmLaczH.mjs'),"/src/content/docs/fr/welcome-to-docs.mdx": () => import('./welcome-to-docs_BPS25UoR.mjs'),"/src/content/docs/guides/first-project-checklist.mdx": () => import('./first-project-checklist_ak3Rehyx.mjs'),"/src/content/docs/guides/getting-started.mdx": () => import('./getting-started_C96BlIn-.mjs'),"/src/content/docs/guides/intro.mdx": () => import('./intro_cg2v3kBw.mjs'),"/src/content/docs/ja/guides/first-project-checklist.mdx": () => import('./first-project-checklist_Dje1kuI0.mjs'),"/src/content/docs/ja/guides/getting-started.mdx": () => import('./getting-started_CPJ79CQr.mjs'),"/src/content/docs/ja/guides/intro.mdx": () => import('./intro_BETLt6DE.mjs'),"/src/content/docs/ja/welcome-to-docs.mdx": () => import('./welcome-to-docs_BSvZu0nF.mjs'),"/src/content/docs/tools/equipment-care.mdx": () => import('./equipment-care_BkmeuPIb.mjs'),"/src/content/docs/tools/tool-guides.mdx": () => import('./tool-guides_C0e-mvo2.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('./welcome-to-docs_CDWQiC7i.mjs'),"/src/content/docs/zh-cn/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BY3_Ms1Y.mjs'),"/src/content/docs/zh-cn/guides/getting-started.mdx": () => import('./getting-started_v0cAgLAO.mjs'),"/src/content/docs/zh-cn/guides/intro.mdx": () => import('./intro_BvAgYMDv.mjs'),"/src/content/docs/zh-cn/welcome-to-docs.mdx": () => import('./welcome-to-docs_C59UVt8N.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"docs":{"type":"content","entries":{"welcome-to-docs":"/src/content/docs/welcome-to-docs.mdx","advanced/technical-specifications":"/src/content/docs/advanced/technical-specifications.mdx","construction/project-planning":"/src/content/docs/construction/project-planning.mdx","construction/safety":"/src/content/docs/construction/safety.mdx","construction/service-overview":"/src/content/docs/construction/service-overview.mdx","construction/custom-solutions":"/src/content/docs/construction/custom-solutions.mdx","de/welcome-to-docs":"/src/content/docs/de/welcome-to-docs.mdx","fr/welcome-to-docs":"/src/content/docs/fr/welcome-to-docs.mdx","es/welcome-to-docs":"/src/content/docs/es/welcome-to-docs.mdx","fa/welcome-to-docs":"/src/content/docs/fa/welcome-to-docs.mdx","guides/getting-started":"/src/content/docs/guides/getting-started.mdx","guides/first-project-checklist":"/src/content/docs/guides/first-project-checklist.mdx","guides/intro":"/src/content/docs/guides/intro.mdx","ja/welcome-to-docs":"/src/content/docs/ja/welcome-to-docs.mdx","tools/tool-guides":"/src/content/docs/tools/tool-guides.mdx","tools/equipment-care":"/src/content/docs/tools/equipment-care.mdx","zh-cn/welcome-to-docs":"/src/content/docs/zh-cn/welcome-to-docs.mdx","de/guides/first-project-checklist":"/src/content/docs/de/guides/first-project-checklist.mdx","de/guides/getting-started":"/src/content/docs/de/guides/getting-started.mdx","de/guides/intro":"/src/content/docs/de/guides/intro.mdx","fr/guides/first-project-checklist":"/src/content/docs/fr/guides/first-project-checklist.mdx","fr/guides/getting-started":"/src/content/docs/fr/guides/getting-started.mdx","es/guides/intro":"/src/content/docs/es/guides/intro.mdx","es/guides/first-project-checklist":"/src/content/docs/es/guides/first-project-checklist.mdx","fr/guides/intro":"/src/content/docs/fr/guides/intro.mdx","es/guides/getting-started":"/src/content/docs/es/guides/getting-started.mdx","fa/guides/first-project-checklist":"/src/content/docs/fa/guides/first-project-checklist.mdx","fa/guides/getting-started":"/src/content/docs/fa/guides/getting-started.mdx","fa/guides/intro":"/src/content/docs/fa/guides/intro.mdx","ja/guides/first-project-checklist":"/src/content/docs/ja/guides/first-project-checklist.mdx","ja/guides/getting-started":"/src/content/docs/ja/guides/getting-started.mdx","zh-cn/guides/first-project-checklist":"/src/content/docs/zh-cn/guides/first-project-checklist.mdx","ja/guides/intro":"/src/content/docs/ja/guides/intro.mdx","zh-cn/guides/getting-started":"/src/content/docs/zh-cn/guides/getting-started.mdx","zh-cn/guides/intro":"/src/content/docs/zh-cn/guides/intro.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/docs/advanced/technical-specifications.mdx": () => import('./technical-specifications_CqACFCrL.mjs'),"/src/content/docs/construction/custom-solutions.mdx": () => import('./custom-solutions_zy0tF2on.mjs'),"/src/content/docs/construction/project-planning.mdx": () => import('./project-planning_B4x8LeYz.mjs'),"/src/content/docs/construction/safety.mdx": () => import('./safety_C4QBiIQN.mjs'),"/src/content/docs/construction/service-overview.mdx": () => import('./service-overview_Trku6aue.mjs'),"/src/content/docs/de/guides/first-project-checklist.mdx": () => import('./first-project-checklist_MfOLGU-k.mjs'),"/src/content/docs/de/guides/getting-started.mdx": () => import('./getting-started_B0Gity4t.mjs'),"/src/content/docs/de/guides/intro.mdx": () => import('./intro_DJX61p4l.mjs'),"/src/content/docs/de/welcome-to-docs.mdx": () => import('./welcome-to-docs_B4pw_L36.mjs'),"/src/content/docs/es/guides/first-project-checklist.mdx": () => import('./first-project-checklist_D8i5t5_x.mjs'),"/src/content/docs/es/guides/getting-started.mdx": () => import('./getting-started_BVVN38hl.mjs'),"/src/content/docs/es/guides/intro.mdx": () => import('./intro_BqjsYXTi.mjs'),"/src/content/docs/es/welcome-to-docs.mdx": () => import('./welcome-to-docs_VaDnYSYo.mjs'),"/src/content/docs/fa/guides/first-project-checklist.mdx": () => import('./first-project-checklist_D49LXc_t.mjs'),"/src/content/docs/fa/guides/getting-started.mdx": () => import('./getting-started_S08tW4nj.mjs'),"/src/content/docs/fa/guides/intro.mdx": () => import('./intro_CjvJgUT2.mjs'),"/src/content/docs/fa/welcome-to-docs.mdx": () => import('./welcome-to-docs_0JvFWcKm.mjs'),"/src/content/docs/fr/guides/first-project-checklist.mdx": () => import('./first-project-checklist_JT2J1wo4.mjs'),"/src/content/docs/fr/guides/getting-started.mdx": () => import('./getting-started_Csxo9Zlo.mjs'),"/src/content/docs/fr/guides/intro.mdx": () => import('./intro_Lp5SPkeB.mjs'),"/src/content/docs/fr/welcome-to-docs.mdx": () => import('./welcome-to-docs_DBFVPlwc.mjs'),"/src/content/docs/guides/first-project-checklist.mdx": () => import('./first-project-checklist_RovuMiKg.mjs'),"/src/content/docs/guides/getting-started.mdx": () => import('./getting-started_DscHSUO3.mjs'),"/src/content/docs/guides/intro.mdx": () => import('./intro_DzPF5eDR.mjs'),"/src/content/docs/ja/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DyeKZI69.mjs'),"/src/content/docs/ja/guides/getting-started.mdx": () => import('./getting-started_DeAeaTeh.mjs'),"/src/content/docs/ja/guides/intro.mdx": () => import('./intro_mEX6f69z.mjs'),"/src/content/docs/ja/welcome-to-docs.mdx": () => import('./welcome-to-docs_oWPlkreA.mjs'),"/src/content/docs/tools/equipment-care.mdx": () => import('./equipment-care_C_40EcR8.mjs'),"/src/content/docs/tools/tool-guides.mdx": () => import('./tool-guides_BFT0JAyr.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('./welcome-to-docs_19t7nDFl.mjs'),"/src/content/docs/zh-cn/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BD_p-Kx-.mjs'),"/src/content/docs/zh-cn/guides/getting-started.mdx": () => import('./getting-started_CoEdwlpH.mjs'),"/src/content/docs/zh-cn/guides/intro.mdx": () => import('./intro_D8gR4v2p.mjs'),"/src/content/docs/zh-cn/welcome-to-docs.mdx": () => import('./welcome-to-docs_DosqhFVm.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { getCollection as g };
