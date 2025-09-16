import { Outlet, ScrollRestoration } from "react-router-dom";
import { NavLayout } from "./NavLayout";
import FooterLayout from "./FooterLayout";

export function RootLayout() {
  return (
    <div className="relative">
      <ScrollRestoration />
      <div id="home"></div>
      <NavLayout />
      <Outlet />
      <FooterLayout />
    </div>
  );
}
