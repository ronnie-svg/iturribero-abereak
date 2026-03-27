import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_3LzK-wPh.mjs';
import { manifest } from './manifest_Di7mYnX8.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/agricultura.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/aviso-legal.astro.mjs');
const _page4 = () => import('./pages/contacto.astro.mjs');
const _page5 = () => import('./pages/ganaderia.astro.mjs');
const _page6 = () => import('./pages/politicas-cookies.astro.mjs');
const _page7 = () => import('./pages/privacidad.astro.mjs');
const _page8 = () => import('./pages/quienes-somos.astro.mjs');
const _page9 = () => import('./pages/servicios.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/agricultura.astro", _page1],
    ["src/pages/api/contact.ts", _page2],
    ["src/pages/aviso-legal.astro", _page3],
    ["src/pages/contacto.astro", _page4],
    ["src/pages/ganaderia.astro", _page5],
    ["src/pages/politicas-cookies.astro", _page6],
    ["src/pages/privacidad.astro", _page7],
    ["src/pages/quienes-somos.astro", _page8],
    ["src/pages/servicios.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c26cd2a7-2fca-468a-83dd-f59b0147c2f4",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
