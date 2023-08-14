import Image from "next/image";
import logo from "../../../../public/images/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Image src={logo} alt="GuitarLA logo" width={300} height={40}/>
      </div>
    </header>
  );
};
export default Header;
