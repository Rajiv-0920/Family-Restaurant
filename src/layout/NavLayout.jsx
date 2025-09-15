import { useEffect, useState } from "react";
import menu from "../assets/menu.png";
import Logo from "../components/Logo";
import { Link, NavLink } from "react-router-dom";
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
