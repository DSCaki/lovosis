/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderScript } from './astro/server_C2zacUNG.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$MainLayout, S as SITE } from './MainLayout_Ct9xfh3x.mjs';

const $$Astro = createAstro("https://lovosis.com/");
const $$Btn404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Btn404;
  const { title, id, noArrow } = Astro2.props;
  const baseClasses = "group inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-50 ring-zinc-500 transition duration-300 focus-visible:ring outline-none";
  const borderClasses = "border border-transparent";
  const bgColorClasses = "bg-orange-400 hover:bg-orange-500 active:bg-orange-500 dark:focus:outline-none";
  const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "dark:ring-zinc-200";
  return renderTemplate`<!-- Button with dynamic title, id, and optional arrow -->${maybeRenderHead()}<button${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${disableClasses} ${fontSizeClasses} ${ringClasses}`, "class")}${addAttribute(id, "id")}> ${title} <!-- Display the arrow based on the 'noArrow' property --> ${noArrow ? null : renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "arrowRight" })}`} </button>`;
}, "D:/gafoor work files/lovosis/src/components/ui/buttons/Btn404.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = `Page Not Found | ${SITE.title}`;
  const img = "/pictures/logo.png";
  const subTitle = "Coming Soon";
  const content = "Don't let this hiccup slow you down. Let's get you back to building your masterpiece.";
  const btnTitle = "Go Back";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="grid h-svh place-content-center"> <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16"> <div class="mx-auto max-w-screen-sm text-center"> <div class=" flex justify-center items-center"> <img class="rounded-lg p-2 w-86"${addAttribute(img, "src")} alt="icon1"> </div> <p class="mb-4 text-balance text-3xl font-bold tracking-tight text-neutral-700 dark:text-neutral-300 md:text-4xl"> ${subTitle} </p> <p class="mb-4 text-pretty text-lg text-neutral-600 dark:text-neutral-400"> ${content} </p> <!--Display a button that navigates user back to the previous page--> ${renderComponent($$result2, "Btn404", $$Btn404, { "title": btnTitle, "id": "go-back" })} </div> </div> </section> ` })} <!--JavaScript code that adds click event to the Button, resulting in going back to the previous page in history--> ${renderScript($$result, "D:/gafoor work files/lovosis/src/pages/404.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/gafoor work files/lovosis/src/pages/404.astro", void 0);

const $$file = "D:/gafoor work files/lovosis/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
