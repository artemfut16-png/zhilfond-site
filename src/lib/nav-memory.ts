const HUB_KEY = "zf-last-hub";
const HUBS = ["/", "/catalog"];

function scrollKey(pathname: string) {
  return `zf-scroll:${pathname}`;
}

export function rememberHub(pathname: string) {
  if (HUBS.includes(pathname)) {
    sessionStorage.setItem(HUB_KEY, pathname);
  }
}

export function getLastHub(): string {
  return sessionStorage.getItem(HUB_KEY) || "/";
}

export function saveScroll(pathname: string, y: number) {
  sessionStorage.setItem(scrollKey(pathname), String(y));
}

export function readScroll(pathname: string): number | null {
  const value = sessionStorage.getItem(scrollKey(pathname));
  return value ? Number(value) : null;
}
