import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, d as addAttribute } from '../chunks/astro/server_BhaBOUv-.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_lGjbYyOn.mjs';
/* empty css                                       */
import { $ as $$Image } from '../chunks/_astro_assets_DjbPsrh2.mjs';
import 'clsx';
/* empty css                                 */
import { v as vacas } from '../chunks/vacas_D_lDCK28.mjs';
export { renderers } from '../renderers.mjs';

const hero = new Proxy({"src":"/_astro/hero-colza.D24hTqtS.jpg","width":1024,"height":683,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/izaskun/iturribero-abereak/src/assets/agricultura/hero-colza.jpg";
							}
							
							return target[name];
						}
					});

const $$Herohome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-screen -mt-16 pt-16 md:mt-0 md:pt-0 overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": hero, "alt": "Explotaci\xF3n agroganadera en Durana, \xC1lava", "class": "absolute inset-0 w-full h-full object-cover", "format": "webp", "sizes": "100vw", "loading": "eager", "priority": true })} <!-- Solo una capa muy suave general --> <div class="absolute inset-0 bg-black/10"></div> <!-- Refuerzo solo arriba para que el menú se lea --> <div class="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/45 to-transparent"></div> <div class="relative z-10 flex min-h-screen items-center"> <div class="max-w-7xl mx-auto w-full px-8"> <div class="max-w-2xl text-white"> <p class="eyebrow mb-5">
Iturribero Abereak
</p> <h1 class="text-4xl md:text-6xl font-semibold leading-tight">
Ganadería y agricultura
<br>
en Durana, Álava
</h1> <p class="mt-6 text-lg text-white/90 leading-relaxed">
Explotación agroganadera familiar centrada en el cuidado del ganado,
          el trabajo de la tierra y el respeto por cada campaña.
</p> <div class="mt-8 flex flex-wrap gap-4"> <a href="/ganaderia" class="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-gray-900 text-sm font-semibold hover:bg-gray-200 transition">
Ganadería →
</a> <a href="/agricultura" class="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white text-white text-sm font-semibold hover:bg-white hover:text-gray-900 transition">
Agricultura →
</a> </div> </div> </div> </div> </section>`;
}, "C:/Users/izaskun/iturribero-abereak/src/components/sections/home/Herohome.astro", void 0);

const $$ManifestoSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-slate-50 py-24 border-t border-gray-200"> <div class="max-w-7xl mx-auto px-8"> <p class="eyebrow mb-5">
Nuestro enfoque
</p> <h2 class="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900">
Trabajamos el campo con respeto por los animales,
      cuidado por la tierra y compromiso con cada campaña.
</h2> </div> </section>`;
}, "C:/Users/izaskun/iturribero-abereak/src/components/sections/home/ManifestoSection.astro", void 0);

const cebadaBg = new Proxy({"src":"/_astro/cebada.3w56qiAB.jpg","width":4608,"height":2112,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/izaskun/iturribero-abereak/src/assets/agricultura/cebada.jpg";
							}
							
							return target[name];
						}
					});

const $$HomeAreasSection = createComponent(($$result, $$props, $$slots) => {
  const items = [
    {
      title: "Qui\xE9nes somos",
      href: "/quienes-somos",
      cta: "Conocer m\xE1s",
      description: "Una historia familiar ligada al campo, al cuidado de los animales y al trabajo constante."
    },
    {
      title: "Ganader\xEDa",
      href: "/ganaderia",
      cta: "Conocer m\xE1s",
      description: "Cr\xEDa de vacuno de carne con atenci\xF3n al bienestar animal y al manejo responsable."
    },
    {
      title: "Agricultura",
      href: "/agricultura",
      cta: "Conocer m\xE1s",
      description: "Cultivos cerealistas y forrajeros trabajados con respeto por la tierra y cada campa\xF1a."
    },
    {
      title: "Contacto",
      href: "/contacto",
      cta: "Conocer m\xE1s",
      description: "Estamos en Durana, \xC1lava. Si quieres saber m\xE1s, estaremos encantados de hablar contigo."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="home-areas" aria-label="Áreas principales" data-astro-cid-xoe6mqtq> ${renderComponent($$result, "Image", $$Image, { "src": cebadaBg, "alt": "Paisaje agr\xEDcola de Iturribero Abereak", "class": "home-areas__bg", "format": "webp", "sizes": "100vw", "loading": "eager", "priority": true, "data-astro-cid-xoe6mqtq": true })} <div class="home-areas__overlay" data-astro-cid-xoe6mqtq></div> <div class="home-areas__links" data-astro-cid-xoe6mqtq> ${items.map((item) => renderTemplate`<a class="home-areas__link"${addAttribute(item.href, "href")} data-astro-cid-xoe6mqtq> <div class="home-areas__shade" data-astro-cid-xoe6mqtq></div> <div class="home-areas__inner" data-astro-cid-xoe6mqtq> <div class="home-areas__content" data-astro-cid-xoe6mqtq> <h3 data-astro-cid-xoe6mqtq>${item.title}</h3> <div class="home-areas__reveal" data-astro-cid-xoe6mqtq> <p data-astro-cid-xoe6mqtq>${item.description}</p> </div> <span class="home-areas__cta" data-astro-cid-xoe6mqtq> <span class="home-areas__cta-text" data-astro-cid-xoe6mqtq>${item.cta}</span> <svg viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-xoe6mqtq> <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xoe6mqtq></path> </svg> </span> </div> </div> </a>`)} </div> </section> `;
}, "C:/Users/izaskun/iturribero-abereak/src/components/sections/home/HomeAreasSection.astro", void 0);

const vaca = new Proxy({"src":"/_astro/vaca_primer-plano.C8TTObPG.jpg","width":4608,"height":3456,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/izaskun/iturribero-abereak/src/assets/ganaderia/vaca_primer-plano.jpg";
							}
							
							return target[name];
						}
					});

const tierra = new Proxy({"src":"/_astro/tierra.DDldhFSL.jpg","width":4608,"height":3456,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/izaskun/iturribero-abereak/src/assets/agricultura/tierra.jpg";
							}
							
							return target[name];
						}
					});

const $$HowWeWorkSection = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    {
      title: "Bienestar animal",
      description: "Manejo responsable y seguimiento continuo del ganado para garantizar su bienestar.",
      tags: "Cuidado \xB7 Rutina \xB7 Calidad",
      image: vaca
    },
    {
      title: "Cuidado del suelo",
      description: "Pr\xE1cticas sostenibles que respetan los ciclos naturales y la fertilidad de la tierra.",
      tags: "Suelo \xB7 Sostenibilidad \xB7 Campa\xF1as",
      image: tierra
    },
    {
      title: "Calidad y transparencia",
      description: "Procesos claros, controlados y en mejora constante para ofrecer confianza.",
      tags: "Claridad \xB7 Control \xB7 Mejora",
      image: vacas
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-white" data-astro-cid-65xzhajr> <div class="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24" data-astro-cid-65xzhajr> <!-- Header --> <header class="mb-14 md:mb-18 max-w-4xl" data-astro-cid-65xzhajr> <p class="eyebrow mb-5" data-astro-cid-65xzhajr>
Nuestra manera de hacer
</p> <h2 class="text-3xl md:text-5xl font-semibold leading-tight text-gray-900" data-astro-cid-65xzhajr>
Menos ruido. Más campo.
</h2> <p class="mt-4 text-base md:text-xl leading-relaxed text-gray-600 max-w-2xl" data-astro-cid-65xzhajr>
Trabajo constante, decisiones responsables y una forma de hacer las cosas
        que se construye cada día, sobre el terreno.
</p> </header> <!-- DESKTOP GRID --> <div class="hidden md:grid grid-cols-3 gap-6 md:gap-8" data-astro-cid-65xzhajr> ${cards.map((card) => renderTemplate`<a class="group relative block min-h-90 overflow-hidden rounded-[1.75rem] no-underline" data-astro-cid-65xzhajr> ${renderComponent($$result, "Image", $$Image, { "src": card.image, "alt": card.title, "class": "absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-[1.04]", "format": "webp", "sizes": "(min-width: 768px) 33vw", "data-astro-cid-65xzhajr": true })} <div class="absolute inset-0 bg-linear-to-t from-black/75 via-black/35 to-black/10 group-hover:from-black/80 group-hover:via-black/40 transition" data-astro-cid-65xzhajr></div> <div class="relative z-10 h-full flex flex-col justify-end p-6 text-white" data-astro-cid-65xzhajr> <h3 class="text-xl md:text-[1.6rem] font-semibold leading-tight" data-astro-cid-65xzhajr> ${card.title} </h3> <p class="mt-3 text-sm text-white/90 max-w-[30ch]" data-astro-cid-65xzhajr> ${card.description} </p> <div class="mt-5 text-xs uppercase tracking-[0.22em] text-white/75" data-astro-cid-65xzhajr> ${card.tags} </div> </div> </a>`)} </div> <!-- MOBILE SLIDER --> <div class="md:hidden -mx-6 px-6 overflow-x-auto no-scrollbar" data-astro-cid-65xzhajr> <div class="flex gap-4 w-max" data-astro-cid-65xzhajr> ${cards.map((card) => renderTemplate`<a class="group relative block w-[80vw] min-w-[80vw] h-90 overflow-hidden rounded-[1.75rem]" data-astro-cid-65xzhajr> ${renderComponent($$result, "Image", $$Image, { "src": card.image, "alt": card.title, "class": "absolute inset-0 w-full h-full object-cover", "format": "webp", "sizes": "80vw", "loading": "lazy", "data-astro-cid-65xzhajr": true })} <div class="absolute inset-0 bg-linear-to-t from-black/75 via-black/35 to-black/10" data-astro-cid-65xzhajr></div> <div class="relative z-10 h-full flex flex-col justify-end p-6 text-white" data-astro-cid-65xzhajr> <h3 class="text-xl font-semibold" data-astro-cid-65xzhajr> ${card.title} </h3> <p class="mt-2 text-sm text-white/90" data-astro-cid-65xzhajr> ${card.description} </p> <div class="mt-4 text-xs uppercase tracking-[0.22em] text-white/75" data-astro-cid-65xzhajr> ${card.tags} </div> </div> </a>`)} </div> </div> </div> </section> `;
}, "C:/Users/izaskun/iturribero-abereak/src/components/sections/home/HowWeWorkSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Iturribero Abereak | Ganader\xEDa y agricultura en Durana, \xC1lava", "description": "Explotaci\xF3n agroganadera familiar en Durana (Arrazua-Ubarrundia, \xC1lava). Vacas de carne y cultivos cerealistas y forrajeros.", "image": "/hero-colza.jpg" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Herohome", $$Herohome, {})} ${renderComponent($$result2, "ManifestoSection", $$ManifestoSection, {})} ${renderComponent($$result2, "HomeAreasSection", $$HomeAreasSection, {})} ${renderComponent($$result2, "HowWeWorkSection", $$HowWeWorkSection, {})} ` })}`;
}, "C:/Users/izaskun/iturribero-abereak/src/pages/index.astro", void 0);

const $$file = "C:/Users/izaskun/iturribero-abereak/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
