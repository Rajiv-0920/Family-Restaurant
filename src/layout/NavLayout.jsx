import { useEffect, useState } from "react";
import menu from "../assets/menu.png";
import Logo from "../components/Logo";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
export function NavLayout() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
        setShowMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowMenu(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleToggle() {
    setShowMenu((prev) => !prev);
  }
  return (
    <>
      <div className="container mx-auto p-3">
        <div
          className={showMenu ? `overlay-nav` : null}
          onClick={handleToggle}
        ></div>
        <div className="flex flex-wrap gap-2 md:gap-5 justify-center md:justify-between items-center text-center py-2 rounded-md mb-2">
          <div className="flex gap-2">
            <p className="primary text-sm font-bold animate-pulse">
              Home Delivery Available{" "}
            </p>
            <a
              href={`https://wa.me/+918535809773?text=${encodeURIComponent(
                "Hello Khai Khai Family Restaurant! I'd like to inquire about your services. Please reply with details."
              )}`}
              target="_blank"
              className="btn px-5 rounded-xl hover:underline text-sm"
            >
              Contact Now
            </a>
          </div>
          <div className="flex flex-col gap-2 sm:gap-3">
            <ul className="text-sm sm:text-base space-y-1 flex gap-4">
              <li>
                <a
                  href="https://www.facebook.com/share/1guETBf34R/"
                  target="_blank"
                  className="hover:underline text-xl"
                >
                  <FaFacebook className="hover:fill-[#ff7d29]" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/khaikhai_familyrestaurant?utm_source=qr&igsh=c3pvOG12enQwMzRx"
                  target="_blank"
                  className="hover:underline text-xl"
                >
                  <FaInstagram className="hover:fill-[#ff7d29]" />
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/+918535809773?text=${encodeURIComponent(
                    "Hello Khai Khai Family Restaurant! I'd like to inquire about your services. Please reply with details."
                  )}`}
                  target="_blank"
                  className="hover:underline text-xl"
                >
                  <FaWhatsapp className="hover:fill-[#ff7d29]" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-[75px] mt-1 lg:mt-8 flex justify-between items-center">
          <Logo />
          <img
            src={menu}
            alt="menu"
            className="menu w-6 h-6 lg:w-8 lg:h-8"
            onClick={handleToggle}
          />

          <nav
            className={`nav-links flex items-center ${
              showMenu ? "show-menu gap-5" : "gap-[71px]"
            }`}
          >
            <NavLink
              to={"/"}
              className="nav-link"
              onClick={() => setShowMenu(false)}
            >
              Home
            </NavLink>
            <NavLink
              to={"menu"}
              className="nav-link"
              onClick={() => setShowMenu(false)}
            >
              Menu
            </NavLink>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
