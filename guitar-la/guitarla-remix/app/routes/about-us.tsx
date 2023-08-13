import type { V2_MetaFunction } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import Image from "../../public/images/nosotros.jpg";
import Styles from "~/styles/about-us.css";

/**
 * @description This is the meta function, rewrites the head info to work only with the about page
 */
export const meta: V2_MetaFunction = () => {
  return [{ title: "GuitarLA - About Us" }];
};

/**
 * @description This is the links function, adds the about-us.css file
 */
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: Styles },
    { rel: "preload", href: Image, as: "image" },
  ];
};

const AboutUs = () => {
  return (
    <main className="container us">
      <h2 className="heading">About us</h2>
      <div className="content">
        <img src={Image} alt="us" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quidem voluptas, quisquam quidem voluptas, quisquam quidem voluptas,
            quisquam quidem voluptas, quisquam quidem voluptas, quisquam quidem
            voluptas, quisquam quidem voluptas, quisquam quidem voluptas,
            quisquam quidem voluptas, quisquam quidem voluptas, quisquam quidem
            voluptas, quisquam quidem voluptas, quisquam quidem
          </p>
        </div>
      </div>
    </main>
  );
};
export default AboutUs;
