import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import { APP_LINKS } from "@/app/constants";
import NavLink from "../navlink/navlink";
import styles from "./header.module.css"
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href={APP_LINKS[0].path}>
          <Image src={logo} alt="GuitarLA logo" width={300} height={40} />
        </Link>
        <nav className={styles.navigation}>
          {APP_LINKS.map(link => <NavLink key={link.path} {...link} />)}
        </nav>
      </div>
    </header>
  );
};
export default Header;
