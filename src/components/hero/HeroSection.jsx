import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-section grid grid-cols-1 lg:grid-cols-2 lg:order-1 lg:my-20">
      <div className="hero-content order-2">
        <h2 className="text-[0.575rem] lg:text-[0.875rem] tracking-[2px] lg:tracking-[4px]">
          Reserve Your Spot Now!
        </h2>
        <h1 className="text-7xl lg:text-8xl">
          Taste of <span className="primary">India</span>
        </h1>
        <p className="text-base lg:text-xl font-light mt-6 leading-7 lg:leading-9">
          Step into the heart of{" "}
          <span className="primary-text">KhaiKhai Family Restaurant</span>, your
          go-to family restaurant! From classic comfort foods to a warm,
          inviting vibe, we're here to make every meal a special occasion for
          you and your family.
        </p>
        <Link
          to={"menu"}
          className="btn w-fit flex items-center gap-2 px-5 md:px-8 py-2 rounded-md transition mt-15 lg:mt-25"
        >
          View Menu
        </Link>
      </div>
      <div className="hero-img order-1 lg:order-2">
        <img
          src={
            "https://cdn.jsdelivr.net/gh/Rajiv-0920/Family-Restaurant@main/src/assets/hero-img.svg"
          }
          alt=""
          className="-z-1"
        />
      </div>
    </div>
  );
};

export default HeroSection;
