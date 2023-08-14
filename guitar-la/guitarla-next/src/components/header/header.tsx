import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import Link from "next/link";
import { APP_LINKS } from "@/app/constants";
import HeaderLink from "./components/header-link";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Image src={logo} alt="GuitarLA logo" width={300} height={40} />
        <nav>
          { APP_LINKS.map(link => <HeaderLink key={link.path} {...link} />) }
        </nav>
      </div>
    </header>
  );
};
export default Header;
