import { Link } from "@remix-run/react";
import Logo from "../../public/images/logo.svg";
import Navigation from "./navigation";

const Header = () => {
  return (
    <header className="header">
      <div className="container bar">
        <Link to="/" className="logo">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
        <Navigation />
      </div>
    </header>
  );
};
export default Header;
