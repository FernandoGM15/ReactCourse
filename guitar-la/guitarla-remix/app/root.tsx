import { useEffect, useState } from "react";
import type { LinksFunction } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  LiveReload,
  useRouteError,
  isRouteErrorResponse,
  Link,
} from "@remix-run/react";
import styles from "~/styles/index.css";
import Header from "~/components/header";
import Footer from "~/components/footer";

interface LayoutProps {
  children: React.ReactNode;
}

export interface ContextPropsI {
  kart: GuitarContextI[];
  addToKart: (guitar: GuitarContextI) => void;
  updateQuantity: (id: number, newQuantity: number) => void;
  removeGuitar: (id: number) => void;
}
export interface GuitarContextI {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}
/**
 * @description Meta function for the root route, helper for the SEO.
 */
export const meta: V2_MetaFunction = () => {
  return [
    { charSet: "utf-8" },
    { title: "GuitarLA - Remix" },
    { viewport: "width=device-width, initial-scale=1.0" },
  ];
};

/**
 * @description Links function to load the style file.
 */
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap",
    },
  ];
};

/**
 * @description Layout main component
 */
const Document = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

/**
 * @description App component, the root of the application.
 */
const App = () => {
  const lsKart: GuitarContextI[] =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("kart") ?? "[]")
      : [];

  const [kart, setKart] = useState<GuitarContextI[]>(lsKart);

  useEffect(() => {
    localStorage.setItem("kart", JSON.stringify(kart));
  }, [kart]);

  /**
   * @description Add guitar to the kart passed to context.
   * @param guitar
   */
  const addToKart = (guitar: GuitarContextI) => {
    if (kart.some((guitarState) => guitarState.id === guitar.id)) {
      const updatedKart = kart.map((guitarState) => {
        if (guitarState.id === guitar.id) {
          guitarState.quantity = guitar.quantity;
        }
        return guitarState;
      });
      setKart(updatedKart);
      return;
    }
    setKart([...kart, guitar]);
  };

  /**
   * @description Update the quantity of the guitar passed in context.
   * @param guitar
   */
  const updateQuantity = (id: number, newQuantity: number) => {
    const updateKart = kart.map((guitarState) => {
      if (guitarState.id === id) {
        guitarState.quantity = newQuantity;
      }
      return guitarState;
    });
    setKart(updateKart);
  };

  /**
   * @description Remove the guitar passed in context.
   * @param guitar
   */
  const removeGuitar = (id: number) => {
    const removeKart = kart.filter((guitarState) => guitarState.id !== id);
    setKart(removeKart);
  };

  return (
    <Document>
      <Outlet
        context={{
          kart,
          addToKart,
          updateQuantity,
          removeGuitar,
        }}
      />
    </Document>
  );
};

export default App;

/**
 * @description Error handler
 */

export const ErrorBoundary = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <p className="error">
          {error.status} - {error.data}
        </p>
        <Link className="error-link" to="/">
          {" "}
          Maybe you should back?
        </Link>
      </Document>
    );
  }
  let errorMessage = "Unknown error";
  return errorMessage;
};
