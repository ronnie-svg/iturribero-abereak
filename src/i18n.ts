export type Locale = "es" | "eu";

export type PageKey =
  | "home"
  | "agriculture"
  | "livestock"
  | "about"
  | "contact";

export const routes: Record<PageKey, Record<Locale, string>> = {
  home: {
    es: "/",
    eu: "/eu/",
  },
  agriculture: {
    es: "/agricultura",
    eu: "/eu/nekazaritza",
  },
  livestock: {
    es: "/ganaderia",
    eu: "/eu/abeltzaintza",
  },
  about: {
    es: "/quienes-somos",
    eu: "/eu/gure-historia",
  },
  contact: {
    es: "/contacto",
    eu: "/eu/kontaktua",
  },
};

export const localeLabels: Record<Locale, string> = {
  es: "ES",
  eu: "EUS",
};

export const localeMeta: Record<Locale, { lang: string; ogLocale: string }> = {
  es: {
    lang: "es",
    ogLocale: "es_ES",
  },
  eu: {
    lang: "eu",
    ogLocale: "eu_ES",
  },
};

export const navigation: Record<
  Locale,
  { about: string; livestock: string; agriculture: string; contact: string }
> = {
  es: {
    about: "Nuestra historia",
    livestock: "Ganadería",
    agriculture: "Agricultura",
    contact: "Contacto",
  },
  eu: {
    about: "Gure historia",
    livestock: "Abeltzaintza",
    agriculture: "Nekazaritza",
    contact: "Kontaktua",
  },
};

export function getLocalizedPath(page: PageKey, locale: Locale) {
  return routes[page][locale];
}

export function getPageKeyFromPath(pathname: string): PageKey | undefined {
  const normalized =
    pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  return (Object.keys(routes) as PageKey[]).find((page) => {
    return Object.values(routes[page]).some((route) => {
      const normalizedRoute =
        route !== "/" && route.endsWith("/") ? route.slice(0, -1) : route;
      return normalized === normalizedRoute;
    });
  });
}

export function getAlternateEntries(
  page: PageKey,
  site = "https://iturriberoabereak.com"
) {
  return {
    es: new URL(routes[page].es, site).toString(),
    eu: new URL(routes[page].eu, site).toString(),
  };
}
