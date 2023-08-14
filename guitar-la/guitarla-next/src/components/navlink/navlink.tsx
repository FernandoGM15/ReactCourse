'use client'
import { AppLinksI } from "@/app/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./navlink.module.css";

const NavLink = ({ label, path }: AppLinksI) => {
  const pathname = usePathname();
  const isActive = pathname === path ? styles.active : '';
  return <Link href={path} className={`${isActive} ${styles.link}`}>{label}</Link>;
};
export default NavLink;
