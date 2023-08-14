import { ParentPropsI } from "@/interfaces/parent-props.interfaces";
import { Metadata } from "next";

/** @description Metadata for the SEO */
export const metadata: Metadata = {
  title: "GuitarLA - About us",
  description: "About us, GuitarLA, music store",
};

const AboutUsLayout = ({ children }: ParentPropsI) => {
  return (
    <>
      {children}
    </>
  );
};
export default AboutUsLayout;
