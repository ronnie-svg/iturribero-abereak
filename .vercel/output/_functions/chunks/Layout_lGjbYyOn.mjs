import { i as createAstro, c as createComponent, a as renderTemplate, u as unescapeHTML, d as addAttribute, m as maybeRenderHead, r as renderComponent, n as renderHead, o as renderSlot } from './astro/server_BhaBOUv-.mjs';
import 'piccolore';
/* empty css                               */
import 'clsx';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://iturriberoabereak.com");
const $$SeoHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SeoHead;
  const { title, description, image, canonical } = Astro2.props;
  const gtmHeadScript = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NHDHMVVK');
`;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', '</title><meta name="description"', '><meta name="author" content="Iturribero Abereak"><meta name="robots" content="index, follow"><link rel="canonical"', '><link rel="icon" href="/Iturriberoabereaklogo.svg" type="image/svg+xml"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:image"', '><meta property="og:locale" content="es_ES"><meta property="og:site_name" content="Iturribero Abereak"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><script type="application/ld+json">', "<\/script><!-- Google Tag Manager --><script>", "<\/script><!-- End Google Tag Manager -->"])), title, addAttribute(description, "content"), addAttribute(canonical, "href"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonical, "content"), addAttribute(image, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Iturribero Abereak",
    image,
    url: canonical,
    description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Durana",
      addressRegion: "\xC1lava",
      addressCountry: "ES"
    }
  })), unescapeHTML(gtmHeadScript));
}, "C:/Users/izaskun/iturribero-abereak/src/components/layouts/SeoHead.astro", void 0);

const $$SiteHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header id="site-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-linear-to-b from-black/35 to-transparent"> <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6"> <a href="/" class="flex items-center gap-3"> <img src="/Iturriberoabereaklogo.svg" alt="Iturribero Abereak" class="h-10 w-auto"> <span id="brand-text" class="font-semibold text-lg tracking-tight text-white">
Iturribero Abereak
</span> </a> <nav class="hidden md:flex items-center gap-6 text-sm"> <a id="nav-qs" href="/quienes-somos" class="hover:underline underline-offset-4 text-white">
Quiénes somos
</a> <a id="nav-gan" href="/ganaderia" class="hover:underline underline-offset-4 text-white">
Ganadería
</a> <a id="nav-agr" href="/agricultura" class="hover:underline underline-offset-4 text-white">
Agricultura
</a> <a id="nav-contact" href="/contacto" class="inline-flex items-center justify-center px-5 py-2 rounded-full font-semibold transition bg-white/15 text-white border border-white/25 hover:bg-white/25">
Contacto
</a> </nav> <div class="md:hidden flex items-center"> <button id="mobile-menu-button" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-menu" class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20"> <svg id="icon-menu" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <svg id="icon-close" xmlns="http://www.w3.org/2000/svg" class="hidden h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18"></path> </svg> </button> </div> </div> <div id="mobile-menu" class="hidden md:hidden border-t border-gray-200 bg-white/95 backdrop-blur shadow-lg"> <nav class="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-4 text-base"> <a href="/quienes-somos" class="text-gray-900 font-medium">Quiénes somos</a> <a href="/ganaderia" class="text-gray-900 font-medium">Ganadería</a> <a href="/agricultura" class="text-gray-900 font-medium">Agricultura</a> <a href="/contacto" class="mt-2 inline-flex w-fit items-center justify-center px-5 py-3 rounded-full bg-gray-900 text-white font-semibold">
Contacto
</a> </nav> </div> </header>`;
}, "C:/Users/izaskun/iturribero-abereak/src/components/layouts/SiteHeader.astro", void 0);

const $$SiteFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-slate-100 border-t border-gray-200"> <div class="max-w-7xl mx-auto px-8 py-14"> <div class="grid md:grid-cols-[1.2fr_1fr_1fr] gap-12 md:gap-16 items-start"> <div class="max-w-sm"> <img src="/Iturriberoabereaklogo.svg" alt="Iturribero Abereak" class="h-14 w-auto"> <p class="mt-6 text-base leading-relaxed text-gray-700">
Explotación agroganadera familiar en Durana
          (Arrazua-Ubarrundia, Álava).
</p> <p class="mt-6 text-base text-gray-500">
Campo, ganado y trabajo de temporada.
</p> </div> <div> <p class="text-sm font-semibold text-gray-900 uppercase tracking-[0.18em]">
Contacto
</p> <div class="mt-6 space-y-4 text-base text-gray-700"> <p>Durana · Arrazua-Ubarrundia · Álava</p> <a href="mailto:info@iturriberoabereak.com" class="block hover:text-gray-900 transition">
info@iturriberoabereak.com
</a> <a href="https://instagram.com/iturriberoabereak" target="_blank" class="inline-flex items-center gap-3 hover:text-gray-900 transition"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"> <path d="M7.75 2h8.5C19.99 2 22 4.01 22 7.75v8.5C22 19.99 19.99 22 16.25 22h-8.5C4.01 22 2 19.99 2 16.25v-8.5C2 4.01 4.01 2 7.75 2zm8.4 2h-8.3A3.85 3.85 0 004 7.85v8.3A3.85 3.85 0 007.85 20h8.3A3.85 3.85 0 0020 16.15v-8.3A3.85 3.85 0 0016.15 4zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.2-2.3a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path> </svg> <span>Instagram</span> </a> </div> </div> <div> <p class="text-sm font-semibold text-gray-900 uppercase tracking-[0.18em]">
Información
</p> <div class="mt-6 space-y-4 text-base text-gray-700"> <a href="/aviso-legal" class="block hover:text-gray-900 transition">Aviso legal</a> <a href="/privacidad" class="block hover:text-gray-900 transition">Política de privacidad</a> <a href="/politicas-cookies" class="block hover:text-gray-900 transition">Política de cookies</a> </div> </div> </div> </div> <div class="border-t border-gray-200"> <div class="max-w-7xl mx-auto px-8 py-6 text-sm text-gray-500 flex flex-col md:flex-row md:items-center md:justify-between gap-2"> <p>© ${(/* @__PURE__ */ new Date()).getFullYear()} Iturribero Abereak</p> <p>Durana · Arrazua-Ubarrundia · Álava</p> </div> </div> </footer>`;
}, "C:/Users/izaskun/iturribero-abereak/src/components/layouts/SiteFooter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$HeaderScrollScript = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<script>\n  const header = document.getElementById("site-header");\n  const brandText = document.getElementById("brand-text");\n\n  const navQs = document.getElementById("nav-qs");\n  const navGan = document.getElementById("nav-gan");\n  const navAgr = document.getElementById("nav-agr");\n  const navContact = document.getElementById("nav-contact");\n\n  const mobileMenuButton = document.getElementById("mobile-menu-button");\n  const mobileMenu = document.getElementById("mobile-menu");\n  const iconMenu = document.getElementById("icon-menu");\n  const iconClose = document.getElementById("icon-close");\n\n  const isHome =\n    window.location.pathname === "/" ||\n    window.location.pathname === "/index.html";\n\n  const THRESHOLD = 12;\n  let mobileOpen = false;\n\n  function openMobileMenu() {\n    if (!mobileMenu || !mobileMenuButton || !iconMenu || !iconClose) return;\n\n    mobileOpen = true;\n    mobileMenu.classList.remove("hidden");\n    iconMenu.classList.add("hidden");\n    iconClose.classList.remove("hidden");\n    mobileMenuButton.setAttribute("aria-expanded", "true");\n  }\n\n  function closeMobileMenu() {\n    if (!mobileMenu || !mobileMenuButton || !iconMenu || !iconClose) return;\n\n    mobileOpen = false;\n    mobileMenu.classList.add("hidden");\n    iconMenu.classList.remove("hidden");\n    iconClose.classList.add("hidden");\n    mobileMenuButton.setAttribute("aria-expanded", "false");\n  }\n\n  function setTransparent() {\n    if (!header || !brandText) return;\n\n    header.className =\n      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-b from-black/35 to-transparent";\n\n    brandText.className = "font-semibold text-lg tracking-tight text-white";\n\n    if (navQs) navQs.className = "hover:underline underline-offset-4 text-white";\n    if (navGan) navGan.className = "hover:underline underline-offset-4 text-white";\n    if (navAgr) navAgr.className = "hover:underline underline-offset-4 text-white";\n\n    if (navContact) {\n      navContact.className =\n        "inline-flex items-center justify-center px-5 py-2 rounded-full font-semibold transition bg-white/15 text-white border border-white/25 hover:bg-white/25";\n    }\n\n    if (mobileMenuButton) {\n      mobileMenuButton.className =\n        "inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20";\n    }\n  }\n\n  function setSolid() {\n    if (!header || !brandText) return;\n\n    header.className =\n      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur shadow-sm";\n\n    brandText.className = "font-semibold text-lg tracking-tight text-gray-900";\n\n    if (navQs) navQs.className = "hover:underline underline-offset-4 text-gray-700";\n    if (navGan) navGan.className = "hover:underline underline-offset-4 text-gray-700";\n    if (navAgr) navAgr.className = "hover:underline underline-offset-4 text-gray-700";\n\n    if (navContact) {\n      navContact.className =\n        "inline-flex items-center justify-center px-5 py-2 rounded-full font-semibold transition bg-gray-900 text-white hover:bg-gray-800";\n    }\n\n    if (mobileMenuButton) {\n      mobileMenuButton.className =\n        "inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-900 transition hover:bg-gray-50";\n    }\n  }\n\n  function applyModeFromScroll() {\n    if (!isHome) {\n      setSolid();\n      return;\n    }\n\n    const scrollTop = window.scrollY || window.pageYOffset || 0;\n\n    if (scrollTop > THRESHOLD) {\n      setSolid();\n    } else {\n      setTransparent();\n    }\n  }\n\n  function handleScroll() {\n    window.requestAnimationFrame(applyModeFromScroll);\n  }\n\n  mobileMenuButton?.addEventListener("click", () => {\n    if (mobileOpen) closeMobileMenu();\n    else openMobileMenu();\n  });\n\n  window.addEventListener("scroll", handleScroll, { passive: true });\n  window.addEventListener("load", applyModeFromScroll);\n  window.addEventListener("resize", applyModeFromScroll);\n\n  applyModeFromScroll();\n<\/script> <!-- Menu hamburguesa mobile --><script>\n  if (!window.__iturriberoMobileMenuInit) {\n    window.__iturriberoMobileMenuInit = true;\n\n    const mobileMenuButton = document.getElementById("mobile-menu-button");\n    const mobileMenu = document.getElementById("mobile-menu");\n    const iconMenu = document.getElementById("icon-menu");\n    const iconClose = document.getElementById("icon-close");\n\n    mobileMenuButton?.addEventListener("click", () => {\n      if (!mobileMenu || !iconMenu || !iconClose || !(mobileMenuButton instanceof HTMLButtonElement)) return;\n\n      const isHidden = mobileMenu.classList.contains("hidden");\n\n      if (isHidden) {\n        mobileMenu.classList.remove("hidden");\n        iconMenu.classList.add("hidden");\n        iconClose.classList.remove("hidden");\n        mobileMenuButton.setAttribute("aria-expanded", "true");\n      } else {\n        mobileMenu.classList.add("hidden");\n        iconMenu.classList.remove("hidden");\n        iconClose.classList.add("hidden");\n        mobileMenuButton.setAttribute("aria-expanded", "false");\n      }\n    });\n  }\n<\/script>'])));
}, "C:/Users/izaskun/iturribero-abereak/src/components/layouts/HeaderScrollScript.astro", void 0);

const $$Astro = createAstro("https://iturriberoabereak.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const pageTitle = Astro2.props.title ?? "Iturribero Abereak";
  const pageDescription = Astro2.props.description ?? "Explotaci\xF3n agroganadera familiar en Durana (Arrazua-Ubarrundia, \xC1lava). Vacas de carne y cultivos cerealistas.";
  const pageImage = Astro2.props.image ?? "/hero-colza.jpg";
  const canonicalUrl = Astro2.props.canonical ?? Astro2.url.href;
  return renderTemplate`<html lang="es"> <head>${renderComponent($$result, "SeoHead", $$SeoHead, { "title": pageTitle, "description": pageDescription, "image": pageImage, "canonical": canonicalUrl })}${renderHead()}</head> <body class="bg-gray-50 text-gray-900 antialiased"> <!-- Google Tag Manager (noscript) --> <noscript> <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NHDHMVVK" height="0" width="0" style="display:none;visibility:hidden"></iframe> </noscript> <!-- End Google Tag Manager --> ${renderComponent($$result, "SiteHeader", $$SiteHeader, {})} <main class="18"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "SiteFooter", $$SiteFooter, {})} ${renderComponent($$result, "HeaderScrollScript", $$HeaderScrollScript, {})} </body></html>`;
}, "C:/Users/izaskun/iturribero-abereak/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
