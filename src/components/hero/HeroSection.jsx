// import { Trans, useTranslation } from "react-i18next";
import heroImg from "../../assets/hero-img.svg";
import "./HeroSection.css";
// import { HighlightedText } from "../HighlightedText";

const HeroSection = () => {
  // const { t } = useTranslation();
  return (
    <div className="hero-section grid grid-cols-1 lg:grid-cols-2 lg:order-1 lg:my-20">
      <div className="hero-content order-2">
        <h2 className="text-[0.575rem] lg:text-[0.875rem] tracking-[2px] lg:tracking-[4px]">
          Reserve Your Spot Now!
        </h2>
        <h1 className="text-7xl lg:text-8xl">
          Taste of <span className="primary">India</span>
          {/* <Trans
            i18nKey="header.slogan"
            components={{ 1: <span className="primary" /> }}
          /> */}
        </h1>
        <p className="text-base lg:text-xl font-light mt-6 leading-7 lg:leading-9">
          Step into the heart of{" "}
          <span className="primary-text">KhaiKhai Family Restaurant</span>, your
          go-to family restaurant! From classic comfort foods to a warm,
          inviting vibe, we're here to make every meal a special occasion for
          you and your family.
        </p>
        <button className="btn mt-15 lg:mt-25">View Menu</button>
      </div>
      <div className="hero-img order-1 lg:order-2">
        <img src={heroImg} alt="" className="-z-1" />
      </div>
    </div>
  );
};

export default HeroSection;
