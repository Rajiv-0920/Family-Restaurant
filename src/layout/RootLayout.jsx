import { Outlet, ScrollRestoration } from "react-router-dom";
import { NavLayout } from "./NavLayout";
import FooterLayout from "./FooterLayout";
import GoToTop from "../components/GoToTop";

export function RootLayout() {
  return (
    <div className="relative">
      <ScrollRestoration />
      <GoToTop />
      <div id="home"></div>
      <NavLayout />
      <Outlet />
      <FooterLayout />
    </div>
  );
}
