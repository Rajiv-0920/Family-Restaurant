import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Logo = () => {
  return (
    <Link to="/" className="logo flex gap-5">
      <div className="logo-img w-[36px] h-[40px] lg:w-[65px] lg:h-[72px]">
        <img src={logo} alt="" className="w-full h-full object-cover" />
      </div>
      <span className="text:xl lg:text-2xl font-bold leading-5 lg:leading-8">
        <span className="khai-text">Khai</span> Khai Family <br />
        Restaurant
      </span>
    </Link>
  );
};

export default Logo;
