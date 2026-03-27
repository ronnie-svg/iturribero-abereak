import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BhaBOUv-.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_lGjbYyOn.mjs';
export { renderers } from '../renderers.mjs';

const $$PoliticasCookies = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pol\xEDtica de cookies | Iturribero Abereak", "description": "Informaci\xF3n sobre el uso de cookies en la web de Iturribero Abereak." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-4xl mx-auto px-6 py-16"> <h1 class="text-3xl md:text-4xl font-semibold text-gray-900">
Política de cookies
</h1> <p class="mt-6 text-gray-600 leading-relaxed">
En esta web utilizamos cookies propias y de terceros para garantizar el funcionamiento del sitio,
      mejorar la experiencia de navegación y analizar el uso de la página.
</p> <h2 class="mt-10 text-xl font-semibold text-gray-900">
¿Qué son las cookies?
</h2> <p class="mt-3 text-gray-600 leading-relaxed">
Las cookies son pequeños archivos que se almacenan en el dispositivo del usuario al visitar una página web.
      Permiten, entre otras cosas, recordar preferencias, facilitar la navegación y obtener información estadística.
</p> <h2 class="mt-10 text-xl font-semibold text-gray-900">
Tipos de cookies utilizadas
</h2> <ul class="mt-4 space-y-3 text-gray-600"> <li><strong>Cookies técnicas o necesarias:</strong> imprescindibles para el funcionamiento básico de la web.</li> <li><strong>Cookies analíticas:</strong> permiten medir y analizar el uso de la web mediante herramientas como Google Analytics, siempre que el usuario haya prestado su consentimiento.</li> </ul> <h2 class="mt-10 text-xl font-semibold text-gray-900">
Base legal y consentimiento
</h2> <p class="mt-3 text-gray-600 leading-relaxed">
Las cookies técnicas se utilizan por ser necesarias para el funcionamiento del sitio. Las cookies analíticas
      solo se activan cuando el usuario las acepta expresamente a través del banner de cookies.
</p> <h2 class="mt-10 text-xl font-semibold text-gray-900">
Gestión de cookies
</h2> <p class="mt-3 text-gray-600 leading-relaxed">
El usuario puede aceptar, rechazar o configurar el uso de cookies desde el panel de configuración mostrado al acceder a la web.
      También puede eliminarlas o bloquearlas desde la configuración de su navegador.
</p> <h2 class="mt-10 text-xl font-semibold text-gray-900">
Cookies de terceros
</h2> <p class="mt-3 text-gray-600 leading-relaxed">
Esta web puede utilizar servicios de terceros, como Google Analytics, para obtener estadísticas de uso.
      Estos servicios pueden instalar cookies sujetas a sus propias políticas de privacidad y cookies.
</p> <h2 class="mt-10 text-xl font-semibold text-gray-900">
Actualizaciones de esta política
</h2> <p class="mt-3 text-gray-600 leading-relaxed">
Esta política de cookies puede actualizarse cuando cambien los criterios legales, técnicos o los servicios utilizados en la web.
</p> </section> ` })}`;
}, "C:/Users/izaskun/iturribero-abereak/src/pages/politicas-cookies.astro", void 0);

const $$file = "C:/Users/izaskun/iturribero-abereak/src/pages/politicas-cookies.astro";
const $$url = "/politicas-cookies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PoliticasCookies,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
