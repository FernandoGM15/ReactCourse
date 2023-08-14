import { AppLinksI } from "@/app/constants";
import Link from "next/link";

const HeaderLink = ({ label, path }: AppLinksI) => {
  return <Link href={path}>{label}</Link>;
};
export default HeaderLink;
