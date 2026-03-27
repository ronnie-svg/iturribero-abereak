import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_BhaBOUv-.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_azQ5zZex.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/izaskun/iturribero-abereak/","cacheDir":"file:///C:/Users/izaskun/iturribero-abereak/node_modules/.astro/","outDir":"file:///C:/Users/izaskun/iturribero-abereak/dist/","srcDir":"file:///C:/Users/izaskun/iturribero-abereak/src/","publicDir":"file:///C:/Users/izaskun/iturribero-abereak/public/","buildClientDir":"file:///C:/Users/izaskun/iturribero-abereak/dist/client/","buildServerDir":"file:///C:/Users/izaskun/iturribero-abereak/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/agricultura.B4e0o6Bb.css"}],"routeData":{"route":"/agricultura","isIndex":false,"type":"page","pattern":"^\\/agricultura\\/?$","segments":[[{"content":"agricultura","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/agricultura.astro","pathname":"/agricultura","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/agricultura.B4e0o6Bb.css"}],"routeData":{"route":"/aviso-legal","isIndex":false,"type":"page","pattern":"^\\/aviso-legal\\/?$","segments":[[{"content":"aviso-legal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/aviso-legal.astro","pathname":"/aviso-legal","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/agricultura.B4e0o6Bb.css"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/agricultura.B4e0o6Bb.css"}],"routeData":{"route":"/ganaderia","isIndex":false,"type":"page","pattern":"^\\/ganaderia\\/?$","segments":[[{"content":"ganaderia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ganaderia.astro","pathname":"/ganaderia","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/agricultura.B4e0o6Bb.css"}],"routeData":{"route":"/politicas-cookies","isIndex":false,"type":"page","pattern":"^\\/politicas-cookies\\/?$","segments":[[{"content":"politicas-cookies","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/politicas-cookies.astro","pathname":"/politicas-cookies","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/agricultura.B4e0o6Bb.css"}],"routeData":{"route":"/privacidad","isIndex":false,"type":"page","pattern":"^\\/privacidad\\/?$","segments":[[{"content":"privacidad","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacidad.astro","pathname":"/privacidad","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/agricultura.B4e0o6Bb.css"},{"type":"inline","content":".reveal-card[data-astro-cid-5myoeoiq]{position:absolute;bottom:-4rem;width:min(100%,28rem);background:#ffffffbf;backdrop-filter:blur(14px);border-radius:1.5rem;padding:1.75rem;border:1px solid rgba(255,255,255,.4);box-shadow:0 20px 50px #0000001f;opacity:0;transition:all .7s cubic-bezier(.22,1,.36,1)}.reveal-card--right[data-astro-cid-5myoeoiq]{right:5rem;transform:translate(110px) translateY(50px)}.reveal-card--left[data-astro-cid-5myoeoiq]{left:5rem;transform:translate(-110px) translateY(50px)}.is-visible[data-astro-cid-5myoeoiq] .reveal-card[data-astro-cid-5myoeoiq]{opacity:1;transform:translate(0) translateY(0)}.eyebrow[data-astro-cid-5myoeoiq]{font-size:.75rem;letter-spacing:.35em;text-transform:uppercase;color:#000;margin-bottom:.6rem}.title[data-astro-cid-5myoeoiq]{font-size:clamp(1.6rem,2.8vw,2.2rem);font-weight:600;line-height:1.05;color:#111827}.title[data-astro-cid-5myoeoiq] span[data-astro-cid-5myoeoiq]{display:block}.text[data-astro-cid-5myoeoiq]{margin-top:.9rem;color:#4b5563;line-height:1.6;font-size:.9rem}@media(max-width:768px){.reveal-card[data-astro-cid-5myoeoiq]{position:relative;bottom:auto;left:auto;right:auto;transform:translateY(30px);margin-top:-3.5rem}.is-visible[data-astro-cid-5myoeoiq] .reveal-card[data-astro-cid-5myoeoiq]{transform:translateY(0)}}.generation-image[data-astro-cid-5ufl3xwl]{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transform:scale(1.04);transition:opacity .7s ease,transform .9s ease;pointer-events:none}.generation-image[data-astro-cid-5ufl3xwl].is-active{opacity:1;transform:scale(1)}.generation-indicators[data-astro-cid-5ufl3xwl]{display:flex;gap:.4rem;margin-bottom:2rem;flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch}.generation-indicator[data-astro-cid-5ufl3xwl]{display:inline-flex;align-items:center;gap:.3rem;padding:.25rem .5rem .25rem .3rem;border-radius:999px;border:1px solid rgba(255,255,255,.12);background:transparent;color:#fff9;transition:all .22s ease;font-size:.78rem;min-width:0}.generation-indicator__number[data-astro-cid-5ufl3xwl]{display:inline-flex;width:1.2rem;height:1.2rem;align-items:center;justify-content:center;border-radius:999px;background:#ffffff14;font-size:.7rem;font-weight:600;min-width:1.2rem}.generation-indicator__label[data-astro-cid-5ufl3xwl]{font-size:.7rem;font-weight:500;letter-spacing:.01em;white-space:nowrap}.generation-indicator[data-astro-cid-5ufl3xwl].is-active{border-color:#ffffff3d;background:#ffffff14;color:#fff}.generation-indicator[data-astro-cid-5ufl3xwl].is-active .generation-indicator__number[data-astro-cid-5ufl3xwl]{background:#fff;color:#111827}.generation-content[data-astro-cid-5ufl3xwl]{display:none;opacity:0;transform:translateY(8px);transition:opacity .35s ease,transform .35s ease}.generation-content[data-astro-cid-5ufl3xwl].is-active{display:block;opacity:1;transform:translateY(0)}.generation-content__eyebrow[data-astro-cid-5ufl3xwl]{margin:0 0 .75rem;color:#ffffff80;font-size:.75rem;text-transform:uppercase;letter-spacing:.35em}.generation-content__title[data-astro-cid-5ufl3xwl]{margin:0;color:#fff;font-size:clamp(1.8rem,3vw,3rem);line-height:1.02;font-weight:600;max-width:14ch;text-wrap:balance}.generation-content__text[data-astro-cid-5ufl3xwl]{margin:1rem 0 0;color:#ffffffa8;line-height:1.7}.generation-content__text--lead[data-astro-cid-5ufl3xwl]{margin-top:1.25rem;color:#ffffffc7;font-size:1rem}.generation-stage__footer[data-astro-cid-5ufl3xwl]{margin-top:2.5rem;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,.1)}.generation-stage__footer-top[data-astro-cid-5ufl3xwl]{display:flex;align-items:center;gap:.75rem;color:#ffffff94;font-size:.75rem;text-transform:uppercase;letter-spacing:.3em}.generation-stage__footer-top[data-astro-cid-5ufl3xwl] span[data-astro-cid-5ufl3xwl]:last-child{display:block;height:1px;flex:1;background:#ffffff1a}.generation-stage__footer[data-astro-cid-5ufl3xwl] p[data-astro-cid-5ufl3xwl]{margin:1rem 0 0;max-width:32rem;color:#ffffff8c;line-height:1.7;font-size:.95rem}\n"}],"routeData":{"route":"/quienes-somos","isIndex":false,"type":"page","pattern":"^\\/quienes-somos\\/?$","segments":[[{"content":"quienes-somos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/quienes-somos.astro","pathname":"/quienes-somos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/servicios","isIndex":false,"type":"page","pattern":"^\\/servicios\\/?$","segments":[[{"content":"servicios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicios.astro","pathname":"/servicios","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/agricultura.B4e0o6Bb.css"},{"type":"external","src":"/_astro/index.DbYdyy0-.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://iturriberoabereak.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/izaskun/iturribero-abereak/src/pages/agricultura.astro",{"propagation":"none","containsHead":true}],["C:/Users/izaskun/iturribero-abereak/src/pages/aviso-legal.astro",{"propagation":"none","containsHead":true}],["C:/Users/izaskun/iturribero-abereak/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["C:/Users/izaskun/iturribero-abereak/src/pages/ganaderia.astro",{"propagation":"none","containsHead":true}],["C:/Users/izaskun/iturribero-abereak/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/izaskun/iturribero-abereak/src/pages/politicas-cookies.astro",{"propagation":"none","containsHead":true}],["C:/Users/izaskun/iturribero-abereak/src/pages/privacidad.astro",{"propagation":"none","containsHead":true}],["C:/Users/izaskun/iturribero-abereak/src/pages/quienes-somos.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/agricultura@_@astro":"pages/agricultura.astro.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/aviso-legal@_@astro":"pages/aviso-legal.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/ganaderia@_@astro":"pages/ganaderia.astro.mjs","\u0000@astro-page:src/pages/politicas-cookies@_@astro":"pages/politicas-cookies.astro.mjs","\u0000@astro-page:src/pages/privacidad@_@astro":"pages/privacidad.astro.mjs","\u0000@astro-page:src/pages/quienes-somos@_@astro":"pages/quienes-somos.astro.mjs","\u0000@astro-page:src/pages/servicios@_@astro":"pages/servicios.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Di7mYnX8.mjs","C:/Users/izaskun/iturribero-abereak/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_3QYEbk_e.mjs","C:/Users/izaskun/iturribero-abereak/src/pages/contacto.astro?astro&type=script&index=0&lang.ts":"_astro/contacto.astro_astro_type_script_index_0_lang.rvT-6XEw.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/izaskun/iturribero-abereak/src/pages/contacto.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"contact-form\"),e=document.getElementById(\"form-status\"),o=document.getElementById(\"contact-submit\");t?.addEventListener(\"submit\",async a=>{if(a.preventDefault(),!e||!o||!(t instanceof HTMLFormElement))return;e.textContent=\"Enviando mensaje...\",o.setAttribute(\"disabled\",\"disabled\");const r=new FormData(t),s=Object.fromEntries(r.entries());try{const n=await fetch(\"/api/contact\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(s)}),i=await n.json();if(!n.ok)throw new Error(i?.error||\"Error al enviar el mensaje.\");e.textContent=\"Mensaje enviado correctamente.\",t.reset()}catch{e.textContent=\"No se pudo enviar el mensaje. Inténtalo de nuevo.\"}finally{o.removeAttribute(\"disabled\")}});"]],"assets":["/_astro/hero-colza.D24hTqtS.jpg","/_astro/cebada.3w56qiAB.jpg","/_astro/vacas.CKTapxEn.jpg","/_astro/vaca_primer-plano.C8TTObPG.jpg","/_astro/tierra.DDldhFSL.jpg","/_astro/agricultura.B4e0o6Bb.css","/_astro/index.DbYdyy0-.css","/asturiana.jpg","/camino.jpg","/cebada.jpg","/deutz-2.jpg","/deutz.jpg","/favicon.ico","/favicon.svg","/girasol.jpg","/hero-colza.jpg","/Iturriberoabereaklogo.svg","/mcormick.jpg","/mcormick2.jpg","/monte.jpg","/monte_2.jpg","/terneros.JPG","/tierra.jpg","/toro.jpg","/txabola.jpg","/vacas.jpg","/vaca_2.jpg","/vaca_primer-plano.jpg","/reels/cosechadora-remolque.mp4","/reels/cosechando.mp4"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"hRT6dGstUHMXG5LEuhuogfrb0vqqrI2zXFkAZSuBUrQ="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
