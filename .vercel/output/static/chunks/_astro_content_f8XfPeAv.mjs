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

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/docs/advanced/technical-specifications.mdx": () => import('./technical-specifications_DcILBulW.mjs'),"/src/content/docs/construction/custom-solutions.mdx": () => import('./custom-solutions_CXsNUgha.mjs'),"/src/content/docs/construction/project-planning.mdx": () => import('./project-planning_B5mTjVl1.mjs'),"/src/content/docs/construction/safety.mdx": () => import('./safety_0SXNlI0R.mjs'),"/src/content/docs/construction/service-overview.mdx": () => import('./service-overview_wcsCOcJr.mjs'),"/src/content/docs/de/guides/first-project-checklist.mdx": () => import('./first-project-checklist_iZHEjFvl.mjs'),"/src/content/docs/de/guides/getting-started.mdx": () => import('./getting-started_DGA0jxGu.mjs'),"/src/content/docs/de/guides/intro.mdx": () => import('./intro_DjSioL8Z.mjs'),"/src/content/docs/de/welcome-to-docs.mdx": () => import('./welcome-to-docs_DLzKyOIG.mjs'),"/src/content/docs/es/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CjLXL-do.mjs'),"/src/content/docs/es/guides/getting-started.mdx": () => import('./getting-started_CYWhLf9c.mjs'),"/src/content/docs/es/guides/intro.mdx": () => import('./intro_DxuD_8gm.mjs'),"/src/content/docs/es/welcome-to-docs.mdx": () => import('./welcome-to-docs_CKAP3Wv4.mjs'),"/src/content/docs/fa/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DP37UZyF.mjs'),"/src/content/docs/fa/guides/getting-started.mdx": () => import('./getting-started_DS4Qh-DI.mjs'),"/src/content/docs/fa/guides/intro.mdx": () => import('./intro_BHwvTa43.mjs'),"/src/content/docs/fa/welcome-to-docs.mdx": () => import('./welcome-to-docs_ha5lS5j7.mjs'),"/src/content/docs/fr/guides/first-project-checklist.mdx": () => import('./first-project-checklist_Djts5dql.mjs'),"/src/content/docs/fr/guides/getting-started.mdx": () => import('./getting-started_C75gDj79.mjs'),"/src/content/docs/fr/guides/intro.mdx": () => import('./intro_CXAJ3WdL.mjs'),"/src/content/docs/fr/welcome-to-docs.mdx": () => import('./welcome-to-docs_f7JHboBX.mjs'),"/src/content/docs/guides/first-project-checklist.mdx": () => import('./first-project-checklist_VK9u8JaR.mjs'),"/src/content/docs/guides/getting-started.mdx": () => import('./getting-started_DOp7pxV2.mjs'),"/src/content/docs/guides/intro.mdx": () => import('./intro_C9Si7Jao.mjs'),"/src/content/docs/ja/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BGoRLUBJ.mjs'),"/src/content/docs/ja/guides/getting-started.mdx": () => import('./getting-started_BfGV973E.mjs'),"/src/content/docs/ja/guides/intro.mdx": () => import('./intro_dL9s12cx.mjs'),"/src/content/docs/ja/welcome-to-docs.mdx": () => import('./welcome-to-docs_8-PC3auR.mjs'),"/src/content/docs/tools/equipment-care.mdx": () => import('./equipment-care_MwBpZNX5.mjs'),"/src/content/docs/tools/tool-guides.mdx": () => import('./tool-guides_BPpBhuQc.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('./welcome-to-docs_D7IuvewC.mjs'),"/src/content/docs/zh-cn/guides/first-project-checklist.mdx": () => import('./first-project-checklist_D2a6UnU2.mjs'),"/src/content/docs/zh-cn/guides/getting-started.mdx": () => import('./getting-started_Cww1hazY.mjs'),"/src/content/docs/zh-cn/guides/intro.mdx": () => import('./intro_GkP5BKe7.mjs'),"/src/content/docs/zh-cn/welcome-to-docs.mdx": () => import('./welcome-to-docs_em3n2kH0.mjs')});
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
lookupMap = {"docs":{"type":"content","entries":{"advanced/technical-specifications":"/src/content/docs/advanced/technical-specifications.mdx","construction/custom-solutions":"/src/content/docs/construction/custom-solutions.mdx","construction/safety":"/src/content/docs/construction/safety.mdx","welcome-to-docs":"/src/content/docs/welcome-to-docs.mdx","construction/service-overview":"/src/content/docs/construction/service-overview.mdx","fa/welcome-to-docs":"/src/content/docs/fa/welcome-to-docs.mdx","fr/welcome-to-docs":"/src/content/docs/fr/welcome-to-docs.mdx","construction/project-planning":"/src/content/docs/construction/project-planning.mdx","de/welcome-to-docs":"/src/content/docs/de/welcome-to-docs.mdx","es/welcome-to-docs":"/src/content/docs/es/welcome-to-docs.mdx","guides/first-project-checklist":"/src/content/docs/guides/first-project-checklist.mdx","ja/welcome-to-docs":"/src/content/docs/ja/welcome-to-docs.mdx","guides/intro":"/src/content/docs/guides/intro.mdx","guides/getting-started":"/src/content/docs/guides/getting-started.mdx","tools/equipment-care":"/src/content/docs/tools/equipment-care.mdx","tools/tool-guides":"/src/content/docs/tools/tool-guides.mdx","zh-cn/welcome-to-docs":"/src/content/docs/zh-cn/welcome-to-docs.mdx","de/guides/first-project-checklist":"/src/content/docs/de/guides/first-project-checklist.mdx","de/guides/getting-started":"/src/content/docs/de/guides/getting-started.mdx","de/guides/intro":"/src/content/docs/de/guides/intro.mdx","fa/guides/first-project-checklist":"/src/content/docs/fa/guides/first-project-checklist.mdx","fa/guides/getting-started":"/src/content/docs/fa/guides/getting-started.mdx","fa/guides/intro":"/src/content/docs/fa/guides/intro.mdx","es/guides/intro":"/src/content/docs/es/guides/intro.mdx","fr/guides/first-project-checklist":"/src/content/docs/fr/guides/first-project-checklist.mdx","es/guides/getting-started":"/src/content/docs/es/guides/getting-started.mdx","fr/guides/getting-started":"/src/content/docs/fr/guides/getting-started.mdx","es/guides/first-project-checklist":"/src/content/docs/es/guides/first-project-checklist.mdx","fr/guides/intro":"/src/content/docs/fr/guides/intro.mdx","ja/guides/first-project-checklist":"/src/content/docs/ja/guides/first-project-checklist.mdx","ja/guides/getting-started":"/src/content/docs/ja/guides/getting-started.mdx","zh-cn/guides/first-project-checklist":"/src/content/docs/zh-cn/guides/first-project-checklist.mdx","zh-cn/guides/getting-started":"/src/content/docs/zh-cn/guides/getting-started.mdx","ja/guides/intro":"/src/content/docs/ja/guides/intro.mdx","zh-cn/guides/intro":"/src/content/docs/zh-cn/guides/intro.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/docs/advanced/technical-specifications.mdx": () => import('./technical-specifications_a3lyFUIe.mjs'),"/src/content/docs/construction/custom-solutions.mdx": () => import('./custom-solutions_DfQWqc1Q.mjs'),"/src/content/docs/construction/project-planning.mdx": () => import('./project-planning_8JgAv5K4.mjs'),"/src/content/docs/construction/safety.mdx": () => import('./safety_B1xb0XBV.mjs'),"/src/content/docs/construction/service-overview.mdx": () => import('./service-overview_Dm7cy2yb.mjs'),"/src/content/docs/de/guides/first-project-checklist.mdx": () => import('./first-project-checklist_Dvj6XjW3.mjs'),"/src/content/docs/de/guides/getting-started.mdx": () => import('./getting-started_2RXgHkJA.mjs'),"/src/content/docs/de/guides/intro.mdx": () => import('./intro_BK980ilV.mjs'),"/src/content/docs/de/welcome-to-docs.mdx": () => import('./welcome-to-docs_CFC-clMP.mjs'),"/src/content/docs/es/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CIBC-DaK.mjs'),"/src/content/docs/es/guides/getting-started.mdx": () => import('./getting-started_BreSMD6f.mjs'),"/src/content/docs/es/guides/intro.mdx": () => import('./intro_Cf7ykYta.mjs'),"/src/content/docs/es/welcome-to-docs.mdx": () => import('./welcome-to-docs_B4UC5ZLM.mjs'),"/src/content/docs/fa/guides/first-project-checklist.mdx": () => import('./first-project-checklist_-oU3XTr6.mjs'),"/src/content/docs/fa/guides/getting-started.mdx": () => import('./getting-started_C968Pv5W.mjs'),"/src/content/docs/fa/guides/intro.mdx": () => import('./intro_DZeHyIHR.mjs'),"/src/content/docs/fa/welcome-to-docs.mdx": () => import('./welcome-to-docs_N5d8Xji9.mjs'),"/src/content/docs/fr/guides/first-project-checklist.mdx": () => import('./first-project-checklist_5EQio0Av.mjs'),"/src/content/docs/fr/guides/getting-started.mdx": () => import('./getting-started_BrcTD2Jy.mjs'),"/src/content/docs/fr/guides/intro.mdx": () => import('./intro_BAYLGsCf.mjs'),"/src/content/docs/fr/welcome-to-docs.mdx": () => import('./welcome-to-docs_Dt4C8ywf.mjs'),"/src/content/docs/guides/first-project-checklist.mdx": () => import('./first-project-checklist_EMjDAhfR.mjs'),"/src/content/docs/guides/getting-started.mdx": () => import('./getting-started_Jg_xv4Hz.mjs'),"/src/content/docs/guides/intro.mdx": () => import('./intro_DObqKAdD.mjs'),"/src/content/docs/ja/guides/first-project-checklist.mdx": () => import('./first-project-checklist_bpHtgIhR.mjs'),"/src/content/docs/ja/guides/getting-started.mdx": () => import('./getting-started_CA5AE7AH.mjs'),"/src/content/docs/ja/guides/intro.mdx": () => import('./intro_Bze8mewV.mjs'),"/src/content/docs/ja/welcome-to-docs.mdx": () => import('./welcome-to-docs_R4EoPdnM.mjs'),"/src/content/docs/tools/equipment-care.mdx": () => import('./equipment-care_AxHLu9pP.mjs'),"/src/content/docs/tools/tool-guides.mdx": () => import('./tool-guides_DjHpaR4-.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('./welcome-to-docs_4h4HWOl1.mjs'),"/src/content/docs/zh-cn/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BSgFGeoo.mjs'),"/src/content/docs/zh-cn/guides/getting-started.mdx": () => import('./getting-started_WJsYSHrS.mjs'),"/src/content/docs/zh-cn/guides/intro.mdx": () => import('./intro_C-Z3JOef.mjs'),"/src/content/docs/zh-cn/welcome-to-docs.mdx": () => import('./welcome-to-docs_C6T38Iuz.mjs')});
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
