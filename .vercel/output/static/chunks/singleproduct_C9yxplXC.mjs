/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from './astro/server_C2zacUNG.mjs';
import 'kleur/colors';
import { a as $$MainLayout } from './MainLayout_hddzYu9E.mjs';
import { p as productsData } from './new_Cm-IjHfR.mjs';

const $$Astro = createAstro("https://lovosis.com/");
async function getStaticPaths() {
  return {
    paths: products.map((product) => ({
      params: { id: product.id.toString() }
    })),
    fallback: false
  };
}
const $$Singleproduct = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Singleproduct;
  const products2 = productsData.products;
  const { id } = Astro2.params;
  if (!id || typeof id !== "string") {
    throw new Error("Product ID is not valid");
  }
  const product = products2.find((product2) => product2.id === parseInt(id));
  if (!product) {
    throw new Error(`Product with ID ${id} not found`);
  }
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`${product ? renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="flex flex-col md:flex-row gap-8"> <img${addAttribute(product.img, "src")}${addAttribute(product.title, "alt")} class="w-full h-96 object-contain rounded-xl bg-white"> <div> <h1 class="text-3xl font-bold dark:text-teal-600">${product.title}</h1> <p class="mt-2 text-gray-500 dark:text-neutral-300">${product.shortdes}</p> <div class="mt-4">${product.desc}</div> <p class="mt-4 text-gray-700 dark:text-neutral-300">Category: ${product.category}</p> </div> </div> </section>` : renderTemplate`<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <p class="text-center text-gray-500 dark:text-neutral-300">Product not found.</p> </section>`}` })}`;
}, "C:/Users/Rizan/Desktop/lovosis/src/pages/products/singleproduct.astro", void 0);

const $$file = "C:/Users/Rizan/Desktop/lovosis/src/pages/products/singleproduct.astro";
const $$url = "/products/singleproduct";

export { $$Singleproduct as default, $$file as file, getStaticPaths, $$url as url };
