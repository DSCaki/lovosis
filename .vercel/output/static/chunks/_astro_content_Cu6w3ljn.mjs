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

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/docs/advanced/technical-specifications.mdx": () => import('./technical-specifications_CT4h3myy.mjs'),"/src/content/docs/construction/custom-solutions.mdx": () => import('./custom-solutions_DUx58M9c.mjs'),"/src/content/docs/construction/project-planning.mdx": () => import('./project-planning_CAVwfGZ9.mjs'),"/src/content/docs/construction/safety.mdx": () => import('./safety_cAfpZcPl.mjs'),"/src/content/docs/construction/service-overview.mdx": () => import('./service-overview_o4TtGNK_.mjs'),"/src/content/docs/de/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BId6qfjN.mjs'),"/src/content/docs/de/guides/getting-started.mdx": () => import('./getting-started_DSi8vcIy.mjs'),"/src/content/docs/de/guides/intro.mdx": () => import('./intro_BFiM15tg.mjs'),"/src/content/docs/de/welcome-to-docs.mdx": () => import('./welcome-to-docs_D0E8Wiw5.mjs'),"/src/content/docs/es/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BXrA_5am.mjs'),"/src/content/docs/es/guides/getting-started.mdx": () => import('./getting-started_CYK-fzqF.mjs'),"/src/content/docs/es/guides/intro.mdx": () => import('./intro_B9OLZE5x.mjs'),"/src/content/docs/es/welcome-to-docs.mdx": () => import('./welcome-to-docs_j_LzbcOj.mjs'),"/src/content/docs/fa/guides/first-project-checklist.mdx": () => import('./first-project-checklist_D_X-rOd6.mjs'),"/src/content/docs/fa/guides/getting-started.mdx": () => import('./getting-started_DbGsq1nO.mjs'),"/src/content/docs/fa/guides/intro.mdx": () => import('./intro_BHnYrYnb.mjs'),"/src/content/docs/fa/welcome-to-docs.mdx": () => import('./welcome-to-docs_BVGOk5mX.mjs'),"/src/content/docs/fr/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DyZmFc3i.mjs'),"/src/content/docs/fr/guides/getting-started.mdx": () => import('./getting-started_CSr4lF5K.mjs'),"/src/content/docs/fr/guides/intro.mdx": () => import('./intro_CeMdt2aW.mjs'),"/src/content/docs/fr/welcome-to-docs.mdx": () => import('./welcome-to-docs_DhzCj1nE.mjs'),"/src/content/docs/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CtpsK1bN.mjs'),"/src/content/docs/guides/getting-started.mdx": () => import('./getting-started_Cisuz4h6.mjs'),"/src/content/docs/guides/intro.mdx": () => import('./intro_C75IguTW.mjs'),"/src/content/docs/ja/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BFpI3jfe.mjs'),"/src/content/docs/ja/guides/getting-started.mdx": () => import('./getting-started_e2dU5hlR.mjs'),"/src/content/docs/ja/guides/intro.mdx": () => import('./intro_DKQctiEr.mjs'),"/src/content/docs/ja/welcome-to-docs.mdx": () => import('./welcome-to-docs_CRYJjWQV.mjs'),"/src/content/docs/tools/equipment-care.mdx": () => import('./equipment-care_CD0CRyyp.mjs'),"/src/content/docs/tools/tool-guides.mdx": () => import('./tool-guides_BQbPycTk.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('./welcome-to-docs_BFciOzXg.mjs'),"/src/content/docs/zh-cn/guides/first-project-checklist.mdx": () => import('./first-project-checklist_D6lJDtCo.mjs'),"/src/content/docs/zh-cn/guides/getting-started.mdx": () => import('./getting-started_DVfYbqfa.mjs'),"/src/content/docs/zh-cn/guides/intro.mdx": () => import('./intro_Bs25ZvKG.mjs'),"/src/content/docs/zh-cn/welcome-to-docs.mdx": () => import('./welcome-to-docs_CzBEWV4H.mjs')});
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
lookupMap = {"docs":{"type":"content","entries":{"welcome-to-docs":"/src/content/docs/welcome-to-docs.mdx","construction/custom-solutions":"/src/content/docs/construction/custom-solutions.mdx","construction/safety":"/src/content/docs/construction/safety.mdx","construction/project-planning":"/src/content/docs/construction/project-planning.mdx","construction/service-overview":"/src/content/docs/construction/service-overview.mdx","de/welcome-to-docs":"/src/content/docs/de/welcome-to-docs.mdx","advanced/technical-specifications":"/src/content/docs/advanced/technical-specifications.mdx","es/welcome-to-docs":"/src/content/docs/es/welcome-to-docs.mdx","guides/first-project-checklist":"/src/content/docs/guides/first-project-checklist.mdx","fr/welcome-to-docs":"/src/content/docs/fr/welcome-to-docs.mdx","guides/getting-started":"/src/content/docs/guides/getting-started.mdx","fa/welcome-to-docs":"/src/content/docs/fa/welcome-to-docs.mdx","ja/welcome-to-docs":"/src/content/docs/ja/welcome-to-docs.mdx","tools/equipment-care":"/src/content/docs/tools/equipment-care.mdx","guides/intro":"/src/content/docs/guides/intro.mdx","tools/tool-guides":"/src/content/docs/tools/tool-guides.mdx","de/guides/getting-started":"/src/content/docs/de/guides/getting-started.mdx","de/guides/first-project-checklist":"/src/content/docs/de/guides/first-project-checklist.mdx","de/guides/intro":"/src/content/docs/de/guides/intro.mdx","zh-cn/welcome-to-docs":"/src/content/docs/zh-cn/welcome-to-docs.mdx","es/guides/first-project-checklist":"/src/content/docs/es/guides/first-project-checklist.mdx","fa/guides/first-project-checklist":"/src/content/docs/fa/guides/first-project-checklist.mdx","es/guides/intro":"/src/content/docs/es/guides/intro.mdx","fa/guides/getting-started":"/src/content/docs/fa/guides/getting-started.mdx","es/guides/getting-started":"/src/content/docs/es/guides/getting-started.mdx","fa/guides/intro":"/src/content/docs/fa/guides/intro.mdx","ja/guides/getting-started":"/src/content/docs/ja/guides/getting-started.mdx","ja/guides/first-project-checklist":"/src/content/docs/ja/guides/first-project-checklist.mdx","ja/guides/intro":"/src/content/docs/ja/guides/intro.mdx","fr/guides/first-project-checklist":"/src/content/docs/fr/guides/first-project-checklist.mdx","fr/guides/getting-started":"/src/content/docs/fr/guides/getting-started.mdx","zh-cn/guides/first-project-checklist":"/src/content/docs/zh-cn/guides/first-project-checklist.mdx","fr/guides/intro":"/src/content/docs/fr/guides/intro.mdx","zh-cn/guides/getting-started":"/src/content/docs/zh-cn/guides/getting-started.mdx","zh-cn/guides/intro":"/src/content/docs/zh-cn/guides/intro.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/docs/advanced/technical-specifications.mdx": () => import('./technical-specifications_CRI6Hig_.mjs'),"/src/content/docs/construction/custom-solutions.mdx": () => import('./custom-solutions_FH58T4o1.mjs'),"/src/content/docs/construction/project-planning.mdx": () => import('./project-planning_Ce8iLB-o.mjs'),"/src/content/docs/construction/safety.mdx": () => import('./safety_BJvDSkOK.mjs'),"/src/content/docs/construction/service-overview.mdx": () => import('./service-overview_DrlH-jdD.mjs'),"/src/content/docs/de/guides/first-project-checklist.mdx": () => import('./first-project-checklist_uhk7wcZJ.mjs'),"/src/content/docs/de/guides/getting-started.mdx": () => import('./getting-started_gxhu02IK.mjs'),"/src/content/docs/de/guides/intro.mdx": () => import('./intro_C5tbp9p2.mjs'),"/src/content/docs/de/welcome-to-docs.mdx": () => import('./welcome-to-docs_C7tI8Z51.mjs'),"/src/content/docs/es/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CKZeuBMT.mjs'),"/src/content/docs/es/guides/getting-started.mdx": () => import('./getting-started_y3vpORcV.mjs'),"/src/content/docs/es/guides/intro.mdx": () => import('./intro_OnXuzbFA.mjs'),"/src/content/docs/es/welcome-to-docs.mdx": () => import('./welcome-to-docs_lPqsKcGD.mjs'),"/src/content/docs/fa/guides/first-project-checklist.mdx": () => import('./first-project-checklist_Bko0ir74.mjs'),"/src/content/docs/fa/guides/getting-started.mdx": () => import('./getting-started_eKNZGISb.mjs'),"/src/content/docs/fa/guides/intro.mdx": () => import('./intro_CFMIjJjk.mjs'),"/src/content/docs/fa/welcome-to-docs.mdx": () => import('./welcome-to-docs_eyg1ZRgc.mjs'),"/src/content/docs/fr/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CFtJLpFR.mjs'),"/src/content/docs/fr/guides/getting-started.mdx": () => import('./getting-started_DyQcDefS.mjs'),"/src/content/docs/fr/guides/intro.mdx": () => import('./intro_DkXPguX1.mjs'),"/src/content/docs/fr/welcome-to-docs.mdx": () => import('./welcome-to-docs_1XlGDIBD.mjs'),"/src/content/docs/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DqCDlY0T.mjs'),"/src/content/docs/guides/getting-started.mdx": () => import('./getting-started_r30n68-R.mjs'),"/src/content/docs/guides/intro.mdx": () => import('./intro_Bp6YQvo0.mjs'),"/src/content/docs/ja/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BPGne0AJ.mjs'),"/src/content/docs/ja/guides/getting-started.mdx": () => import('./getting-started_Cacyyj1-.mjs'),"/src/content/docs/ja/guides/intro.mdx": () => import('./intro_Bb2WN9ZL.mjs'),"/src/content/docs/ja/welcome-to-docs.mdx": () => import('./welcome-to-docs_DP_reP5B.mjs'),"/src/content/docs/tools/equipment-care.mdx": () => import('./equipment-care_CB3aDecm.mjs'),"/src/content/docs/tools/tool-guides.mdx": () => import('./tool-guides_B32cUigW.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('./welcome-to-docs_DJvTdSH1.mjs'),"/src/content/docs/zh-cn/guides/first-project-checklist.mdx": () => import('./first-project-checklist_B_ZyncRO.mjs'),"/src/content/docs/zh-cn/guides/getting-started.mdx": () => import('./getting-started_D2I33-wM.mjs'),"/src/content/docs/zh-cn/guides/intro.mdx": () => import('./intro_Bg-0MTse.mjs'),"/src/content/docs/zh-cn/welcome-to-docs.mdx": () => import('./welcome-to-docs_hwiO2J8z.mjs')});
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
