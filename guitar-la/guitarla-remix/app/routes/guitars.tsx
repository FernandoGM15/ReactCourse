import type { LinksFunction } from "@remix-run/react/dist/routeModules";
import { Outlet, useOutletContext } from "@remix-run/react";
import Styles from "~/styles/shop.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: Styles }];
};

const Shop = () => {
  return (
    <main className="container">
      <Outlet context={useOutletContext()} />
    </main>
  );
};
export default Shop;
