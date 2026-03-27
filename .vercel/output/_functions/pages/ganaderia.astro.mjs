import { c as createComponent, m as maybeRenderHead, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_BhaBOUv-.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_lGjbYyOn.mjs';
/* empty css                                       */
import 'clsx';
import { $ as $$Image } from '../chunks/_astro_assets_DjbPsrh2.mjs';
import { v as vacas } from '../chunks/vacas_D_lDCK28.mjs';
export { renderers } from '../renderers.mjs';

const $$GanaderiaHero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative h-[70vh] md:h-[78vh] w-full overflow-hidden"> <img src="/vaca_primer-plano.jpg" alt="Ganadería - Iturribero Abereak" class="absolute inset-0 w-full h-full object-cover"> <div class="absolute inset-0 bg-linear-to-brom-black/60 via-black/35 to-black/15"></div> <div class="relative z-10 h-full flex items-end"> <div class="max-w-7xl mx-auto px-6 md:px-8 pb-14 w-full"> <div class="max-w-2xl text-white"> <p class="eyebrow-light mb-4">Ganadería</p> <h1 class="text-4xl md:text-6xl font-semibold leading-tight">
Vacas de carne.
<br class="hidden md:block">
Cuidado diario y seguimiento.
</h1> <p class="mt-5 text-white/85 text-lg leading-relaxed">
Explotación familiar en Durana (Álava). Manejo responsable,
          bienestar animal y atención al detalle, con el ritmo que marca el campo.
</p> </div> </div> </div> </section>`;
}, "C:/Users/izaskun/iturribero-abereak/src/components/sections/ganaderia/GanaderiaHero.astro", void 0);

const $$GanaderiaIntro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-shell bg-white pt-2"> <div class="section-inner"> <!-- BLOQUE PRINCIPAL --> <div class="relative"> <!-- Imagen --> <div class="relative h-70 md:h-105 rounded-4xl overflow-hidden shadow-xl ring-1 ring-gray-200"> ${renderComponent($$result, "Image", $$Image, { "src": vacas, "alt": "Ganado en Iturribero", "class": "absolute inset-0 w-full h-full object-cover", "format": "webp", "sizes": "100vw", "loading": "lazy" })} <div class="absolute inset-0 bg-linear-to-trom-black/30 via-black/5 to-transparent"></div> </div> <!-- Card superpuesta --> <div class="relative md:absolute md:right-10 md:-bottom-22 z-10 max-w-xxl -mt-8 md:mt-0 rounded-[1.75rem] border border-gray-100 bg-white/95 backdrop-blur-md p-6 md:p-8 shadow-2xl"> <p class="eyebrow mb-4">
Nuestra forma de trabajar
</p> <h2 class="section-title">
Bienestar primero.
<span class="block">Manejo responsable, sin atajos.</span> </h2> <p class="section-copy mt-5 max-w-lg">
Una forma de trabajar basada en el seguimiento diario, la atención al detalle
          y decisiones que se toman con calma, pensando en el animal y en el entorno.
</p> </div> </div> <!-- BLOQUE INFERIOR --> <div class="pt-12 md:pt-24"> <div class="max-w-xl mb-10 border-l-4 border-blue-200 pl-6 bg-blue-50/40 rounded-r-2xl"> <h3 class="title-md text-gray-900">
Estar encima de lo importante
<span class="block">marca la diferencia en el día a día.</span> </h3> <p class="body-copy mt-4">
Observar, anticiparse y cuidar los detalles forma parte de una manera de trabajar
          cercana, constante y conectada con el ritmo real del campo.
</p> </div> <!-- CARDS --> <div class="grid md:grid-cols-3 gap-5 mt-8"> <!-- Card --> <div class="group relative rounded-3xl overflow-hidden bg-gray-900 text-white p-6 transition duration-500 hover:-translate-y-1 hover:shadow-2xl ring-1 ring-gray-800/10"> <div class="absolute inset-0 bg-linear-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div> <p class="font-semibold">
Seguimiento diario
</p> <p class="mt-3 text-white/75">
Observar, controlar y anticiparse forma parte del trabajo diario con el ganado.
</p> </div> <!-- Card --> <div class="group relative rounded-3xl overflow-hidden bg-gray-900 text-white p-6 transition duration-500 hover:-translate-y-1 hover:shadow-2xl ring-1 ring-gray-800/10"> <div class="absolute inset-0 bg-linear-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div> <p class="font-semibold">
Bienestar animal
</p> <p class="mt-3 text-white/75">
El manejo responsable y la atención al detalle marcan la forma de trabajar.
</p> </div> <!-- Card --> <div class="group relative rounded-3xl overflow-hidden bg-gray-900 text-white p-6 transition duration-500 hover:-translate-y-1 hover:shadow-2xl ring-1 ring-gray-800/10"> <div class="absolute inset-0 bg-linear-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div> <p class="font-semibold">
Alimentación conectada
</p> <p class="mt-3 text-white/75">
Parte del alimento procede de nuestros cultivos, manteniendo el ciclo campo–ganado.
</p> </div> </div> </div> </div> </section>`;
}, "C:/Users/izaskun/iturribero-abereak/src/components/sections/ganaderia/GanaderiaIntro.astro", void 0);

const $$GanaderiaVisualCta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-shell bg-white py-2"> <div class="section-inner py-0"> <a href="/contacto" class="group block"> <div class="image-card h-105 border border-gray-200"> <img src="/vaca_2.jpg" alt="Ganado" class="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.05] transition duration-700"> <div class="image-overlay-dark"></div> <!-- Bloque texto --> <div class="absolute bottom-10 left-10 max-w-md text-white"> <p class="eyebrow-light mb-3">
Explotación pequeña
</p> <h3 class="panel-title">
Cercanía y control
</h3> <p class="section-copy-light mt-3">
Un tamaño humano permite estar encima del día a día y trabajar con calma.
</p> <div class="mt-6 inline-link text-white">
Contactar →
</div> </div> </div> </a> </div> </section>`;
}, "C:/Users/izaskun/iturribero-abereak/src/components/sections/ganaderia/GanaderiaVisualCta.astro", void 0);

const $$GanaderiaMediaGallery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-shell bg-white"> <div class="section-inner"> <div class="max-w-2xl"> <p class="eyebrow mb-3">
Campo y trabajo real
</p> <h2 class="section-title">
Día a día en la explotación
</h2> <p class="section-copy mt-4">
Imágenes y vídeos del trabajo de campaña, la maquinaria y el ritmo real del día a día.
</p> </div> <div class="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6"> <video class="rounded-3xl h-64 w-full object-cover bg-black" src="/reels/cosechando.mp4" autoplay muted loop playsinline></video> <video class="rounded-3xl h-64 w-full object-cover bg-black" src="/reels/cosechadora-remolque.mp4" autoplay muted loop playsinline></video> <img src="/mcormick2.jpg" class="rounded-3xl h-64 w-full object-cover"> <img src="/deutz.jpg" class="rounded-3xl h-64 w-full object-cover"> </div> </div> </section>`;
}, "C:/Users/izaskun/iturribero-abereak/src/components/sections/ganaderia/GanaderiaMediaGallery.astro", void 0);

const $$Ganaderia = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ganader\xEDa | Iturribero Abereak", "description": "Ganader\xEDa de vacas de carne en Durana (\xC1lava). Bienestar animal, manejo responsable y seguimiento diario.", "image": "/vaca_primer-plano.jpg" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GanaderiaHero", $$GanaderiaHero, {})} ${renderComponent($$result2, "GanaderiaIntro", $$GanaderiaIntro, {})} ${renderComponent($$result2, "GanaderiaVisualCta", $$GanaderiaVisualCta, {})} ${renderComponent($$result2, "GanaderiaMediaGallery", $$GanaderiaMediaGallery, {})} ` })}`;
}, "C:/Users/izaskun/iturribero-abereak/src/pages/ganaderia.astro", void 0);

const $$file = "C:/Users/izaskun/iturribero-abereak/src/pages/ganaderia.astro";
const $$url = "/ganaderia";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ganaderia,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
