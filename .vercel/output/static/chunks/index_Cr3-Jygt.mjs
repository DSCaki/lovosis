/* empty css                         */
import { b as createComponent, d as renderTemplate, f as renderComponent, m as maybeRenderHead, F as Fragment, e as addAttribute } from './astro/server_C2zacUNG.mjs';
import 'kleur/colors';
import { a as $$MainLayout, S as SITE } from './MainLayout_hddzYu9E.mjs';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const products = [
    {
      image: "/pictures/logo.png",
      PName: "Product1",
      description1: "description1",
      description2: "description2",
      description3: "description3",
      link: "/singleproduct"
    },
    {
      image: "/pictures/logo.png",
      PName: "Product2",
      description1: "description1",
      description2: "description2",
      description3: "description3",
      link: "#"
    },
    {
      image: "/pictures/logo.png",
      PName: "Product3",
      description1: "description1",
      description2: "description2",
      description3: "description3",
      link: "#"
    },
    {
      image: "/pictures/logo.png",
      PName: "Product4",
      description1: "description1",
      description2: "description2",
      description3: "description3",
      link: "#"
    }
  ];
  const catogery1 = [
    {
      image: "/pictures/logo.png",
      PName: "Product1",
      description1: "description1",
      description2: "description2",
      description3: "description3",
      link: "#"
    },
    {
      image: "/pictures/logo.png",
      PName: "Product2",
      description1: "description1",
      description2: "description2",
      description3: "description3",
      link: "#"
    },
    {
      image: "/pictures/logo.png",
      PName: "Product3",
      description1: "description1",
      description2: "description2",
      description3: "description3",
      link: "#"
    },
    {
      image: "/pictures/logo.png",
      PName: "Product4",
      description1: "description1",
      description2: "description2",
      description3: "description3",
      link: "#"
    },
    {
      image: "/pictures/logo.png",
      PName: "Product5",
      description1: "description1",
      description2: "description2",
      description3: "description3",
      link: "#"
    },
    {
      image: "/pictures/logo.png",
      PName: "Product6",
      description1: "description1",
      description2: "description2",
      description3: "description3",
      link: "#"
    }
  ];
  const catogery2 = [
    {
      image: "/pictures/logo.png",
      PName: "Product1",
      description1: "description1",
      description2: "description2",
      description3: "description3",
      link: "#"
    },
    {
      image: "/pictures/logo.png",
      PName: "Product2",
      description1: "description1",
      description2: "description2",
      description3: "description3",
      link: "#"
    },
    {
      image: "/pictures/logo.png",
      PName: "Product3",
      description1: "description1",
      description2: "description2",
      description3: "description3",
      link: "#"
    },
    {
      image: "/pictures/logo.png",
      PName: "Product4",
      description1: "description1",
      description2: "description2",
      description3: "description3",
      link: "#"
    },
    {
      image: "/pictures/logo.png",
      PName: "Product5",
      description1: "description1",
      description2: "description2",
      description3: "description3",
      link: "#"
    }
  ];
  const pageTitle = `Products | ${SITE.title}`;
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  document.addEventListener("DOMContentLoaded", function () {\n    let prevScrollY = window.scrollY;\n  \n    window.addEventListener("scroll", function () {\n      const scrollContainer = document.querySelector(".scroll-container");\n      if (scrollContainer) {\n        const scrollYDiff = window.scrollY - prevScrollY;\n        scrollContainer.scrollLeft += scrollYDiff;\n        prevScrollY = window.scrollY;\n      }\n    });\n  });\n\n  function openTab(evt, tabName) {\n        var i, tabcontent, tablinks;\n        tabcontent = document.getElementsByClassName("tabcontent");\n        for (i = 0; i < tabcontent.length; i++) {\n            tabcontent[i].classList.add("hidden");\n        }\n        tablinks = document.getElementsByTagName("button");\n        for (i = 0; i < tablinks.length; i++) {\n            tablinks[i].classList.remove("active:bg-gray-200");\n        }\n        document.getElementById(tabName).classList.remove("hidden");\n        evt.currentTarget.classList.add("active:bg-gray-200");\n    }\n<\/script>'])), renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://lovosis.com/product",
    "url": "https://lovosis.com/product",
    "name": "Products | Lovosis",
    "description": "Explore the durability and precision of ScrewFast tools, designed for both professionals and enthusiasts.",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://lovosis.com",
      "name": "Lovosis",
      "description": "Custom Fabrication & Surveillance Solution Provider In Dubai, United Arab Emirates."
    },
    "inLanguage": "en-US"
  }, "class": "astro-rnqo2yuk" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full astro-rnqo2yuk"> <div class="grid lg:grid-cols-2 justify-items-center gap-5 astro-rnqo2yuk"> <div class="order-2 lg:order-1 flex flex-col justify-center astro-rnqo2yuk"> <p class="text-4xl font-bold md:text-7xl text-blue-600 dark:text-teal-600 astro-rnqo2yuk">25% OFF</p> <p class="text-4xl text-neutral-700 dark:text-neutral-400 font-bold md:text-7xl astro-rnqo2yuk">SUMMER SALE</p> <p class="mt-2 text-sm text-neutral-700 dark:text-neutral-400 md:text-lg astro-rnqo2yuk">For limited time only!</p> <a href="#" class="astro-rnqo2yuk"> <button class=" 2xl:text-base bg-blue-600 dark:bg-teal-600 text-white py-2 px-5 mt-10 hover:underline rounded-lg astro-rnqo2yuk">Shop Now</button> </a> </div> <div class="order-1 lg:order-2 astro-rnqo2yuk"> <img class="h-80 w-80 object-contain lg:w-[500px] lg:h-[500px] astro-rnqo2yuk" src="/pictures/logo.png" alt=""> </div> </div> <!--catogery --> <div class="mt-11 md:mt-24 py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6 astro-rnqo2yuk"> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full astro-rnqo2yuk"> <div class="col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col astro-rnqo2yuk"> <a href="" class="group relative flex flex-col overflow-hidden border dark:border-teal-600 rounded-lg px-4 pb-4 pt-40 flex-grow astro-rnqo2yuk"> <img src="/pictures/logo.png" alt="" class="absolute inset-0 h-full w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out astro-rnqo2yuk"> <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5 astro-rnqo2yuk"></div> <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl astro-rnqo2yuk">Category 1</h3> </a> </div> <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50 astro-rnqo2yuk"> <a href="" class="group relative flex flex-col overflow-hidden border dark:border-teal-600 rounded-lg px-4 pb-4 pt-40 mb-4 astro-rnqo2yuk"> <img src="/pictures/logo.png" alt="" class="absolute inset-0 h-full w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out astro-rnqo2yuk"> <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5 astro-rnqo2yuk"></div> <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl astro-rnqo2yuk">Category 2</h3> </a> <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 astro-rnqo2yuk"> <a href="" class="group relative flex flex-col overflow-hidden border dark:border-teal-600 rounded-lg px-4 pb-4 pt-40 astro-rnqo2yuk"> <img src="/pictures/logo.png" alt="" class="absolute inset-0 h-full w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out astro-rnqo2yuk"> <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5 astro-rnqo2yuk"></div> <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl astro-rnqo2yuk">Category 3</h3> </a> <a href="" class="group relative flex flex-col overflow-hidden border dark:border-teal-600 rounded-lg px-4 pb-4 pt-40 astro-rnqo2yuk"> <img src="/pictures/logo.png" alt="" class="absolute inset-0 h-full w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out astro-rnqo2yuk"> <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5 astro-rnqo2yuk"></div> <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl astro-rnqo2yuk">Category 4</h3> </a> </div> </div> <div class="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col astro-rnqo2yuk"> <a href="" class="group relative flex flex-col overflow-hidden border dark:border-teal-600 rounded-lg px-4 pb-4 pt-40 flex-grow astro-rnqo2yuk"> <img src="/pictures/logo.png" alt="" class="absolute inset-0 h-full w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out astro-rnqo2yuk"> <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5 astro-rnqo2yuk"></div> <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl astro-rnqo2yuk">Catrgory 5</h3> </a> </div> </div> </div> <div class="mt-11 md:mt-24 py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6 astro-rnqo2yuk"> <div class="border-b mb-5 flex justify-between text-sm astro-rnqo2yuk"> <div class="text-blue-600 dark:text-teal-600 flex items-center pb-2 pr-2 border-b-2 border-blue-600 dark:border-teal-600 uppercase astro-rnqo2yuk"> <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" class="astro-rnqo2yuk"> <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12M11 7h6M7 7h1m-1 5h1m-1 5h1m3-5h6m-6 5h6" color="currentColor" class="astro-rnqo2yuk"></path> </svg> <a href="#" class="font-semibold inline-block astro-rnqo2yuk">Product Line 1</a> </div> <a href="#" class=" hover:underline dark:text-neutral-300 text-base astro-rnqo2yuk">Brows More ></a> </div> <div class="scroll-container mx-auto max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 lg:py-6 2xl:max-w-full astro-rnqo2yuk"> <div class="flex flex-col-2 md:flex-col-2 items-center justify-center gap-y-2 gap-x-3 sm:flex-row sm:gap-x-12 sm:gap-y-0 lg:gap-x-5 astro-rnqo2yuk"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${products.map((product) => renderTemplate`<div class="product-card w-[250px] rounded-md shadow-xl overflow-hidden relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-white dark:bg-white/[.075] flex flex-col items-center justify-center gap-3 transition-all duration-300 group astro-rnqo2yuk"> <div class="para uppercase text-center leading-none z-40 astro-rnqo2yuk"> <p style="-webkit-text-stroke: 1px rgb(207, 205, 205);
                          -webkit-text-fill-color: transparent;" class="z-10 font-bold text-lg -mb-5 tracking-wider text-gray-600 astro-rnqo2yuk">
New Product
</p> <p class="font-bold text-xl tracking-wider text-[#1E7DB6] dark:text-white/[.075] z-30 astro-rnqo2yuk">
New Product
</p> </div> <div class="w-[180px] aspect-square relative z-20 after:absolute after:h-1 after:w-full after:opacity-0 after:bg-[#3D958E] after:top-8 after:left-0 after:group-hover:opacity-100 after:translate-x-1/2 after:translate-y-1/2 after:-z-20 after:group-hover:w-full after:transition-all after:duration-300 after:group-hover:origin-right after:group-hover:-translate-x-1/2 group-hover:translate-x-1/2 transition-all duration-300 astro-rnqo2yuk"> <img${addAttribute(product.image, "src")} alt="hero-image" class=" justify-center items-center astro-rnqo2yuk"> <div class="tooltips absolute top-0 left-0 -translate-x-[150%] p-0 flex flex-col items-start gap-10 transition-all duration-300 group-hover:-translate-x-full astro-rnqo2yuk"> <p class="text-[#3D958E] font-semibold text-sm uppercase group-hover:delay-1000 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500 astro-rnqo2yuk"> ${product.PName} </p> <ul class="flex flex-col items-start gap-2 astro-rnqo2yuk"> <li class="inline-flex gap-2 items-center justify-center group-hover:delay-200 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500 astro-rnqo2yuk"> <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="3" class="stroke-[#1E7DB6] astro-rnqo2yuk" stroke="#000000" fill="none" viewBox="0 0 24 24" height="10" width="10" xmlns="http://www.w3.org/2000/svg"> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" class="astro-rnqo2yuk"></path> <polyline points="22 4 12 14.01 9 11.01" class="astro-rnqo2yuk"></polyline> </svg> <p class="text-xs font-semibold text-[#3D958E] astro-rnqo2yuk">${product.description1}</p> </li> <li class="inline-flex gap-2 items-center justify-center group-hover:delay-200 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500 astro-rnqo2yuk"> <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="3" class="stroke-[#1E7DB6] astro-rnqo2yuk" stroke="#000000" fill="none" viewBox="0 0 24 24" height="10" width="10" xmlns="http://www.w3.org/2000/svg"> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" class="astro-rnqo2yuk"></path> <polyline points="22 4 12 14.01 9 11.01" class="astro-rnqo2yuk"></polyline> </svg> <p class="text-xs font-semibold text-[#3D958E] astro-rnqo2yuk">${product.description2}</p> </li> <li class="inline-flex gap-2 items-center justify-center group-hover:delay-200 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500 astro-rnqo2yuk"> <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="3" class="stroke-[#1E7DB6] astro-rnqo2yuk" stroke="#000000" fill="none" viewBox="0 0 24 24" height="10" width="10" xmlns="http://www.w3.org/2000/svg"> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" class="astro-rnqo2yuk"></path> <polyline points="22 4 12 14.01 9 11.01" class="astro-rnqo2yuk"></polyline> </svg> <p class="text-xs font-semibold text-[#3D958E] astro-rnqo2yuk">${product.description3}</p> </li> </ul> </div> </div> <div class="p-0 group-hover:-translate-y-5 transition-all duration-300 astro-rnqo2yuk"> <a${addAttribute(product.link, "href")} class="astro-rnqo2yuk"> <button class="relative group cursor-pointer text-sky-50  overflow-hidden h-10 w-28 rounded-md bg-white dark:bg-white/[.075] p-2 flex justify-center items-center text-xs font-semibold border border-teal-600 dark:text-white astro-rnqo2yuk"> <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-blue-600 astro-rnqo2yuk"></div> <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#3D958E] astro-rnqo2yuk"></div> <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-white/[.075] astro-rnqo2yuk"></div> <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600 astro-rnqo2yuk"></div> <p class="z-10 astro-rnqo2yuk">Shop Now</p> </button> </a> </div> </div>`)}` })} </div> </div> <div class=" p-4 min-h-screen astro-rnqo2yuk"> <div class="max-w-8xl items-center justify-center mx-auto px-6 md:px-5 xl:px-6 astro-rnqo2yuk"> <div class="relative mx-auto mb-12 w-full space-y-4 mt-24 md:mt-12 text-center sm:w-1/2 lg:w-1/3 astro-rnqo2yuk"> <h2 class="text-balance md:text-8xl text-5xl autoBLur font-bold leading-tight text-neutral-800 dark:text-neutral-200 sm:text-3xl fade-in-up astro-rnqo2yuk">
Our
</h2> <h2 class="text-balance text-4xl font-bold leading-tight text-neutral-800 dark:text-neutral-200 sm:text-3xl fade-in-up astro-rnqo2yuk">
Technology
</h2> </div> <div class="mt-16 grid divide-x divide-y  divide-gray-700 overflow-hidden  rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4 astro-rnqo2yuk"> <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10 astro-rnqo2yuk"> <div class="relative space-y-8 py-12 p-8 astro-rnqo2yuk"> <img src="https://www.svgrepo.com/show/164986/logo.svg" loading="lazy" width="200" height="200" class="w-12 h-12 rounded-full astro-rnqo2yuk" style="color:transparent"> <div class="space-y-2 astro-rnqo2yuk"> <h5 class="text-xl font-semibold text-white transition group-hover:text-secondary astro-rnqo2yuk">Xyz.com</h5> <p class="text-gray-300 astro-rnqo2yuk">Platform to convert Domains into Content websites.</p> </div> </div> </div> <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 astro-rnqo2yuk"> <div class="relative space-y-8 py-12 p-8 astro-rnqo2yuk"> <img src="https://www.svgrepo.com/show/120853/logo.svg" loading="lazy" width="200" height="200" class="w-12 h-12 rounded-full astro-rnqo2yuk" style="color:transparent"> <div class="space-y-2 astro-rnqo2yuk"> <h5 class="text-xl font-semibold text-white transition group-hover:text-secondary astro-rnqo2yuk">ABC.com</h5> <p class="text-gray-300 astro-rnqo2yuk">Platform to create dynamic widgets for websites.</p> </div> </div> </div> <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 astro-rnqo2yuk"> <div class="relative space-y-8 py-12 p-8 astro-rnqo2yuk"> <img src="https://www.svgrepo.com/show/120852/logo.svg" loading="lazy" width="200" height="200" class="w-12 h-12 rounded-full astro-rnqo2yuk" style="color:transparent"> <div class="space-y-2 astro-rnqo2yuk"> <h5 class="text-xl font-semibold text-white transition group-hover:text-secondary astro-rnqo2yuk">ASD.com</h5> <p class="text-gray-300 astro-rnqo2yuk">API SaaS Platform that provides API Suit to help you ship fast.</p> </div> </div> </div> <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 astro-rnqo2yuk"> <div class="relative space-y-8 py-12 p-8 astro-rnqo2yuk"> <img src="https://www.svgrepo.com/show/120850/logo.svg" loading="lazy" width="200" height="200" class="w-12 h-12 rounded-full astro-rnqo2yuk" style="color:transparent"> <div class="space-y-2 astro-rnqo2yuk"> <h5 class="text-xl font-semibold text-white transition group-hover:text-secondary astro-rnqo2yuk">TMK.co</h5> <p class="text-gray-300 astro-rnqo2yuk">Chrome Extension that lets you add ChatGPT on any website</p> </div> </div> </div> </div> </div> </div> <div class="mt-0 md:mt-7 py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6 astro-rnqo2yuk"> <div class="relative mx-auto mb-12 w-full space-y-4 mt-24 md:mt-12 text-center sm:w-1/2 lg:w-1/3 astro-rnqo2yuk"> <h2 class="text-balance md:text-8xl text-5xl font-bold leading-tight text-neutral-800 dark:text-neutral-200 sm:text-3xl astro-rnqo2yuk">
Latest
</h2> <h2 class="text-balance text-4xl font-bold leading-tight text-neutral-800 dark:text-neutral-200 sm:text-3xl astro-rnqo2yuk">
Products
</h2> </div> <div class="w-full max-w-full mx-auto astro-rnqo2yuk"> <div class="flex items-center gap-x-5 justify-center border-gray-300 astro-rnqo2yuk"> <button class="w-36 py-4 text-center font-medium text-gray-700 bg-gray-100 rounded-2xl focus:outline-none active:bg-teal-600 astro-rnqo2yuk" onclick="openTab(event, 'tab1')">Tab 1</button> <button class="w-36 py-4 text-center font-medium text-gray-700 bg-gray-100 rounded-2xl focus:outline-none astro-rnqo2yuk" onclick="openTab(event, 'tab2')">Tab 2</button> </div> <div id="tab1" class="tabcontent p-4 astro-rnqo2yuk"> <div class="flex flex-col-2 md:flex-col-2 flex-wrap items-center justify-center gap-y-2 gap-x-3 sm:flex-row sm:gap-x-12 sm:gap-y-12 lg:gap-x-5 astro-rnqo2yuk"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${catogery1.map((catogery12) => renderTemplate`<div class="product-card w-[250px] rounded-md shadow-xl overflow-hidden relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-white dark:bg-white/[.075] flex flex-col items-center justify-center gap-3 transition-all duration-300 group astro-rnqo2yuk"> <div class="para uppercase text-center leading-none z-40 astro-rnqo2yuk"> <p style="-webkit-text-stroke: 1px rgb(207, 205, 205);
                                -webkit-text-fill-color: transparent;" class="z-10 font-bold text-lg -mb-5 tracking-wider text-gray-600 astro-rnqo2yuk">
New Product
</p> <p class="font-bold text-xl tracking-wider text-[#1E7DB6] dark:text-white/[.075] z-30 astro-rnqo2yuk">
New Product
</p> </div> <div class="w-[180px] aspect-square relative z-20 after:absolute after:h-1 after:w-full after:opacity-0 after:bg-[#3D958E] after:top-8 after:left-0 after:group-hover:opacity-100 after:translate-x-1/2 after:translate-y-1/2 after:-z-20 after:group-hover:w-full after:transition-all after:duration-300 after:group-hover:origin-right after:group-hover:-translate-x-1/2 group-hover:translate-x-1/2 transition-all duration-300 astro-rnqo2yuk"> <!--products image --> <img${addAttribute(catogery12.image, "src")} alt="hero-image" class=" justify-center items-center astro-rnqo2yuk"> <div class="tooltips absolute top-0 left-0 -translate-x-[150%] p-0 flex flex-col items-start gap-10 transition-all duration-300 group-hover:-translate-x-full astro-rnqo2yuk"> <p class="text-[#3D958E] font-semibold text-sm uppercase group-hover:delay-1000 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500 astro-rnqo2yuk"> ${catogery12.PName} </p> <ul class="flex flex-col items-start gap-2 astro-rnqo2yuk"> <li class="inline-flex gap-2 items-center justify-center group-hover:delay-200 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500 astro-rnqo2yuk"> <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="3" class="stroke-[#1E7DB6] astro-rnqo2yuk" stroke="#000000" fill="none" viewBox="0 0 24 24" height="10" width="10" xmlns="http://www.w3.org/2000/svg"> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" class="astro-rnqo2yuk"></path> <polyline points="22 4 12 14.01 9 11.01" class="astro-rnqo2yuk"></polyline> </svg> <p class="text-xs font-semibold text-[#3D958E] astro-rnqo2yuk">${catogery12.description1}</p> </li> <li class="inline-flex gap-2 items-center justify-center group-hover:delay-200 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500 astro-rnqo2yuk"> <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="3" class="stroke-[#1E7DB6] astro-rnqo2yuk" stroke="#000000" fill="none" viewBox="0 0 24 24" height="10" width="10" xmlns="http://www.w3.org/2000/svg"> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" class="astro-rnqo2yuk"></path> <polyline points="22 4 12 14.01 9 11.01" class="astro-rnqo2yuk"></polyline> </svg> <p class="text-xs font-semibold text-[#3D958E] astro-rnqo2yuk">${catogery12.description2}</p> </li> <li class="inline-flex gap-2 items-center justify-center group-hover:delay-200 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500 astro-rnqo2yuk"> <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="3" class="stroke-[#1E7DB6] astro-rnqo2yuk" stroke="#000000" fill="none" viewBox="0 0 24 24" height="10" width="10" xmlns="http://www.w3.org/2000/svg"> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" class="astro-rnqo2yuk"></path> <polyline points="22 4 12 14.01 9 11.01" class="astro-rnqo2yuk"></polyline> </svg> <p class="text-xs font-semibold text-[#3D958E] astro-rnqo2yuk">${catogery12.description3}</p> </li> </ul> </div> </div> <div class="p-0 group-hover:-translate-y-5 transition-all duration-300 astro-rnqo2yuk"> <a${addAttribute(catogery12.link, "href")} class="astro-rnqo2yuk"> <button class="relative group cursor-pointer text-sky-50  overflow-hidden h-10 w-28 rounded-md bg-white dark:bg-white/[.075] p-2 flex justify-center items-center text-xs font-semibold border border-teal-600 dark:text-white astro-rnqo2yuk"> <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-blue-600 astro-rnqo2yuk"></div> <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#3D958E] astro-rnqo2yuk"></div> <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-white/[.075] astro-rnqo2yuk"></div> <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600 astro-rnqo2yuk"></div> <p class="z-10 astro-rnqo2yuk">Shop Now</p> </button> </a> </div> </div>`)}` })} </div> </div> <div id="tab2" class="tabcontent p-4 hidden astro-rnqo2yuk"> <div class="flex flex-col-2 md:flex-col-2 flex-wrap items-center justify-center gap-y-2 gap-x-3 sm:flex-row sm:gap-x-12 sm:gap-y-12 lg:gap-x-5 astro-rnqo2yuk"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${catogery2.map((catogery22) => renderTemplate`<div class="product-card w-[250px] rounded-md shadow-xl overflow-hidden relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-white dark:bg-white/[.075] flex flex-col items-center justify-center gap-3 transition-all duration-300 group astro-rnqo2yuk"> <div class="para uppercase text-center leading-none z-40 astro-rnqo2yuk"> <p style="-webkit-text-stroke: 1px rgb(207, 205, 205);
                                -webkit-text-fill-color: transparent;" class="z-10 font-bold text-lg -mb-5 tracking-wider text-gray-600 astro-rnqo2yuk">
New Product
</p> <p class="font-bold text-xl tracking-wider text-[#1E7DB6] dark:text-white/[.075] z-30 astro-rnqo2yuk">
New Product
</p> </div> <div class="w-[180px] aspect-square relative z-20 after:absolute after:h-1 after:w-full after:opacity-0 after:bg-[#3D958E] after:top-8 after:left-0 after:group-hover:opacity-100 after:translate-x-1/2 after:translate-y-1/2 after:-z-20 after:group-hover:w-full after:transition-all after:duration-300 after:group-hover:origin-right after:group-hover:-translate-x-1/2 group-hover:translate-x-1/2 transition-all duration-300 astro-rnqo2yuk"> <!--products image --> <img${addAttribute(catogery22.image, "src")} alt="hero-image" class=" justify-center items-center astro-rnqo2yuk"> <div class="tooltips absolute top-0 left-0 -translate-x-[150%] p-0 flex flex-col items-start gap-10 transition-all duration-300 group-hover:-translate-x-full astro-rnqo2yuk"> <p class="text-[#3D958E] font-semibold text-sm uppercase group-hover:delay-1000 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500 astro-rnqo2yuk"> ${catogery22.PName} </p> <ul class="flex flex-col items-start gap-2 astro-rnqo2yuk"> <li class="inline-flex gap-2 items-center justify-center group-hover:delay-200 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500 astro-rnqo2yuk"> <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="3" class="stroke-[#1E7DB6] astro-rnqo2yuk" stroke="#000000" fill="none" viewBox="0 0 24 24" height="10" width="10" xmlns="http://www.w3.org/2000/svg"> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" class="astro-rnqo2yuk"></path> <polyline points="22 4 12 14.01 9 11.01" class="astro-rnqo2yuk"></polyline> </svg> <p class="text-xs font-semibold text-[#3D958E] astro-rnqo2yuk">${catogery22.description1}</p> </li> <li class="inline-flex gap-2 items-center justify-center group-hover:delay-200 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500 astro-rnqo2yuk"> <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="3" class="stroke-[#1E7DB6] astro-rnqo2yuk" stroke="#000000" fill="none" viewBox="0 0 24 24" height="10" width="10" xmlns="http://www.w3.org/2000/svg"> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" class="astro-rnqo2yuk"></path> <polyline points="22 4 12 14.01 9 11.01" class="astro-rnqo2yuk"></polyline> </svg> <p class="text-xs font-semibold text-[#3D958E] astro-rnqo2yuk">${catogery22.description2}</p> </li> <li class="inline-flex gap-2 items-center justify-center group-hover:delay-200 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500 astro-rnqo2yuk"> <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="3" class="stroke-[#1E7DB6] astro-rnqo2yuk" stroke="#000000" fill="none" viewBox="0 0 24 24" height="10" width="10" xmlns="http://www.w3.org/2000/svg"> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" class="astro-rnqo2yuk"></path> <polyline points="22 4 12 14.01 9 11.01" class="astro-rnqo2yuk"></polyline> </svg> <p class="text-xs font-semibold text-[#3D958E] astro-rnqo2yuk">${catogery22.description3}</p> </li> </ul> </div> </div> <div class="p-0 group-hover:-translate-y-5 transition-all duration-300 astro-rnqo2yuk"> <a${addAttribute(catogery22.link, "href")} class="astro-rnqo2yuk"> <button class="relative group cursor-pointer text-sky-50  overflow-hidden h-10 w-28 rounded-md bg-white dark:bg-white/[.075] p-2 flex justify-center items-center text-xs font-semibold border border-teal-600 dark:text-white astro-rnqo2yuk"> <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-blue-600 astro-rnqo2yuk"></div> <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#3D958E] astro-rnqo2yuk"></div> <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-white/[.075] astro-rnqo2yuk"></div> <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600 astro-rnqo2yuk"></div> <p class="z-10 astro-rnqo2yuk">Shop Now</p> </button> </a> </div> </div>`)}` })} </div> </div> </div> </div> <div class="p-6 astro-rnqo2yuk"> <div class="mx-auto astro-rnqo2yuk"> <div class="relative z-20 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 astro-rnqo2yuk" style="background-image: linear-gradient(to left bottom, #1E7DB6, #1E7DB6, #1E7DB6, #1E7DB6, #1E7DB6, #1E7DB6, #3D958E, #3D958E, #3D958E, #3D958E, #3D958E, #3D958E);"> <div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-8 lg:py-16 lg:pr-0 astro-rnqo2yuk"> <div class="lg:self-center astro-rnqo2yuk"> <h2 class="text-2xl leading-9 font-extrabold text-white sm:text-3xl sm:leading-10 astro-rnqo2yuk"> <span class="block astro-rnqo2yuk">This is a title product advertisement card</span> </h2> <p class="mt-4 text-base leading-6 text-white astro-rnqo2yuk">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat.
</p> <p class="mt-4 text-base leading-6 text-dark-blue-800 astro-rnqo2yuk"></p> <a href="#" target="_blank" class="mt-8 border border-neutral-300 hover:underline rounded-md shadow px-6 py-3 inline-flex items-center text-base leading-6 font-medium  text-white transition duration-150 ease-in-out astro-rnqo2yuk">
Shop Now
</a> </div> </div> <div class="relative pb-3/5 -mt-6 md:pb-1/2 astro-rnqo2yuk"> <img class="absolute inset-0 w-full h-full rounded-md object-contain astro-rnqo2yuk" src="/pictures/p1.png"> </div> </div> </div> </div> </div> </section> ` }));
}, "C:/Users/Rizan/Desktop/lovosis/src/pages/product/index.astro", void 0);

const $$file = "C:/Users/Rizan/Desktop/lovosis/src/pages/product/index.astro";
const $$url = "/product";

export { $$Index as default, $$file as file, $$url as url };
