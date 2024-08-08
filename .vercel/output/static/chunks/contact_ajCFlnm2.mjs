/* empty css                         */
import { b as createComponent, d as renderTemplate, f as renderComponent, m as maybeRenderHead } from './astro/server_C2zacUNG.mjs';
import 'kleur/colors';
import { a as $$MainLayout, S as SITE } from './MainLayout_C6WT1fda.mjs';
import { $ as $$ContactIconBlock } from './ContactIconBlock_CU4LWKEQ.mjs';
/* empty css                           */

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = `Contact | ${SITE.title + " - Custom Fabrication & Surveillance Solution Provider In Dubai, United Arab Emirates"}`;
  const abtitle = "Contact us";
  const absubTitle = "Have questions or want to discuss a project? Reach out, and let's craft the perfect solution with our products.";
  return renderTemplate`<!--Utilizing MainLayout for the outer layout of the page, and defining meta for SEO purposes-->${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://lovosis.com/contact",
    "url": "https://lovosis.com/contact",
    "name": "Contact | Lovosis",
    "description": "Have questions or want to discuss a project? Reach out.",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://lovosis.com",
      "name": "Lovosis",
      "description": "Custom Fabrication & Surveillance Solution Provider In Dubai, United Arab Emirates"
    },
    "inLanguage": "en-US"
  }, "class": "astro-uw5kdbxl" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full astro-uw5kdbxl"><div class="text-center bg-gray-100 dark:bg-neutral-500 p-5 md:p-12 rounded-2xl mb-20 astro-uw5kdbxl"><h1 class="text-balance animate-fade-in-left text-3xl md:text-6xl md:leading-tight font-bold tracking-tight text-neutral-800 dark:text-neutral-100 astro-uw5kdbxl">${abtitle}</h1><p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-200 astro-uw5kdbxl">${absubTitle}</p></div><div class="mx-auto max-w-2xl lg:max-w-5xl astro-uw5kdbxl"><div class=" grid items-center gap-6 lg:grid-cols-2 lg:gap-16 astro-uw5kdbxl"><div class="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8 astro-uw5kdbxl"><!-- Form for user input with various input fields.--><!-- Each field utilizes a different input component for the specific type of input (text, email, phone, and textarea)--><form id="contact-form" action="send-email.php" method="POST" class="astro-uw5kdbxl"><div class="grid gap-4 fadeInUp astro-uw5kdbxl"><div class="grid grid-cols-1 gap-4 sm:grid-cols-2 astro-uw5kdbxl"><div class="relative astro-uw5kdbxl"><div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none astro-uw5kdbxl"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500 dark:text-gray-400 astro-uw5kdbxl" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" class="astro-uw5kdbxl"><circle cx="24" cy="11" r="7" class="astro-uw5kdbxl"></circle><path d="M4 41c0-8.837 8.059-16 18-16m9 17l10-10l-4-4l-10 10v4z" class="astro-uw5kdbxl"></path></g></svg></div><input type="text" name="name" id="name" placeholder="First Name " required class="block w-full ps-10 p-2.5 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1 astro-uw5kdbxl"></div><div class="relative astro-uw5kdbxl"><div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none astro-uw5kdbxl"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500 dark:text-gray-400 astro-uw5kdbxl" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" class="astro-uw5kdbxl"><circle cx="24" cy="11" r="7" class="astro-uw5kdbxl"></circle><path d="M4 41c0-8.837 8.059-16 18-16m9 17l10-10l-4-4l-10 10v4z" class="astro-uw5kdbxl"></path></g></svg></div><input type="text" name="name" id="name" placeholder="Last Name " required class="block w-full ps-10 p-2.5 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1 astro-uw5kdbxl"></div></div><div class="relative astro-uw5kdbxl"><div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none astro-uw5kdbxl"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500 dark:text-gray-400 astro-uw5kdbxl" viewBox="0 0 20 20"><path fill="currentColor" d="m15.81 1.548l-4.83 4.83a2.2 2.2 0 0 0-.578 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.078l1.498-.374a2.2 2.2 0 0 0 1.02-.578l4.83-4.83a1.87 1.87 0 0 0-2.645-2.644M12.942 3l.84-.84A2 2 0 0 0 13 2H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9.06l-.668.67a3 3 0 0 1-.332.288V16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM9 14a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" class="astro-uw5kdbxl"></path></svg></div><input type="tel" name="phone" id="phone" placeholder="Phone Number " pattern="[0-9, +]*" oninput="this.value = this.value.replace(/[^0-9, +]/g, '')" required class="block w-full rounded-lg border ps-10 p-2.5 border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1 astro-uw5kdbxl"></div><div class="relative astro-uw5kdbxl"><div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none astro-uw5kdbxl"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500 dark:text-gray-400 astro-uw5kdbxl" viewBox="0 0 24 24"><path fill="currentColor" d="M19.07 13.88L13 19.94V22h2.06l6.06-6.07m1.58-2.35l-1.28-1.28a.52.52 0 0 0-.38-.17c-.15.01-.29.06-.39.17l-1 1l2.05 2l1-1c.19-.2.19-.52 0-.72M11 18H4V8l8 5l8-5v2h2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7zm9-12l-8 5l-8-5z" class="astro-uw5kdbxl"></path></svg></div><input type="email" name="email" id="email" placeholder="Email " required class="block w-full rounded-lg border ps-10 p-2.5 border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1 astro-uw5kdbxl"></div><div class="relative astro-uw5kdbxl"><div class="absolute inset-y-0 start-0 flex items-start pt-6 ps-3.5 pointer-events-none astro-uw5kdbxl"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500 dark:text-gray-400 astro-uw5kdbxl" viewBox="0 0 24 24"><path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14h-7.277L9 18.233V16H4V4h16z" class="astro-uw5kdbxl"></path><path fill="currentColor" d="m13.803 9.189l-1.399-1.398l-3.869 3.864v1.399h1.399zm.327-3.123l1.398 1.399l-1.066 1.066l-1.399-1.398z" class="astro-uw5kdbxl"></path></svg></div><textarea name="message" id="message" placeholder="Message " required class="block w-full rounded-lg border ps-10 p-2.5 border-neutral-200 bg-neutral-50 px-4 py-5 items-start text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1 astro-uw5kdbxl"></textarea></div><div class="astro-uw5kdbxl"><button type="submit" class="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 astro-uw5kdbxl">
Send Message
</button></div></div></form></div><!--ContactIconBlocks are used to display different methods of contacting, including visiting office, email, browsing knowledgebase, and FAQ.--><div class="divide-y divide-neutral-300 dark:divide-neutral-700 astro-uw5kdbxl">${renderComponent($$result2, "ContactIconBlock", $$ContactIconBlock, { "heading": "Chat with us by whatsapp", "content": "Browse through all of us.", "isLinkVisible": true, "linkTitle": "Visit guides & tutorials", "linkURL": "https://wa.me/+971561184993", "isArrowVisible": true, "class": "astro-uw5kdbxl" }, { "default": ($$result3) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="text-neutral-600 dark:text-neutral-200 astro-uw5kdbxl" width="22" height="22" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222c0-59.3-25.2-115-67.1-157m-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4l-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2c0-101.7 82.8-184.5 184.6-184.5c49.3 0 95.6 19.2 130.4 54.1c34.8 34.9 56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6m101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18c-5.1-1.9-8.8-2.8-12.5 2.8c-3.7 5.6-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4c-32.6-16.3-54-29.1-75.5-66c-5.7-9.8 5.7-9.1 16.3-30.3c1.8-3.7.9-6.9-.5-9.7c-1.4-2.8-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5c-3.2-.2-6.9-.2-10.6-.2c-3.7 0-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3c0 27.3 19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8c35.2 15.2 49 16.5 66.6 13.9c10.7-1.6 32.8-13.4 37.4-26.4c4.6-13 4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6" class="astro-uw5kdbxl"></path></svg>` })}${renderComponent($$result2, "ContactIconBlock", $$ContactIconBlock, { "heading": "Visit our office", "content": "Lovosis Technology", "isAddressVisible": true, "addressContent": "Baghlaf Building Showroom No.5 Satellite Market Naif Deira - Dubai United Arab Emirates,", "addressContent1": "25th St\xA0-\xA0Naif\xA0-\xA0Dubai.", "addressContent2": "P.O.Box: 123421.", "class": "astro-uw5kdbxl" }, { "default": ($$result3) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class=" w-14 h-14 md:w-8 md:h-8 clr-i-outline clr-i-outline-path-1 text-neutral-600 dark:text-neutral-200 astro-uw5kdbxl" viewBox="0 0 36 36"><path fill="currentColor" d="M18 6.72a5.73 5.73 0 1 0 5.73 5.73A5.73 5.73 0 0 0 18 6.72m0 9.46a3.73 3.73 0 1 1 3.73-3.73A3.73 3.73 0 0 1 18 16.17Z" class="astro-uw5kdbxl"></path><path fill="currentColor" d="M18 2A11.79 11.79 0 0 0 6.22 13.73c0 4.67 2.62 8.58 4.54 11.43l.35.52a100 100 0 0 0 6.14 8l.76.89l.76-.89a100 100 0 0 0 6.14-8l.35-.53c1.91-2.85 4.53-6.75 4.53-11.42A11.79 11.79 0 0 0 18 2m5.59 22l-.36.53c-1.72 2.58-4 5.47-5.23 6.9c-1.18-1.43-3.51-4.32-5.23-6.9l-.35-.53c-1.77-2.64-4.2-6.25-4.2-10.31a9.78 9.78 0 1 1 19.56 0c0 4.1-2.42 7.71-4.19 10.31" class="clr-i-outline clr-i-outline-path-2 astro-uw5kdbxl"></path><path fill="none" d="M0 0h36v36H0z" class="astro-uw5kdbxl"></path></svg>` })}${renderComponent($$result2, "ContactIconBlock", $$ContactIconBlock, { "heading": "Contact us by email", "content": "Have any enquiry? Drop us an email at", "isLinkVisible": true, "linkTitle": "sales@lovosis.com", "linkURL": "mailto:sales@lovosis.com", "class": "astro-uw5kdbxl" }, { "default": ($$result3) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="text-neutral-600 dark:text-neutral-200 astro-uw5kdbxl" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.806 5.37a3.136 3.136 0 0 1 1.268 2.08c.045.3.086.602.122.903c.28 2.603.268 5.605-.122 8.198a3.138 3.138 0 0 1-2.831 2.66l-1.51.13c-3.15.274-6.317.274-9.465 0l-1.51-.13a3.138 3.138 0 0 1-2.832-2.66c-.39-2.593-.402-5.595-.122-8.198a31.1 31.1 0 0 1 .122-.904A3.136 3.136 0 0 1 4.19 5.373l-.001-.007l.047-.026c.173-.12.358-.223.553-.307l4.416-2.454a5.75 5.75 0 0 1 5.585 0l4.406 2.448c.204.087.398.195.578.321l.032.018zm-.84 1.244l-4.904-2.723a4.25 4.25 0 0 0-4.128 0L5.043 6.608a1.637 1.637 0 0 0-.634 1.065a29.28 29.28 0 0 0-.034.233l5.561 3.09a4.25 4.25 0 0 0 4.128 0l5.56-3.09a26.386 26.386 0 0 0-.033-.233a1.636 1.636 0 0 0-.626-1.059m.74 8.866c.238-1.979.272-3.976.102-5.96l-5.016 2.787a5.75 5.75 0 0 1-5.585 0L4.191 9.52a29.101 29.101 0 0 0 .218 6.807a1.637 1.637 0 0 0 1.478 1.389l1.51.131c3.063.266 6.143.266 9.206 0l1.51-.131a1.638 1.638 0 0 0 1.478-1.389c.042-.281.08-.564.114-.847" clip-rule="evenodd" class="astro-uw5kdbxl"></path></svg>` })}</div></div><div class="rounded-lg overflow-hidden astro-uw5kdbxl"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5252.514167547046!2d55.3174023!3d25.2649618!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ccf1b1322e9%3A0xe21d855b6fea81e7!2sBaghlaf%20Building%20-%2026B%20St%20-%20Deira%20-%20Dubai%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2ssa!4v1720859059038!5m2!1sen!2ssa" width="100%" height="280" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="astro-uw5kdbxl">
              </iframe></div></div></section>` })}`;
}, "C:/Users/Rizan/Desktop/lovosis/src/pages/contact.astro", void 0);

const $$file = "C:/Users/Rizan/Desktop/lovosis/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
