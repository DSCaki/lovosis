import { a as createAstro, b as createComponent, d as renderTemplate, m as maybeRenderHead, h as renderSlot, e as addAttribute, f as renderComponent, u as unescapeHTML, F as Fragment } from './astro/server_C2zacUNG.mjs';
import 'kleur/colors';
/* empty css                         */

const $$Astro = createAstro("https://lovosis.com/");
const $$ContactIconBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactIconBlock;
  const {
    heading,
    content,
    isAddressVisible,
    addressContent,
    addressContent1,
    addressContent2,
    isLinkVisible,
    linkTitle,
    linkURL,
    isArrowVisible
  } = Astro2.props;
  const arrowSVG = `<svg
class="h-4 w-4 flex-shrink-0 transition ease-in-out group-hover:translate-x-1"
fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /> </svg>`;
  return renderTemplate`<!-- Root container, which arranges the heading and content -->${maybeRenderHead()}<div class="flex gap-x-7 py-6 fadeInUp astro-3lgywzbc"> <!-- Slot to allow for extensibility of the component --> ${renderSlot($$result, $$slots["default"])} <div class="grow astro-3lgywzbc"> <!-- Heading of the section --> <h3 class="font-bold text-neutral-700 dark:text-neutral-300 astro-3lgywzbc"> ${heading} </h3> <!-- Content of the section --> <p class="mt-1 text-sm text-neutral-600 dark:text-neutral-400 astro-3lgywzbc">${content}</p> <!-- Conditional rendering of address content if isAddressVisible is true --> ${isAddressVisible ? renderTemplate`<p class="mt-1 text-sm italic text-neutral-500 astro-3lgywzbc">${addressContent}</p>
        <p class="mt-1 text-sm italic text-neutral-500 astro-3lgywzbc">${addressContent1}</p>
        <p class="mt-1 text-sm italic text-neutral-500 astro-3lgywzbc">${addressContent2}</p>` : null} <!-- Conditional rendering of a link if isLinkVisible is true.
         The link also conditionally includes an arrow SVG if isArrowVisible is true --> ${isLinkVisible ? renderTemplate`<a class="group mt-2 inline-flex items-center gap-x-2 rounded-lg text-sm font-medium text-zinc-600 outline-none ring-zinc-500 transition duration-300 hover:text-zinc-800 focus-visible:ring dark:text-zinc-400 dark:ring-zinc-200 dark:hover:text-zinc-200 dark:focus:outline-none dark:focus:ring-1  astro-3lgywzbc"${addAttribute(linkURL, "href")}> ${linkTitle} ${isArrowVisible ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(arrowSVG)}` })}` : null} </a>` : null} </div> </div> `;
}, "D:/gafoor work files/lovosis/src/components/ui/blocks/ContactIconBlock.astro", void 0);

export { $$ContactIconBlock as $ };
