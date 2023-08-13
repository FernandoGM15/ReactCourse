import { Link, NavLink } from "@remix-run/react";
import kart from "../../public/images/kart.png";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about-us">About us</NavLink>
      <NavLink to="/guitars">Guitars</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <Link to="/kart">
        <img src={kart} alt="kart" />
      </Link>
    </div>
  );
};
export default Navigation;
