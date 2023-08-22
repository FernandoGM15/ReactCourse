export interface AppLinksI {
  path: string;
  label: string;
}
export const APP_LINKS: AppLinksI[] = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/about-us",
    label: "About us",
  },
  {
    path: "/shop",
    label: "Shop",
  },
  {
    path: "/blog",
    label: "Blog",
  },
];

const API_URL = "http://127.0.0.1:1337";

export const ENDPOINTS = {
  guitars: `${API_URL}/guitars?populate=image`,
  blog: `${API_URL}/blog?populate=image`,
};
