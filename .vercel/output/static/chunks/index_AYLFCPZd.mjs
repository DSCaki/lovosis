/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderScript, u as unescapeHTML, F as Fragment, h as renderSlot } from './astro/server_C2zacUNG.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$MainLayout } from './MainLayout_C6WT1fda.mjs';
import { $ as $$PrimaryCTA } from './PrimaryCTA_CIelNSGp.mjs';
import 'clsx';
/* empty css                         */
import { $ as $$ContactIconBlock } from './ContactIconBlock_CU4LWKEQ.mjs';
import { $ as $$Image } from './_astro_assets_B8z84K_z.mjs';

const $$Astro$b = createAstro("https://lovosis.com/");
const $$SecondaryCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$SecondaryCTA;
  const { title, url } = Astro2.props;
  const baseClasses = "inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-center text-sm font-medium text-neutral-600 shadow-sm outline-none ring-zinc-500 focus-visible:ring transition duration-300";
  const borderClasses = "border border-neutral-200";
  const bgColorClasses = "bg-neutral-300";
  const hoverClasses = "hover:bg-teal-600 hover:text-white active:text-neutral-700";
  const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "ring-zinc-500";
  const darkClasses = "dark:border-neutral-700 dark:bg-zinc-700 dark:text-neutral-300 dark:ring-zinc-200 dark:hover:bg-teal-600 dark:focus:outline-none";
  return renderTemplate`<!-- Styled hyperlink -->${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${disableClasses} ${fontSizeClasses} ${ringClasses} ${darkClasses}`, "class")}${addAttribute(url, "href")}> ${title} </a>`;
}, "C:/Users/Rizan/Desktop/lovosis/src/components/ui/buttons/SecondaryCTA.astro", void 0);

const $$Astro$a = createAstro("https://lovosis.com/");
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const {
    title,
    subTitle,
    primaryBtn,
    primaryBtnURL,
    secondaryBtn,
    secondaryBtnURL,
    withReview,
    avatars
  } = Astro2.props;
  return renderTemplate`<!-- Defining a grid container that holds all the content -->${maybeRenderHead()}<section class="mx-auto grid max-w-[85rem] gap-4 px-4 py-14 md:py-20 sm:px-6 md:grid-cols-2 md:items-center md:gap-8 lg:px-8 2xl:max-w-full astro-to5pn6rs"> <!-- Title and description --> <div class="astro-to5pn6rs"> <!-- Each h1 and p tag renders a portion of the title and subTitle defined above --> <h1 class="block text-balance text-3xl font-bold fade-in-up-bounce tracking-tight text-neutral-800 dark:text-neutral-200 sm:text-4xl lg:text-6xl lg:leading-tight astro-to5pn6rs"> <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments --> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h1> ${subTitle && renderTemplate`<p class="mt-5 text-pretty text-lg fade-in-up-bounce-delayed leading-relaxed text-neutral-700 dark:text-neutral-400 lg:w-4/5 astro-to5pn6rs"> ${subTitle} </p>`} <!-- Action Button Section: This section includes two CTAs with their own styles and URL --> <div class="mt-12 grid w-full gap-3 sm:inline-flex astro-to5pn6rs"> ${primaryBtn && renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": primaryBtn, "url": primaryBtnURL, "class": "astro-to5pn6rs" })}`} ${secondaryBtn && renderTemplate`${renderComponent($$result, "SecondaryCTA", $$SecondaryCTA, { "title": secondaryBtn, "url": secondaryBtnURL, "class": "astro-to5pn6rs" })}`} </div> </div> <!-- Hero Image Section --> <div class="flex w-full astro-to5pn6rs"> <div class="top-12 overflow-hidden zoom-in hero-image-container hero-image astro-to5pn6rs"> <img src="/pictures/logo.png" alt="hero-image" class="astro-to5pn6rs"> </div> </div>  </section> ${renderScript($$result, "C:/Users/Rizan/Desktop/lovosis/src/components/sections/landing/HeroSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Rizan/Desktop/lovosis/src/components/sections/landing/HeroSection.astro", void 0);

const $$Astro$9 = createAstro("https://lovosis.com/");
const $$StatsGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$StatsGrid;
  const { count, description, index } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="-m-0.5 flex flex-col p-4 sm:p-8"> <div class="mb-2 flex items-end gap-x-2 text-3xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-5xl"> ${index === 1 || index === 2 ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "arrowUp" })}` : null} ${count} </div> <p class="text-sm text-neutral-600 dark:text-neutral-400 sm:text-base"> ${description} </p> </li>`;
}, "C:/Users/Rizan/Desktop/lovosis/src/components/ui/blocks/StatsGrid.astro", void 0);

const $$Astro$8 = createAstro("https://lovosis.com/");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$About;
  const {
    Abouttitle,
    AboutsubTitle,
    AboutprimaryBtn,
    AboutprimaryBtnURL
  } = Astro2.props;
  const {
    statistics
  } = Astro2.props;
  return renderTemplate`<!-- Defining a grid container that holds all the content -->${maybeRenderHead()}<section class="mx-auto grid max-w-[85rem] gap-4 px-4 py-14 md:py-20 sm:px-6 md:grid-cols-2 md:items-center md:gap-8 lg:px-8 2xl:max-w-full astro-46vfb24g"> <!-- Hero Image Section --> <div class="flex w-full fadeInLeft astro-46vfb24g"> ${statistics && renderTemplate`<div class="mt-10 lg:col-span-6 lg:col-end-13 lg:mt-0 astro-46vfb24g"> <div class="space-y-6 sm:space-y-8 astro-46vfb24g"> <ul class="grid grid-cols-2 divide-x-2 divide-y-2 divide-neutral-300 overflow-hidden dark:divide-white-700 astro-46vfb24g"> <!-- Generate a list item for each stat in the statistics array by mapping over the array. --> ${statistics.map((stat, index) => renderTemplate`${renderComponent($$result, "StatsGrid", $$StatsGrid, { "count": stat.count, "description": stat.description, "index": index, "class": "astro-46vfb24g" })}`)} </ul> </div> </div>`} </div> <!-- Title and description --> <div class="astro-46vfb24g"> <div class="autoShow astro-46vfb24g"> <div class="col-span-full h-5/2 pb-12 md:pt-5 pt-8 w-full rounded-xl bg-neutral-100 dark:bg-white/[.075] sm:h-3/4 lg:col-span-7 lg:col-start-6 lg:h-full astro-46vfb24g"> <!-- Each h1 and p tag renders a portion of the title and subTitle defined above --> <h2 class="block text-balance text-3xl px-5 font-bold tracking-tight text-neutral-800 dark:text-neutral-200 sm:text-4xl lg:text-6xl lg:leading-tight astro-46vfb24g"> <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments --> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(Abouttitle)}` })} </h2> ${AboutsubTitle && renderTemplate`<p class="mt-5 text-pretty text-base px-5 leading-relaxed text-neutral-700 dark:text-neutral-400 w-11/12 astro-46vfb24g"> ${AboutsubTitle} </p>`} <!-- Action Button Section: This section includes two CTAs with their own styles and URL --> <div class="mt-12 grid w-full gap-3 px-5 sm:inline-flex astro-46vfb24g"> ${AboutprimaryBtn && renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": AboutprimaryBtn, "url": AboutprimaryBtnURL, "class": "astro-46vfb24g" })}`} </div> </div> </div>  </div></section>`;
}, "C:/Users/Rizan/Desktop/lovosis/src/components/sections/landing/About.astro", void 0);

const $$ContactSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Contact Us -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 astro-joh4gybl"> <div class="mx-auto max-w-2xl lg:max-w-5xl astro-joh4gybl"> <div class=" grid items-center gap-6 lg:grid-cols-2 lg:gap-16 astro-joh4gybl"> <div class="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8 astro-joh4gybl"> <!-- Form for user input with various input fields.--> <!-- Each field utilizes a different input component for the specific type of input (text, email, phone, and textarea)--> <form id="contact-form" action="send-email.php" method="POST" class="astro-joh4gybl"> <div class="grid gap-4 fadeInUp astro-joh4gybl"> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 astro-joh4gybl"> <div class="relative astro-joh4gybl"> <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none astro-joh4gybl"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500 dark:text-gray-400 astro-joh4gybl" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" class="astro-joh4gybl"><circle cx="24" cy="11" r="7" class="astro-joh4gybl"></circle><path d="M4 41c0-8.837 8.059-16 18-16m9 17l10-10l-4-4l-10 10v4z" class="astro-joh4gybl"></path></g></svg> </div> <input type="text" name="name" id="name" placeholder="First Name " required class="block w-full ps-10 p-2.5 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1 astro-joh4gybl"> </div> <div class="relative astro-joh4gybl"> <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none astro-joh4gybl"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500 dark:text-gray-400 astro-joh4gybl" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" class="astro-joh4gybl"><circle cx="24" cy="11" r="7" class="astro-joh4gybl"></circle><path d="M4 41c0-8.837 8.059-16 18-16m9 17l10-10l-4-4l-10 10v4z" class="astro-joh4gybl"></path></g></svg> </div> <input type="text" name="name" id="name" placeholder="Last Name " required class="block w-full ps-10 p-2.5 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1 astro-joh4gybl"> </div> </div> <div class="relative astro-joh4gybl"> <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none astro-joh4gybl"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500 dark:text-gray-400 astro-joh4gybl" viewBox="0 0 20 20"><path fill="currentColor" d="m15.81 1.548l-4.83 4.83a2.2 2.2 0 0 0-.578 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.078l1.498-.374a2.2 2.2 0 0 0 1.02-.578l4.83-4.83a1.87 1.87 0 0 0-2.645-2.644M12.942 3l.84-.84A2 2 0 0 0 13 2H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9.06l-.668.67a3 3 0 0 1-.332.288V16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM9 14a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" class="astro-joh4gybl"></path></svg> </div> <input type="tel" name="phone" id="phone" placeholder="Phone Number " pattern="[0-9, +]*" oninput="this.value = this.value.replace(/[^0-9, +]/g, '')" required class="block w-full rounded-lg border ps-10 p-2.5 border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1 astro-joh4gybl"> </div> <div class="relative astro-joh4gybl"> <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none astro-joh4gybl"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500 dark:text-gray-400 astro-joh4gybl" viewBox="0 0 24 24"><path fill="currentColor" d="M19.07 13.88L13 19.94V22h2.06l6.06-6.07m1.58-2.35l-1.28-1.28a.52.52 0 0 0-.38-.17c-.15.01-.29.06-.39.17l-1 1l2.05 2l1-1c.19-.2.19-.52 0-.72M11 18H4V8l8 5l8-5v2h2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7zm9-12l-8 5l-8-5z" class="astro-joh4gybl"></path></svg> </div> <input type="email" name="email" id="email" placeholder="Email " required class="block w-full rounded-lg border ps-10 p-2.5 border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1 astro-joh4gybl"> </div> <div class="relative astro-joh4gybl"> <div class="absolute inset-y-0 start-0 flex items-start pt-6 ps-3.5 pointer-events-none astro-joh4gybl"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500 dark:text-gray-400 astro-joh4gybl" viewBox="0 0 24 24"><path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14h-7.277L9 18.233V16H4V4h16z" class="astro-joh4gybl"></path><path fill="currentColor" d="m13.803 9.189l-1.399-1.398l-3.869 3.864v1.399h1.399zm.327-3.123l1.398 1.399l-1.066 1.066l-1.399-1.398z" class="astro-joh4gybl"></path></svg> </div> <textarea name="message" id="message" placeholder="Message " required class="block w-full rounded-lg border ps-10 p-2.5 border-neutral-200 bg-neutral-50 px-4 py-5 items-start text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1 astro-joh4gybl"></textarea> </div> <div class="astro-joh4gybl"> <button type="submit" class="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 astro-joh4gybl">
Send Message
</button> </div> </div> </form> </div> <!--ContactIconBlocks are used to display different methods of contacting, including visiting office, email, browsing knowledgebase, and FAQ.--> <div class="divide-y divide-neutral-300 dark:divide-neutral-700 astro-joh4gybl"> ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "Chat with us by whatsapp", "content": "Browse through all of us.", "isLinkVisible": true, "linkTitle": "Visit guides & tutorials", "linkURL": "https://wa.me/+971561184993", "isArrowVisible": true, "class": "astro-joh4gybl" }, { "default": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="text-neutral-600 dark:text-neutral-200 astro-joh4gybl" width="22" height="22" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222c0-59.3-25.2-115-67.1-157m-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4l-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2c0-101.7 82.8-184.5 184.6-184.5c49.3 0 95.6 19.2 130.4 54.1c34.8 34.9 56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6m101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18c-5.1-1.9-8.8-2.8-12.5 2.8c-3.7 5.6-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4c-32.6-16.3-54-29.1-75.5-66c-5.7-9.8 5.7-9.1 16.3-30.3c1.8-3.7.9-6.9-.5-9.7c-1.4-2.8-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5c-3.2-.2-6.9-.2-10.6-.2c-3.7 0-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3c0 27.3 19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8c35.2 15.2 49 16.5 66.6 13.9c10.7-1.6 32.8-13.4 37.4-26.4c4.6-13 4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6" class="astro-joh4gybl"></path></svg> ` })} ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "Visit our office", "content": "Lovosis Technology", "isAddressVisible": true, "addressContent": "Baghlaf Building Showroom No.5 Satellite Market Naif Deira - Dubai United Arab Emirates,", "addressContent1": "25th St\xA0-\xA0Naif\xA0-\xA0Dubai.", "addressContent2": "P.O.Box: 123421.", "class": "astro-joh4gybl" }, { "default": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class=" w-14 h-14 md:w-8 md:h-8 clr-i-outline clr-i-outline-path-1 text-neutral-600 dark:text-neutral-200 astro-joh4gybl" viewBox="0 0 36 36"><path fill="currentColor" d="M18 6.72a5.73 5.73 0 1 0 5.73 5.73A5.73 5.73 0 0 0 18 6.72m0 9.46a3.73 3.73 0 1 1 3.73-3.73A3.73 3.73 0 0 1 18 16.17Z" class="astro-joh4gybl"></path><path fill="currentColor" d="M18 2A11.79 11.79 0 0 0 6.22 13.73c0 4.67 2.62 8.58 4.54 11.43l.35.52a100 100 0 0 0 6.14 8l.76.89l.76-.89a100 100 0 0 0 6.14-8l.35-.53c1.91-2.85 4.53-6.75 4.53-11.42A11.79 11.79 0 0 0 18 2m5.59 22l-.36.53c-1.72 2.58-4 5.47-5.23 6.9c-1.18-1.43-3.51-4.32-5.23-6.9l-.35-.53c-1.77-2.64-4.2-6.25-4.2-10.31a9.78 9.78 0 1 1 19.56 0c0 4.1-2.42 7.71-4.19 10.31" class="clr-i-outline clr-i-outline-path-2 astro-joh4gybl"></path><path fill="none" d="M0 0h36v36H0z" class="astro-joh4gybl"></path></svg> ` })} ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "Contact us by email", "content": "Have any enquiry? Drop us an email at", "isLinkVisible": true, "linkTitle": "sales@lovosis.com", "linkURL": "mailto:sales@lovosis.com ", "class": "astro-joh4gybl" }, { "default": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="text-neutral-600 dark:text-neutral-200 astro-joh4gybl" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.806 5.37a3.136 3.136 0 0 1 1.268 2.08c.045.3.086.602.122.903c.28 2.603.268 5.605-.122 8.198a3.138 3.138 0 0 1-2.831 2.66l-1.51.13c-3.15.274-6.317.274-9.465 0l-1.51-.13a3.138 3.138 0 0 1-2.832-2.66c-.39-2.593-.402-5.595-.122-8.198a31.1 31.1 0 0 1 .122-.904A3.136 3.136 0 0 1 4.19 5.373l-.001-.007l.047-.026c.173-.12.358-.223.553-.307l4.416-2.454a5.75 5.75 0 0 1 5.585 0l4.406 2.448c.204.087.398.195.578.321l.032.018zm-.84 1.244l-4.904-2.723a4.25 4.25 0 0 0-4.128 0L5.043 6.608a1.637 1.637 0 0 0-.634 1.065a29.28 29.28 0 0 0-.034.233l5.561 3.09a4.25 4.25 0 0 0 4.128 0l5.56-3.09a26.386 26.386 0 0 0-.033-.233a1.636 1.636 0 0 0-.626-1.059m.74 8.866c.238-1.979.272-3.976.102-5.96l-5.016 2.787a5.75 5.75 0 0 1-5.585 0L4.191 9.52a29.101 29.101 0 0 0 .218 6.807a1.637 1.637 0 0 0 1.478 1.389l1.51.131c3.063.266 6.143.266 9.206 0l1.51-.131a1.638 1.638 0 0 0 1.478-1.389c.042-.281.08-.564.114-.847" clip-rule="evenodd" class="astro-joh4gybl"></path></svg> ` })} </div> </div> </div> </section> `;
}, "C:/Users/Rizan/Desktop/lovosis/src/components/sections/ContactSection.astro", void 0);

const $$Astro$7 = createAstro("https://lovosis.com/");
const $$HeroSectionAlt = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$HeroSectionAlt;
  const { title, subTitle, url } = Astro2.props;
  Astro2.currentLocale === "fr" ? "Continuer avec Github" : "Continue with Github";
  return renderTemplate`${maybeRenderHead()}<section class="relative mx-auto max-w-[85rem] px-4 pb-24 pt-10 sm:px-6 lg:px-8 astro-qpqfyarz"> <!-- Decorating SVG elements --> <div class="absolute left-0 top-[55%] scale-90 md:top-[20%] xl:left-[10%] xl:top-[25%]  astro-qpqfyarz"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#1E7DB6" viewBox="0 0 24 24" class="astro-qpqfyarz"> <path fill="#1E7DB6" stroke="#1E7DB6" stroke-linecap="round" stroke-linejoin="round" d="M12 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" class="astro-qpqfyarz"></path> <path stroke="#1E7DB6" stroke-linecap="round" stroke-linejoin="round" d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524Z" class="astro-qpqfyarz"></path> <path stroke="#1E7DB6" stroke-linecap="round" stroke-linejoin="round" d="m3.528 7.294 8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21v-9" class="astro-qpqfyarz"></path> </svg> </div> <div class="absolute left-[75%] top-0 scale-75 autoRotate astro-qpqfyarz"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#3D958E" viewBox="0 0 24 24" class="astro-qpqfyarz"> <path stroke="#3D958E" stroke-linecap="round" stroke-linejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" class="astro-qpqfyarz"></path> <path fill="#3D958E" stroke="#3D958E" stroke-linecap="round" stroke-linejoin="round" d="M5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" class="astro-qpqfyarz"></path> <path stroke="#3D958E" stroke-linecap="round" stroke-linejoin="round" d="M5 10.5V9M5 15v-1.5" class="astro-qpqfyarz"></path> <path fill="#3D958E" stroke="#3D958E" stroke-linecap="round" stroke-linejoin="round" d="M5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" class="astro-qpqfyarz"></path> <path stroke="#3D958E" stroke-linecap="round" stroke-linejoin="round" d="M10.5 19H9M15 19h-1.5" class="astro-qpqfyarz"></path> </svg> </div> <div class="absolute bottom-[5%] left-[60%] scale-[.6] xl:bottom-[15%] xl:left-[35%] astro-qpqfyarz"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#1E7DB6" viewBox="0 0 24 24" class="astro-qpqfyarz"> <path stroke="#1E7DB6" stroke-linecap="round" stroke-linejoin="round" d="M5.164 17c.29-1.049.67-2.052 1.132-3M11.5 7.794A16.838 16.838 0 0 1 14 6.296M4.5 22a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" class="astro-qpqfyarz"></path> <path stroke="#1E7DB6" stroke-linecap="round" stroke-linejoin="round" d="M9.5 12a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM19.5 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" class="astro-qpqfyarz"></path> </svg> </div> <!-- Hero Section Heading --> <div class="mx-auto mt-5 max-w-xl text-center fadeInUp astro-qpqfyarz"> <h2 class="block text-balance text-4xl font-bold leading-tight tracking-tight text-neutral-800 dark:text-neutral-200 md:text-5xl lg:text-6xl astro-qpqfyarz"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h2> </div> <!-- Hero Section Sub-heading --> <div class="mx-auto mt-5 max-w-3xl text-center fadeInUp delay-75 astro-qpqfyarz"> ${subTitle && renderTemplate`<p class="text-pretty text-lg text-neutral-600 dark:text-neutral-400 astro-qpqfyarz"> ${subTitle} </p>`} </div> <!-- Form section --> ${renderComponent($$result, "Form", $$ContactSection, { "class": "astro-qpqfyarz" })} </section>`;
}, "C:/Users/Rizan/Desktop/lovosis/src/components/sections/landing/HeroSectionAlt.astro", void 0);

const $$Astro$6 = createAstro("https://lovosis.com/");
const $$ClientsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ClientsSection;
  const { title, subTitle } = Astro2.props;
  return renderTemplate`${renderScript($$result, "C:/Users/Rizan/Desktop/lovosis/src/components/sections/landing/ClientsSection.astro?astro&type=script&index=0&lang.ts")}${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full astro-o4xmnqps"> <!-- Title and description --> <div class="mx-auto mb-12 w-full space-y-1 text-center sm:w-1/2 lg:w-1/3 astro-o4xmnqps"> <h2 class="text-balance text-2xl font-bold leading-tight text-neutral-800 dark:text-neutral-200 sm:text-3xl fade-in-up-bounce astro-o4xmnqps"> ${title} </h2> ${subTitle && renderTemplate`<p class="text-pretty leading-tight text-neutral-600 dark:text-neutral-400 fade-in-up-bounce-delayed astro-o4xmnqps"> ${subTitle} </p>`} </div> <div class="flex flex-col items-center justify-center gap-y-2 sm:flex-row sm:gap-x-12 sm:gap-y-0 lg:gap-x-24 astro-o4xmnqps"> <div class="slider astro-o4xmnqps" style="--width: 100px; --height: 50px; --quantity: 10;"> <div class="list astro-o4xmnqps"> <div class="item astro-o4xmnqps" style="--position: 1"><img src="pictures/logo.png" alt="client1" class="astro-o4xmnqps"></div> <div class="item astro-o4xmnqps" style="--position: 2"><img src="pictures/logo.png" alt="client1" class="astro-o4xmnqps"></div> <div class="item astro-o4xmnqps" style="--position: 3"><img src="pictures/logo.png" alt="client1" class="astro-o4xmnqps"></div> <div class="item astro-o4xmnqps" style="--position: 4"><img src="pictures/logo.png" alt="client1" class="astro-o4xmnqps"></div> <div class="item astro-o4xmnqps" style="--position: 5"><img src="pictures/logo.png" alt="client1" class="astro-o4xmnqps"></div> <div class="item astro-o4xmnqps" style="--position: 6"><img src="pictures/logo.png" alt="client1" class="astro-o4xmnqps"></div> <div class="item astro-o4xmnqps" style="--position: 7"><img src="pictures/logo.png" alt="client1" class="astro-o4xmnqps"></div> <div class="item astro-o4xmnqps" style="--position: 8"><img src="pictures/logo.png" alt="client1" class="astro-o4xmnqps"></div> <div class="item astro-o4xmnqps" style="--position: 9"><img src="pictures/logo.png" alt="client1" class="astro-o4xmnqps"></div> <div class="item astro-o4xmnqps" style="--position: 10"><img src="pictures/logo.png" alt="client1" class="astro-o4xmnqps"></div> </div> </div> </div> </section>`;
}, "C:/Users/Rizan/Desktop/lovosis/src/components/sections/landing/ClientsSection.astro", void 0);

const $$Astro$5 = createAstro("https://lovosis.com/");
const $$FeaturesGeneral = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$FeaturesGeneral;
  const { title, subTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 lg:py-6 2xl:max-w-full astro-7ataft2h"> <!-- Block to display the feature image --> <div class="mx-auto mb-12 w-full space-y-1 text-center sm:w-1/2 lg:w-1/3 astro-7ataft2h"> <h2 class="text-balance md:text-8xl text-5xl autoBLur font-bold leading-tight text-neutral-800 dark:text-neutral-200 sm:text-3xl fade-in-up astro-7ataft2h">
Meet
</h2> <h2 class="text-balance md:text-8xl text-5xl autoBLur font-bold leading-tight text-neutral-800 dark:text-neutral-200 sm:text-3xl fade-in-up astro-7ataft2h">
Our
</h2> <h2 class="text-balance text-4xl font-bold leading-tight text-neutral-800 dark:text-neutral-200 sm:text-3xl fade-in-up astro-7ataft2h">
Brands
</h2> </div> <div class="mt-5 grid gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-6 astro-7ataft2h"> <div class="lg:col-span-1 w-full md:w-3/4 astro-7ataft2h"> <h2 class="text-balance text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-3xl astro-7ataft2h"> ${title} </h2> ${subTitle && renderTemplate`<p class="mt-2 text-pretty text-neutral-600 dark:text-neutral-400 md:mt-4 astro-7ataft2h"> ${subTitle} </p>`} </div> <div class="lg:col-span-1 mt-2 ml-5 md:-ml-28 astro-7ataft2h"> <div class="grid gap-x-2 gap-y-4 grid-cols-1 md:grid-cols-2 astro-7ataft2h"> <div class="relative flex h-[10em] w-[17em] md:w-[17em] items-center justify-center rounded-[1.5em] border-[1px] border-neutral-700 bg-white dark:bg-neutral-600 p-[1.5em] text-lime-300 astro-7ataft2h"> <div class="group absolute left-1/2 bottom-0 md:top-8 flex h-[2em] w-[2em] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-[1.5em] border-[1px] bg-teal-600 dark:bg-blue-600 backdrop-blur-[3px] duration-[500ms] hover:h-[10em] hover:w-[14em] hover:rounded-[1.5em] astro-7ataft2h"> <svg class="h-[1em] w-[1em] duration-300 group-hover:opacity-0 astro-7ataft2h" viewBox="0 0 48 48" fill="none" height="28" width="28" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#a)" class="astro-7ataft2h"> <path clip-rule="evenodd" d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z" fill-rule="evenodd" fill="#fff" class="astro-7ataft2h"></path> </g> <defs class="astro-7ataft2h"> <clipPath id="a" class="astro-7ataft2h"> <path d="M0 0h48v48H0z" fill="#fff" class="astro-7ataft2h"></path> </clipPath> </defs> </svg> <div class="items-left absolute left-0 top-0 flex h-auto w-full translate-y-[20%] flex-col justify-center p-3 font-poppins text-neutral-100 dark:text-neutral-100 group-hover:translate-y-0 astro-7ataft2h"> <div class="items-left flex flex-col justify-center astro-7ataft2h"> <p class="text-[0.9em] font-light astro-7ataft2h">
Dahua delivers advanced surveillance technology, offering high-quality security solutions with innovative features for comprehensive protection and monitoring.
</p> </div> </div> </div> <img src="/pictures/Dahua logo.png" alt="hero-image" class="w-full h-auto bg-cover astro-7ataft2h"> </div> <div class="relative flex h-[10em] w-[17em] md:w-[17em] items-center justify-center rounded-[1.5em] border-[1px] border-neutral-700 bg-white dark:bg-neutral-600 p-[1.5em] text-lime-300 astro-7ataft2h"> <div class="group absolute left-1/2 bottom-0 md:top-8 flex h-[2em] w-[2em] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-[1.5em] border-[1px] bg-teal-600 dark:bg-blue-600 backdrop-blur-[3px] duration-[500ms] hover:h-[10em] hover:w-[14em] hover:rounded-[1.5em] astro-7ataft2h"> <svg class="h-[1em] w-[1em] duration-300 group-hover:opacity-0 astro-7ataft2h" viewBox="0 0 48 48" fill="none" height="28" width="28" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#a)" class="astro-7ataft2h"> <path clip-rule="evenodd" d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z" fill-rule="evenodd" fill="#fff" class="astro-7ataft2h"></path> </g> <defs class="astro-7ataft2h"> <clipPath id="a" class="astro-7ataft2h"> <path d="M0 0h48v48H0z" fill="#fff" class="astro-7ataft2h"></path> </clipPath> </defs> </svg> <div class="items-left absolute left-0 top-0 flex h-auto w-full translate-y-[20%] flex-col justify-center p-3 font-poppins text-neutral-100 dark:text-neutral-100 group-hover:translate-y-0 astro-7ataft2h"> <div class="items-left flex flex-col justify-center astro-7ataft2h"> <p class="text-[0.9em] font-light astro-7ataft2h">
UNV offers advanced surveillance solutions with cutting-edge technology, ensuring top-tier security and reliable monitoring for diverse applications.
</p> </div> </div> </div> <img src="/pictures/UNV  logo.png" alt="hero-image" class="w-full h-auto bg-cover astro-7ataft2h"> </div> <div class="relative flex h-[10em] w-[17em] md:w-[17em] items-center justify-center rounded-[1.5em] border-[1px] border-neutral-700 bg-white dark:bg-neutral-600 p-[1.5em] text-lime-300 astro-7ataft2h"> <div class="group absolute left-1/2 bottom-0 md:top-8 flex h-[2em] w-[2em] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-[1.5em] border-[1px] bg-teal-600 dark:bg-blue-600 backdrop-blur-[3px] duration-[500ms] hover:h-[10em] hover:w-[14em] hover:rounded-[1.5em] astro-7ataft2h"> <svg class="h-[1em] w-[1em] duration-300 group-hover:opacity-0 astro-7ataft2h" viewBox="0 0 48 48" fill="none" height="28" width="28" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#a)" class="astro-7ataft2h"> <path clip-rule="evenodd" d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z" fill-rule="evenodd" fill="#fff" class="astro-7ataft2h"></path> </g> <defs class="astro-7ataft2h"> <clipPath id="a" class="astro-7ataft2h"> <path d="M0 0h48v48H0z" fill="#fff" class="astro-7ataft2h"></path> </clipPath> </defs> </svg> <div class="items-left absolute left-0 top-0 flex h-auto w-full translate-y-[20%] flex-col justify-center p-3 font-poppins text-neutral-100 dark:text-neutral-100 group-hover:translate-y-0 astro-7ataft2h"> <div class="items-left flex flex-col justify-center astro-7ataft2h"> <p class="text-[0.9em] font-light astro-7ataft2h">
Hikvision provides advanced surveillance technology, offering top-tier security solutions with high-definition cameras and smart analytics for ultimate protection.
</p> </div> </div> </div> <img src="/pictures/Hikvision logo.png" alt="hero-image" class="w-full h-auto bg-cover astro-7ataft2h"> </div> </div> </div> </div>  </section>`;
}, "C:/Users/Rizan/Desktop/lovosis/src/components/sections/features/FeaturesGeneral.astro", void 0);

const $$Astro$4 = createAstro("https://lovosis.com/");
const $$TabNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TabNav;
  const { aria, dataTab, id, heading, content, first } = Astro2.props;
  const BUTTON_CLASS = "dark:hover:bg-neutral-700 rounded-xl p-4 text-start outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-200 focus-visible:ring hs-tab-active:bg-neutral-50 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent dark:ring-zinc-200 dark:focus:outline-none  dark:hs-tab-active:bg-neutral-700/60 md:p-5";
  return renderTemplate`<!-- Tab button with dynamic class based on 'first' property, id, tab data, and aria-controls  -->${maybeRenderHead()}<button type="button"${addAttribute(`${first ? "active " : ""}${BUTTON_CLASS}`, "class")}${addAttribute(id, "id")}${addAttribute(dataTab, "data-hs-tab")}${addAttribute(aria, "aria-controls")} role="tab"> <!-- Slot for additional content --> <span class="flex"> ${renderSlot($$result, $$slots["default"])} <!-- Container for the heading and content of the tab --> <span class="ms-6 grow"> <!-- Heading of the tab, changes color when active --> <span class="block text-lg font-bold text-neutral-800 hs-tab-active:text-blue-600 dark:text-neutral-200 dark:hs-tab-active:text-teal-600">${heading}</span> <!-- Content of the tab, changes color when active --> <span class="mt-1 block text-neutral-500 hs-tab-active:text-neutral-600 dark:text-neutral-400 dark:hs-tab-active:text-neutral-200">${content}</span> </span> </span> </button>`;
}, "C:/Users/Rizan/Desktop/lovosis/src/components/ui/blocks/TabNav.astro", void 0);

const $$Astro$3 = createAstro("https://lovosis.com/");
const $$TabContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TabContent;
  const { id, aria, src, alt, first, second } = Astro2.props;
  const firstClass = first ? "" : "hidden";
  return renderTemplate`<!-- Container for tab content that controls visibility and accessibility -->${maybeRenderHead()}<div${addAttribute(id, "id")} role="tabpanel"${addAttribute(firstClass, "class")}${addAttribute(aria, "aria-labelledby")}> <!-- Astro Image component to display the image with dynamic classes based on the 'second' property --> ${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": "bg-neutral-300 dark:bg-neutral-600 object-cover p-3 rounded-xl", "draggable": "false", "loading": "eager" })} </div>`;
}, "C:/Users/Rizan/Desktop/lovosis/src/components/ui/blocks/TabContent.astro", void 0);

const $$Astro$2 = createAstro("https://lovosis.com/");
const $$FeaturesNavs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FeaturesNavs;
  const { title, tabs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full astro-dvg2antp"> <div class="mx-auto mb-12 w-full space-y-1 text-center sm:w-1/2 lg:w-1/3 astro-dvg2antp"> <h2 class="text-balance md:text-8xl text-5xl fadeInLeft font-bold leading-tight text-neutral-800 dark:text-neutral-200 sm:text-3xl fade-in-up astro-dvg2antp">
Our
</h2> <h2 class="text-balance text-4xl font-bold leading-tight fadeInLeft text-neutral-800 dark:text-neutral-200 sm:text-3xl fade-in-up astro-dvg2antp">
Solution
</h2> </div> <div class="relative p-8 md:p-16 astro-dvg2antp"> <div class="relative z-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16 astro-dvg2antp"> <!-- Section's heading and tab navigation --> <div class="mb-10 lg:order-2 lg:col-span-8 lg:col-start-8 lg:mb-0 astro-dvg2antp"> <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-3xl astro-dvg2antp"> <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments --> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h2> <!-- Tab navigation - use the attribute 'first' in the first TabNav for the component to work --> <nav class="mt-5 grid gap-3 md:mt-10 fadeInRight astro-dvg2antp" aria-label="Tabs" role="tablist"> ${tabs.map((tab, index) => renderTemplate`${renderComponent($$result, "TabNav", $$TabNav, { "id": `tabs-with-card-item-${index + 1}`, "dataTab": `#tabs-with-card-${index + 1}`, "aria": `tabs-with-card-${index + 1}`, "heading": tab.heading, "content": tab.content, "first": tab.first, "class": "astro-dvg2antp" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": tab.svg, "class": "astro-dvg2antp" })} ` })}`)} </nav> </div> <!-- Contents for each tab - the 'first' attribute should be used in the first tab for that tab to be initially visible, 'second' changes the styles --> <div class="lg:col-span-6 astro-dvg2antp"> <div class="relative astro-dvg2antp"> <div class="astro-dvg2antp"> ${tabs.map((tab, index) => renderTemplate`${renderComponent($$result, "TabContent", $$TabContent, { "id": `tabs-with-card-${index + 1}`, "aria": `tabs-with-card-item-${index + 1}`, "src": tab.src, "alt": tab.alt, "first": tab.first, "second": tab.second, "class": "astro-dvg2antp" })}`)} </div> </div> </div> </div> <div class="absolute inset-0 grid h-full w-full grid-cols-12 astro-dvg2antp"> <!-- Decorative background and sizing --> <div class="col-span-full h-5/6 w-full rounded-xl bg-neutral-100 dark:bg-white/[.075] sm:h-3/4 lg:col-span-7 lg:col-start-6 lg:h-full astro-dvg2antp"></div> </div> </div> </section> <!--Import the necessary Tabs plugin--> <!--https://preline.co/plugins/html/tabs.html--> ${renderScript($$result, "C:/Users/Rizan/Desktop/lovosis/src/components/sections/features/FeaturesNavs.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Rizan/Desktop/lovosis/src/components/sections/features/FeaturesNavs.astro", void 0);

const $$Astro$1 = createAstro("https://lovosis.com/");
const $$AccordionItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { id, collapseId, question, answer, first } = Astro2.props;
  const ACCORDION_CLASS_DEFAULT = "hs-accordion pb-3 active";
  const ACCORDION_CLASS_COLLAPSED = "hs-accordion pt-6 pb-3";
  const ACCORDION_CONTENT_CLASS = "hs-accordion-content w-full overflow-hidden transition-[height] duration-300";
  function getAccordionClass(first2 = false) {
    return first2 ? ACCORDION_CLASS_DEFAULT : ACCORDION_CLASS_COLLAPSED;
  }
  return renderTemplate`<!-- The main container for the accordion item -->${maybeRenderHead()}<div${addAttribute(getAccordionClass(first), "class")}${addAttribute(id, "id")}> <!-- The accordion button, which toggles the expanded/collapsed state --> <button class="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 text-balance rounded-lg pb-3 text-start font-bold text-neutral-800 outline-none ring-zinc-500 transition hover:text-neutral-500 focus-visible:ring dark:text-neutral-200 dark:ring-zinc-200 dark:hover:text-neutral-400 dark:focus:outline-none md:text-lg"${addAttribute(collapseId, "aria-controls")}> ${question} <!-- SVG Icon that is shown when the accordion is NOT active --> ${renderComponent($$result, "Icon", $$Icon, { "name": "accordionNotActive" })} <!-- SVG Icon that is shown when the accordion is active --> ${renderComponent($$result, "Icon", $$Icon, { "name": "accordionActive" })} </button> <!-- The collapsible content of the accordion --> <div${addAttribute(id, "aria-labelledby")}${addAttribute(`${first ? ACCORDION_CONTENT_CLASS : "hidden " + ACCORDION_CONTENT_CLASS}`, "class")}${addAttribute(collapseId, "id")}> <!-- The content paragraph --> <p class="text-pretty text-neutral-600 dark:text-neutral-400"> ${answer} </p> </div> </div>`;
}, "C:/Users/Rizan/Desktop/lovosis/src/components/ui/blocks/AccordionItem.astro", void 0);

const $$Astro = createAstro("https://lovosis.com/");
const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FAQ;
  const { title, faqs } = Astro2.props;
  const makeId = (base, index) => `${base}${index + 1}`;
  return renderTemplate`<!-- Main container that holds all content. Customized for different viewport sizes. -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-6 2xl:max-w-full"> <div class="grid gap-10 md:grid-cols-5"> <div class="md:col-span-2"> <div class="max-w-xs"> <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h2> <p class="mt-1 hidden text-neutral-600 dark:text-neutral-400 md:block"> ${faqs.subTitle} </p> </div> </div> <!-- FAQ accordion items --> <div class="md:col-span-3"> <div class="hs-accordion-group divide-y divide-neutral-200 dark:divide-neutral-700"> ${faqs.faqs.map((question, i) => {
    let id = makeId(
      "hs-basic-with-title-and-arrow-stretched-heading-",
      i
    );
    let collapseId = makeId(
      "hs-basic-with-title-and-arrow-stretched-collapse",
      i
    );
    return renderTemplate`${renderComponent($$result, "AccordionItem", $$AccordionItem, { ...question, "id": id, "collapseId": collapseId, "first": i === 0 })}`;
  })} </div> </div> </div> </section> <!--Import the necessary Accordion plugin--> <!--https://preline.co/plugins/html/accordion.html--> ${renderScript($$result, "C:/Users/Rizan/Desktop/lovosis/src/components/sections/FAQ.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Rizan/Desktop/lovosis/src/components/sections/FAQ.astro", void 0);

const heroImage = new Proxy({"src":"/_astro/hero-image.DRPoHq2O.avif","width":4067,"height":2576,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Rizan/Desktop/lovosis/src/images/hero-image.avif";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Rizan/Desktop/lovosis/src/images/hero-image.avif");
							return target[name];
						}
					});

const subTitle = "Ask us anything about our brand and products, and get factual responses.";
const faqs = [
	{
		question: "What services does Lovosis provide?",
		answer: "Lovosis specializes in custom fabrication and surveillance solutions. We provide comprehensive IT solutions tailored to your specific needs, including installation, maintenance, and support for surveillance systems. Our offerings include renowned brands such as Hikvision, Dahua, and UNV."
	},
	{
		question: "What types of surveillance systems do you offer?",
		answer: "We offer a variety of surveillance systems including CCTV cameras, IP cameras, video door phones,NVR, DVR and integrated security systems. Our solutions are designed to provide maximum security and monitoring capabilities."
	},
	{
		question: "Do you offer maintenance services for surveillance systems?",
		answer: "Absolutely. We provide ongoing maintenance and support services to ensure your surveillance systems are always operating at their best. This includes regular check-ups, troubleshooting, and upgrades as necessary."
	},
	{
		question: "Do you offer IT support and consulting?",
		answer: "Yes, we provide both IT support and consulting services. Our team of experts is available to assist with any IT-related issues and to offer strategic advice to improve your IT infrastructure."
	},
	{
		question: "What brands of surveillance equipment do you offer?",
		answer: "We offer a range of high-quality surveillance equipment from leading brands such as Hikvision, Dahua, and UNV. These brands are known for their reliability, advanced features, and superior performance."
	},
	{
		question: "Can Lovosis handle large-scale projects?",
		answer: "Yes, we have the expertise and resources to handle projects of any scale. Whether you need a small custom setup or a large-scale surveillance and IT solution, we can deliver high-quality results on time and within budget."
	},
	{
		question: "How can I request a quote for your services?",
		answer: "You can request a quote by contacting us through our website, emailing us at [email address], or calling our office at [phone number]. We'll be happy to discuss your needs and provide a detailed quote."
	}
];
const faqs$1 = {
	subTitle: subTitle,
	faqs: faqs
};

const featureImage = new Proxy({"src":"/_astro/features-image.BEGIe8fA.avif","width":4375,"height":2369,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Rizan/Desktop/lovosis/src/images/features-image.avif";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Rizan/Desktop/lovosis/src/images/features-image.avif");
							return target[name];
						}
					});

const solution1 = new Proxy({"src":"/_astro/surveillance.BiDjsID-.webp","width":2452,"height":1375,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Rizan/Desktop/lovosis/src/images/surveillance.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Rizan/Desktop/lovosis/src/images/surveillance.webp");
							return target[name];
						}
					});

const solution2 = new Proxy({"src":"/_astro/fabrication.BWDM6AVi.webp","width":3000,"height":2000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Rizan/Desktop/lovosis/src/images/fabrication.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Rizan/Desktop/lovosis/src/images/fabrication.webp");
							return target[name];
						}
					});

const solution3 = new Proxy({"src":"/_astro/it.fxK2X-Lu.webp","width":2397,"height":1600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Rizan/Desktop/lovosis/src/images/it.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Rizan/Desktop/lovosis/src/images/it.webp");
							return target[name];
						}
					});

const products = [
	{
		id: 1,
		title: "UAC-B115-AF28(40)",
		shortdes: "TVI/AHD/CVI/CVBS",
		desc: "5MP high quality image",
		img: "https://www.uniview.com/res/202309/25/20230925_1889116_1_977845_140445_0.jpg",
		cat1: "Alarm",
		cat2: "Wired Intrusion Alarm",
		cat3: "AX Hybrid PRO",
		category: "Alarm > Wired Intrusion Alarm > AX Hybrid PRO"
	},
	{
		id: 1,
		title: "UAC-B115-AF28(40)",
		shortdes: "TVI/AHD/CVI/CVBS",
		desc: "5MP high quality image",
		img: "https://www.uniview.com/res/202309/25/20230925_1889116_1_977845_140445_0.jpg",
		cat1: "Alarm",
		cat2: "Wired Intrusion Alarm",
		cat3: "AX Hybrid PRO",
		category: "Alarm > Wired Intrusion Alarm > AX Hybrid PRO"
	},
	{
		id: 1,
		title: "UAC-B115-AF28(40)",
		shortdes: "TVI/AHD/CVI/CVBS",
		desc: "5MP high quality image",
		img: "https://www.uniview.com/res/202309/25/20230925_1889116_1_977845_140445_0.jpg",
		cat1: "Alarm",
		cat2: "Wired Intrusion Alarm",
		cat3: "AX Hybrid PRO",
		category: "Alarm > Wired Intrusion Alarm > AX Hybrid PRO"
	},
	{
		id: 1,
		title: "UAC-B115-AF28(40)",
		shortdes: "TVI/AHD/CVI/CVBS",
		desc: "5MP high quality image",
		img: "https://www.uniview.com/res/202309/25/20230925_1889116_1_977845_140445_0.jpg",
		cat1: "Alarm",
		cat2: "Wired Intrusion Alarm",
		cat3: "AX Hybrid PRO",
		category: "Alarm > Wired Intrusion Alarm > AX Hybrid PRO"
	},
	{
		id: 1,
		title: "UAC-B115-AF28(40)",
		shortdes: "TVI/AHD/CVI/CVBS",
		desc: "5MP high quality image",
		img: "https://www.uniview.com/res/202309/25/20230925_1889116_1_977845_140445_0.jpg",
		cat1: "Alarm",
		cat2: "Wired Intrusion Alarm",
		cat3: "AX Hybrid PRO",
		category: "Alarm > Wired Intrusion Alarm > AX Hybrid PRO"
	},
	{
		id: 1,
		title: "UAC-B115-AF28(40)",
		shortdes: "TVI/AHD/CVI/CVBS",
		desc: "5MP high quality image",
		img: "https://www.uniview.com/res/202309/25/20230925_1889116_1_977845_140445_0.jpg",
		cat1: "Alarm",
		cat2: "Wired Intrusion Alarm",
		cat3: "AX Hybrid PRO",
		category: "Alarm > Wired Intrusion Alarm > AX Hybrid PRO"
	},
	{
		id: 1,
		title: "UAC-B115-AF28(40)",
		shortdes: "TVI/AHD/CVI/CVBS",
		desc: "5MP high quality image",
		img: "https://www.uniview.com/res/202309/25/20230925_1889116_1_977845_140445_0.jpg",
		cat1: "Alarm",
		cat2: "Wired Intrusion Alarm",
		cat3: "AX Hybrid PRO",
		category: "Alarm > Wired Intrusion Alarm > AX Hybrid PRO"
	},
	{
		id: 1,
		title: "UAC-B115-AF28(40)",
		shortdes: "TVI/AHD/CVI/CVBS",
		desc: "5MP high quality image",
		img: "https://www.uniview.com/res/202309/25/20230925_1889116_1_977845_140445_0.jpg",
		cat1: "Alarm",
		cat2: "Wired Intrusion Alarm",
		cat3: "AX Hybrid PRO",
		category: "Alarm > Wired Intrusion Alarm > AX Hybrid PRO"
	}
];
const productsData = {
	products: products
};

const $$Product = createComponent(($$result, $$props, $$slots) => {
  const products = productsData.products;
  return renderTemplate`${maybeRenderHead()}<section class="astro-xhhqlxyl"> <div class="relative mx-auto mb-12 w-full space-y-4 mt-24 md:mt-32 text-center sm:w-1/2 lg:w-1/3 astro-xhhqlxyl"> <img src="pictures/favicon.png" alt="product-img" class="absolute inset-20 mx-auto autoRotate opacity-100 astro-xhhqlxyl" style="z-index: -1;"> <h2 class="text-balance md:text-8xl text-5xl autoBLur font-bold leading-tight text-neutral-800 dark:text-neutral-200 sm:text-3xl fade-in-up astro-xhhqlxyl">
Our
</h2> <h2 class="text-balance md:text-8xl text-5xl autoBLur font-bold leading-tight text-neutral-800 dark:text-neutral-200 sm:text-3xl fade-in-up astro-xhhqlxyl">
2024
</h2> <h2 class="text-balance text-4xl font-bold leading-tight text-neutral-800 dark:text-neutral-200 sm:text-3xl fade-in-up astro-xhhqlxyl">
Products
</h2> </div> <div class="scroll-container mx-auto max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 lg:py-6 2xl:max-w-full astro-xhhqlxyl"> <div class="flex flex-col-2 md:flex-col-2 items-center justify-center gap-y-2 gap-x-3 sm:flex-row sm:gap-x-12 sm:gap-y-0 lg:gap-x-5 astro-xhhqlxyl"> ${products.map((product) => renderTemplate`<a${addAttribute(`${product.id}`, "href")} class="astro-xhhqlxyl"> <div class="product-card w-[250px] rounded-md shadow-xl overflow-hidden relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-white dark:bg-white/[.075] flex flex-col items-center justify-center gap-3 transition-all duration-300 group astro-xhhqlxyl"> <div class="para uppercase text-center leading-none z-40 astro-xhhqlxyl"> <p style="-webkit-text-stroke: 1px rgb(207, 205, 205);
                            -webkit-text-fill-color: transparent;" class="z-10 font-bold text-lg -mb-5 tracking-wider text-gray-600 astro-xhhqlxyl">
New Product
</p> <p class="font-bold text-xl tracking-wider text-[#1E7DB6] dark:text-white/[.075] z-30 astro-xhhqlxyl">
New Product
</p> </div> <div class="w-[180px] aspect-square relative z-20 after:absolute after:h-1 after:w-full after:opacity-0 after:bg-[#3D958E] after:top-8 after:left-0 after:group-hover:opacity-100 after:translate-x-1/2 after:translate-y-1/2 after:-z-20 after:group-hover:w-full after:transition-all after:duration-300 after:group-hover:origin-right after:group-hover:-translate-x-1/2 group-hover:translate-x-1/2 transition-all duration-300 astro-xhhqlxyl"> <img${addAttribute(product.img, "src")}${addAttribute(product.title, "alt")} class=" justify-center mt-5 items-center astro-xhhqlxyl"> <div class="tooltips absolute top-0 left-10 -translate-x-[150%] p-0 flex flex-col items-start gap-10 transition-all duration-300 group-hover:-translate-x-full astro-xhhqlxyl"> <p class="text-[#3D958E] font-semibold text-sm uppercase group-hover:delay-1000 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500 astro-xhhqlxyl"> ${product.title} </p> <ul class="flex flex-col items-start gap-2 astro-xhhqlxyl"> <li class="inline-flex mt-20 gap-2 items-center justify-center group-hover:delay-200 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500 astro-xhhqlxyl"> <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="3" class="stroke-[#1E7DB6] astro-xhhqlxyl" stroke="#000000" fill="none" viewBox="0 0 24 24" height="10" width="10" xmlns="http://www.w3.org/2000/svg"> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" class="astro-xhhqlxyl"></path> <polyline points="22 4 12 14.01 9 11.01" class="astro-xhhqlxyl"></polyline> </svg> <p class="text-xs font-semibold text-[#3D958E] astro-xhhqlxyl">${product.title}</p> </li> </ul> </div> </div> <div class="p-0 group-hover:-translate-y-5 transition-all duration-300 astro-xhhqlxyl"> <button class="relative group cursor-pointer text-sky-50  overflow-hidden h-10 w-28 rounded-md bg-white dark:bg-white/[.075] p-2 flex justify-center items-center text-xs font-semibold border border-teal-600 dark:text-white astro-xhhqlxyl"> <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-blue-600 astro-xhhqlxyl"></div> <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#3D958E] astro-xhhqlxyl"></div> <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-white/[.075] astro-xhhqlxyl"></div> <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600 astro-xhhqlxyl"></div> <p class="z-10 astro-xhhqlxyl">Shop Now</p> </button> </div> </div> </a>`)} </div> </div> </section> ${renderScript($$result, "C:/Users/Rizan/Desktop/lovosis/src/components/sections/products/Product.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Rizan/Desktop/lovosis/src/components/sections/products/Product.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const avatarSrcs = [
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": `Total Surveillance & IT Solution Provider <span
        class="text-blue-600 dark:text-blue-600">In Dubai</span>`, "subTitle": "Your trusted partner for comprehensive IT and surveillance solutions. Enhancing security and efficiency across Dubai.", "primaryBtn": "Start Exploring", "primaryBtnURL": "/about", "secondaryBtn": "Contact Sales Team", "secondaryBtnURL": "/contact", "withReview": true, "avatars": avatarSrcs, "rating": `<span class="font-bold">4.8</span> / 5`, "starCount": 4, "reviews": `From Over <span class="font-bold">12.8k</span> Reviews`, "src": heroImage, "alt": "Stack of ScrewFast product boxes containing assorted hardware tools" })} ${renderComponent($$result2, "ClientsSection", $$ClientsSection, { "title": "Trusted by Leading Brands", "subTitle": "Partners with industry leaders, delivering excellence and innovation in our services." })} ${renderComponent($$result2, "AboutSection", $$About, { "Abouttitle": `Know About <span
    class="text-blue-600 dark:text-teal-600">lovosis</span>`, "AboutsubTitle": "At Lovosis, we specialize in cutting-edge surveillance and IT solutions, positioned as a leading provider in Dubai. Our expertise focuses on delivering robust security and technological efficiency to our clients. While we offer custom fabrication, our core strength lies in comprehensive surveillance systems designed to meet diverse and dynamic needs. Trust Lovosis to enhance and secure your digital landscape with precision and innovation.", "AboutprimaryBtn": "Learn More", "AboutprimaryBtnURL": "/about", "statistics": [
    {
      count: "7k+",
      description: "As Dubai's leading provider of advanced surveillance and IT solutions, we serve over 7k+ customers."
    },
    {
      count: "35%",
      description: "Lovosis solutions have significantly boosted project efficiency, revolutionizing industry standards."
    },
    {
      count: "15.3%",
      description: "Our advanced technology and efficient strategies have reduced maintenance costs for long-term clients"
    },
    {
      count: "2x",
      description: "Experience assembly at twice Speed up assembly with our advanced fastening solutions."
    }
  ] })} ${renderComponent($$result2, "FeaturesGeneral", $$FeaturesGeneral, { "title": "Meeting Industry Demands", "subTitle": "Lovosis, a leading custom fabrication and surveillance solution provider in Dubai, partners with top brands like Hikvision, UNV, and Dahua. We offer cutting-edge security systems featuring advanced technology for optimal protection and monitoring. Trust Lovosis for innovative and reliable surveillance solutions tailored to your needs.", "src": featureImage, "alt": "Lovosis Brands" })} ${renderComponent($$result2, "Product", $$Product, {})} ${renderComponent($$result2, "FeaturesNavs", $$FeaturesNavs, { "title": `<span class="text-blue-600 dark:text-teal-600">Lovosis</span>'s offerings solution to perfectly suit your Needs.`, "tabs": [
    {
      heading: "Surveillance Solution",
      content: "Our surveillance solutions at Lovosis with Wise-ISP 5th Gen Night Vision technology, ensuring real-time security monitoring and data protection tailored to meet the specific needs of your business",
      svg: "cctv",
      src: solution1,
      alt: "solution-1",
      first: true
    },
    {
      heading: "Custom Fabrication",
      content: "At Lovosis, our custom fabrication solutions are utilize advanced technology to meet your unique requirements, ensuring optimal performance and security for your specific needs.",
      svg: "tools",
      src: solution2,
      alt: "solution-2",
      second: true
    },
    {
      heading: "IT Solution",
      content: "At Lovosis, we provide innovative IT solutions that optimize performance and security, tailored to meet the unique needs of your business stays ahead in a fast-paced digital world.",
      svg: "dashboard",
      src: solution3,
      alt: "solution-3"
    }
  ] })} ${renderComponent($$result2, "HeroSectionAlt", $$HeroSectionAlt, { "title": `Let's Build <span class="text-blue-600 dark:text-teal-600">Together</span>`, "subTitle": "We're here to help you with anything you need." })} ${renderComponent($$result2, "FAQ", $$FAQ, { "title": `Frequently<br /><span class="text-blue-600 dark:text-teal-600">asked questions</span>`, "faqs": faqs$1 })}  ` })}`;
}, "C:/Users/Rizan/Desktop/lovosis/src/pages/index.astro", void 0);

const $$file = "C:/Users/Rizan/Desktop/lovosis/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
