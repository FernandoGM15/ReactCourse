import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import styles from "~/styles/blog.css";


export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};


const Blog = () => {
  
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};
export default Blog;
