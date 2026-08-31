export type PageId = 'utama' | 'lokasi' | 'tentatif' | 'rsvp' | 'ucapan';

export interface AppRoute {
  id: PageId;
  path: string;
  title: string;
}

export const APP_ROUTES: AppRoute[] = [
  { id: 'utama', path: '/', title: 'Alyea & Amirul | Walimatulurus' },
  { id: 'lokasi', path: '/lokasi', title: 'Lokasi Majlis | Alyea & Amirul' },
  { id: 'tentatif', path: '/tentatif', title: 'Tentatif Majlis | Alyea & Amirul' },
  { id: 'rsvp', path: '/rsvp', title: 'RSVP | Alyea & Amirul' },
  { id: 'ucapan', path: '/ucapan', title: 'Ucapan Tetamu | Alyea & Amirul' },
];

const routeById = new Map(APP_ROUTES.map((route) => [route.id, route]));

export const getRoute = (page: PageId) => routeById.get(page) ?? APP_ROUTES[0];

export const getPageFromPath = (pathname: string): PageId => {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';
  const directMatch = APP_ROUTES.find((route) => route.path === normalizedPath);

  if (directMatch) return directMatch.id;

  // Supports deployments under a subdirectory, for example /JomKahwin/lokasi.
  const finalSegment = normalizedPath.split('/').filter(Boolean).at(-1);
  const nestedMatch = APP_ROUTES.find((route) => route.id === finalSegment);

  return nestedMatch?.id ?? 'utama';
};

export const getRouteHref = (page: PageId) => {
  const query = typeof window === 'undefined' ? '' : window.location.search;
  return `${getRoute(page).path}${query}`;
};
