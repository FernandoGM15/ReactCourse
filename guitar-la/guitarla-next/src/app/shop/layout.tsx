import { ParentPropsI } from "@/interfaces/parent-props.interfaces";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GuitarLA - Virtual shop",
  description: "Virtual shop, guitar selling, musical instruments, GuitarLA",
};

const ShopLayout = ({ children }: ParentPropsI) => {
  return (
    <>
      {children}
    </>
  );
};
export default ShopLayout;
