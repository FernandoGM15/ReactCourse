import { ParentPropsI } from "@/interfaces/parent-props.interfaces";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GuitarLA - Blog",
  description: "Music blog, guitar selling, tips, GuitarLA",
};

const BlogLayout = ({ children }: ParentPropsI) => {
  return <div>BlogLayout</div>;
};
export default BlogLayout;
