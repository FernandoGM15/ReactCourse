import { Metadata } from "next";

interface LayoutPropsI {
  children: React.ReactNode;
}

/** @description Metadata for the SEO */
export const metadata: Metadata = {
  title: "GuitarLA - About us",
  description: "About us, GuitarLA, music store",
};

const AboutUsLayout = ({ children }: LayoutPropsI) => {
  return (
    <>
      <h1>From About us layout</h1>
      {children}
    </>
  );
};
export default AboutUsLayout;
