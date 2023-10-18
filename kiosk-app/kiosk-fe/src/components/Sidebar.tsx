"use client";
import Image from "next/image";
import Category from "./Category";
import { useContext } from "react";
import KioskContext from "../context/KioskProvider";

const Sidebar = () => {
  const { categories } = useContext(KioskContext);
  return (
    <>
      <Image width={300} height={100} src="img/logo.svg" alt="logo" priority />
      <nav className="mt-10">
        {categories.map((category) => (
          <Category key={category.name} category={category} />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
