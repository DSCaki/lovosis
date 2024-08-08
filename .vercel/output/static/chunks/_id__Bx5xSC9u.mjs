/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, f as renderComponent, e as addAttribute, F as Fragment, u as unescapeHTML, m as maybeRenderHead } from './astro/server_C2zacUNG.mjs';
import 'kleur/colors';
import { S as SITE, a as $$MainLayout } from './MainLayout_C6WT1fda.mjs';
import { p as productsData } from './new_Cm-IjHfR.mjs';
/* empty css                        */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://lovosis.com/");
async function getStaticPaths() {
  const products = productsData.products;
  return products.map((product) => ({
    params: { id: product.id.toString() }
  }));
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let product;
  if (id) {
    const productId = parseInt(id);
    const products = productsData.products;
    product = products.find((p) => p.id === productId);
  }
  const pageTitle = product ? `${product.title} | ${SITE.title}` : `Product not found | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://lovosis.com/about",
    "url": "https://lovosis.com/about",
    "name": "About | Lovosis",
    "description": "Discover Lovosis, Dubai's authorized supplier of top-quality Surveillance & IT Solution. Learn about our commitment to excellence in the UAE construction industry.",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://lovosis.com",
      "name": "Lovosis",
      "description": "Custom Fabrication & Surveillance Solution Provider In Dubai, United Arab Emirates."
    },
    "inLanguage": "en-US"
  }, "class": "astro-y5jmkon6" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["", '<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full astro-y5jmkon6">', `<script>
        const imgs = document.querySelectorAll('.img-select a');
        const imgBtns = [...imgs];
        let imgId = 1;

        imgBtns.forEach((imgItem) => {
            imgItem.addEventListener('click', (event) => {
                event.preventDefault();
                imgId = imgItem.dataset.id;
                slideImage();
            });
        });

        function slideImage(){
            const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

            document.querySelector('.img-showcase').style.transform = \`translateX(\${- (imgId - 1) * displayWidth}px)\`;
        }

        window.addEventListener('resize', slideImage);


        function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.add("hidden");
        }
        tablinks = document.getElementsByTagName("button");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active:bg-gray-200");
        }
        document.getElementById(tabName).classList.remove("hidden");
        evt.currentTarget.classList.add("active:bg-gray-200");
    }

    window.openModal = function(modalId) {
        document.getElementById(modalId).style.display = 'block'
        document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden')
    }

    window.closeModal = function(modalId) {
        document.getElementById(modalId).style.display = 'none'
        document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
    }

    // Close all modals when press ESC
    document.onkeydown = function(event) {
        event = event || window.event;
        if (event.keyCode === 27) {
            document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
            let modals = document.getElementsByClassName('modal');
            Array.prototype.slice.call(modals).forEach(i => {
                i.style.display = 'none'
            })
        }
    };
    <\/script></section>`], ["", '<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full astro-y5jmkon6">', `<script>
        const imgs = document.querySelectorAll('.img-select a');
        const imgBtns = [...imgs];
        let imgId = 1;

        imgBtns.forEach((imgItem) => {
            imgItem.addEventListener('click', (event) => {
                event.preventDefault();
                imgId = imgItem.dataset.id;
                slideImage();
            });
        });

        function slideImage(){
            const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

            document.querySelector('.img-showcase').style.transform = \\\`translateX(\\\${- (imgId - 1) * displayWidth}px)\\\`;
        }

        window.addEventListener('resize', slideImage);


        function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.add("hidden");
        }
        tablinks = document.getElementsByTagName("button");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active:bg-gray-200");
        }
        document.getElementById(tabName).classList.remove("hidden");
        evt.currentTarget.classList.add("active:bg-gray-200");
    }

    window.openModal = function(modalId) {
        document.getElementById(modalId).style.display = 'block'
        document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden')
    }

    window.closeModal = function(modalId) {
        document.getElementById(modalId).style.display = 'none'
        document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
    }

    // Close all modals when press ESC
    document.onkeydown = function(event) {
        event = event || window.event;
        if (event.keyCode === 27) {
            document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
            let modals = document.getElementsByClassName('modal');
            Array.prototype.slice.call(modals).forEach(i => {
                i.style.display = 'none'
            })
        }
    };
    <\/script></section>`])), maybeRenderHead(), product ? renderTemplate`<nav class="flex mb-5 astro-y5jmkon6" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-2 astro-y5jmkon6"><li class="inline-flex items-center astro-y5jmkon6"><a href="a" class="text-gray-700 dark:text-teal-600 hover:text-gray-900 inline-flex items-center astro-y5jmkon6"><svg class="w-5 h-5 mr-2.5 astro-y5jmkon6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" class="astro-y5jmkon6"></path></svg>
Home
</a></li><li class="astro-y5jmkon6"><div class="flex items-center astro-y5jmkon6"><svg class="w-6 h-6 text-gray-400 astro-y5jmkon6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" class="astro-y5jmkon6"></path></svg><a href="#" class="text-gray-700 dark:text-teal-600 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium astro-y5jmkon6">${product.cat1}</a></div></li><li class="astro-y5jmkon6"><div class="flex items-center astro-y5jmkon6"><svg class="w-6 h-6 text-gray-400 astro-y5jmkon6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" class="astro-y5jmkon6"></path></svg><a href="#" class="text-gray-700 dark:text-teal-600 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium astro-y5jmkon6">${product.cat2}</a></div></li><li class="astro-y5jmkon6"><div class="flex items-center astro-y5jmkon6"><svg class="w-6 h-6 text-gray-400 astro-y5jmkon6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" class="astro-y5jmkon6"></path></svg><span class="text-gray-400 ml-1 md:ml-2 text-sm font-medium astro-y5jmkon6" aria-current="page">${product.cat3}</span></div></li></ol></nav>



    <div class="card-wrapper astro-y5jmkon6"><div class="card w-full p-x-36 astro-y5jmkon6"><!-- card left --><div class="product-imgs astro-y5jmkon6"><div class="img-display border dark:border-teal-600 border-blue-600 rounded-xl astro-y5jmkon6"><div class="img-showcase  astro-y5jmkon6"><img${addAttribute(product.img, "src")} alt="shoe image" class="astro-y5jmkon6"><img${addAttribute(product.img, "src")} alt="shoe image" class="astro-y5jmkon6"><img${addAttribute(product.img, "src")} alt="shoe image" class="astro-y5jmkon6"><img${addAttribute(product.img, "src")} alt="shoe image" class="astro-y5jmkon6"><img${addAttribute(product.img, "src")} alt="shoe image" class="astro-y5jmkon6"></div></div><div class="img-select astro-y5jmkon6"><div class="img-item border dark:border-teal-600 border-blue-600 p-4 rounded-xl astro-y5jmkon6"><a href="#" data-id="1" class="astro-y5jmkon6"><img${addAttribute(product.img, "src")} alt="shoe image" class="astro-y5jmkon6"></a></div><div class="img-item border dark:border-teal-600 border-blue-600 p-4 rounded-xl astro-y5jmkon6"><a href="#" data-id="2" class="astro-y5jmkon6"><img${addAttribute(product.img, "src")} alt="shoe image" class="astro-y5jmkon6"></a></div><div class="img-item border dark:border-teal-600 border-blue-600 p-4 rounded-xl astro-y5jmkon6"><a href="#" data-id="3" class="astro-y5jmkon6"><img${addAttribute(product.img, "src")} alt="shoe image" class="astro-y5jmkon6"></a></div><div class="img-item border dark:border-teal-600 border-blue-600 p-4 rounded-xl astro-y5jmkon6"><a href="#" data-id="4" class="astro-y5jmkon6"><img${addAttribute(product.img, "src")} alt="shoe image" class="astro-y5jmkon6"></a></div><div class="img-item border dark:border-teal-600 border-blue-600 p-4 rounded-xl astro-y5jmkon6"><a href="#" data-id="5" class="astro-y5jmkon6"><img${addAttribute(product.img, "src")} alt="shoe image" class="astro-y5jmkon6"></a></div></div></div><!-- card right --><div class="product-content mt-5 md:mt-0 dark:bg-white/[.075] rounded-xl astro-y5jmkon6"><h2 class="md:text-4xl md:font-bold dark:text-teal-600 astro-y5jmkon6">${product.title}</h2><div class="product-detail dark:text-neutral-300 astro-y5jmkon6"><p class="astro-y5jmkon6">${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(product.shortdes)}` })}</p><ul class="astro-y5jmkon6"></ul></div><a href="/contact" class="astro-y5jmkon6"><button class=" 2xl:text-base bg-blue-600 dark:bg-teal-600 text-white py-2 px-5 mt-10 hover:underline rounded-lg astro-y5jmkon6">Shop Now</button></a></div></div></div>


    <div class="w-full max-w-full mx-auto mt-20 astro-y5jmkon6"><div class="flex items-center gap-x-5 justify-center border-gray-300 astro-y5jmkon6"><button class="w-36 py-4 text-center font-medium text-gray-700 bg-gray-100 rounded-2xl focus:outline-none astro-y5jmkon6" onclick="openTab(event, 'tab1')">Description</button><button class="w-36 py-4 text-center font-medium text-gray-700 bg-gray-100 rounded-2xl focus:outline-none astro-y5jmkon6" onclick="openTab(event, 'tab2')">Specification</button></div><div id="tab1" class="tabcontent p-4 mt-3 rounded-xl bg-neutral-300 dark:bg-neutral-600 astro-y5jmkon6"><div class="flex flex-col-2 dark:text-neutral-300 md:flex-col-2 flex-wrap items-center justify-center gap-y-2 gap-x-3 sm:flex-row sm:gap-x-12 sm:gap-y-12 lg:gap-x-5 astro-y5jmkon6">${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(product.desc)}` })}</div></div><div id="tab2" class="tabcontent p-4 hidden mt-3 rounded-xl bg-neutral-300 dark:bg-neutral-600 astro-y5jmkon6"><div class="flex flex-col-2 dark:text-neutral-300 md:flex-col-2 flex-wrap items-center justify-center gap-y-2 gap-x-3 sm:flex-row sm:gap-x-12 sm:gap-y-12 lg:gap-x-5 astro-y5jmkon6">
What is Lorem Ipsum?
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</div></div></div>

     
     <div id="modelConfirm" class="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4  astro-y5jmkon6"><div class="relative top-20 mx-auto shadow-xl rounded-md bg-neutral-200 dark:bg-neutral-700 max-w-md astro-y5jmkon6"><div class="flex justify-end p-2 astro-y5jmkon6"><button onclick="closeModal('modelConfirm')" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center astro-y5jmkon6"><svg class="w-5 h-5 astro-y5jmkon6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" class="astro-y5jmkon6"></path></svg></button></div><div class="p-6 pt-0 text-center astro-y5jmkon6"><form id="contact-form" action="send-email.php" method="POST" class="astro-y5jmkon6"><div class="grid gap-4 fadeInUp astro-y5jmkon6"><div class="grid grid-cols-1 gap-4 sm:grid-cols-2 astro-y5jmkon6"><div class="relative astro-y5jmkon6"><div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none astro-y5jmkon6"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500 dark:text-gray-400 astro-y5jmkon6" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" class="astro-y5jmkon6"><circle cx="24" cy="11" r="7" class="astro-y5jmkon6"></circle><path d="M4 41c0-8.837 8.059-16 18-16m9 17l10-10l-4-4l-10 10v4z" class="astro-y5jmkon6"></path></g></svg></div><input type="text" name="name" id="name" placeholder="First Name " required class="block w-full ps-10 p-2.5 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1 astro-y5jmkon6"></div><div class="relative astro-y5jmkon6"><div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none astro-y5jmkon6"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500 dark:text-gray-400 astro-y5jmkon6" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" class="astro-y5jmkon6"><circle cx="24" cy="11" r="7" class="astro-y5jmkon6"></circle><path d="M4 41c0-8.837 8.059-16 18-16m9 17l10-10l-4-4l-10 10v4z" class="astro-y5jmkon6"></path></g></svg></div><input type="text" name="name" id="name" placeholder="Last Name " required class="block w-full ps-10 p-2.5 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1 astro-y5jmkon6"></div></div><div class="relative astro-y5jmkon6"><div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none astro-y5jmkon6"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500 dark:text-gray-400 astro-y5jmkon6" viewBox="0 0 20 20"><path fill="currentColor" d="m15.81 1.548l-4.83 4.83a2.2 2.2 0 0 0-.578 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.078l1.498-.374a2.2 2.2 0 0 0 1.02-.578l4.83-4.83a1.87 1.87 0 0 0-2.645-2.644M12.942 3l.84-.84A2 2 0 0 0 13 2H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9.06l-.668.67a3 3 0 0 1-.332.288V16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM9 14a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" class="astro-y5jmkon6"></path></svg></div><input type="tel" name="phone" id="phone" placeholder="Phone Number " pattern="[0-9, +]*" oninput="this.value = this.value.replace(/[^0-9, +]/g, '')" required class="block w-full rounded-lg border ps-10 p-2.5 border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1 astro-y5jmkon6"></div><div class="relative astro-y5jmkon6"><div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none astro-y5jmkon6"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500 dark:text-gray-400 astro-y5jmkon6" viewBox="0 0 24 24"><path fill="currentColor" d="M19.07 13.88L13 19.94V22h2.06l6.06-6.07m1.58-2.35l-1.28-1.28a.52.52 0 0 0-.38-.17c-.15.01-.29.06-.39.17l-1 1l2.05 2l1-1c.19-.2.19-.52 0-.72M11 18H4V8l8 5l8-5v2h2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7zm9-12l-8 5l-8-5z" class="astro-y5jmkon6"></path></svg></div><input type="email" name="email" id="email" placeholder="Email " required class="block w-full rounded-lg border ps-10 p-2.5 border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1 astro-y5jmkon6"></div><div class="relative astro-y5jmkon6"><div class="absolute inset-y-0 start-0 flex items-start pt-6 ps-3.5 pointer-events-none astro-y5jmkon6"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500 dark:text-gray-400 astro-y5jmkon6" viewBox="0 0 24 24"><path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14h-7.277L9 18.233V16H4V4h16z" class="astro-y5jmkon6"></path><path fill="currentColor" d="m13.803 9.189l-1.399-1.398l-3.869 3.864v1.399h1.399zm.327-3.123l1.398 1.399l-1.066 1.066l-1.399-1.398z" class="astro-y5jmkon6"></path></svg></div><textarea name="message" id="message" placeholder="Message " required class="block w-full rounded-lg border ps-10 p-2.5 border-neutral-200 bg-neutral-50 px-4 py-5 items-start text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1 astro-y5jmkon6"></textarea></div><div class="astro-y5jmkon6"><button type="submit" class="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 astro-y5jmkon6">
Send Message
</button></div></div></form></div></div></div>` : renderTemplate`<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full astro-y5jmkon6"><p class="text-center text-gray-500 dark:text-neutral-300 astro-y5jmkon6">Product not found.</p></section>`) })}`;
}, "C:/Users/Rizan/Desktop/lovosis/src/pages/products/[id].astro", void 0);

const $$file = "C:/Users/Rizan/Desktop/lovosis/src/pages/products/[id].astro";
const $$url = "/products/[id]";

export { $$id as default, $$file as file, getStaticPaths, $$url as url };
