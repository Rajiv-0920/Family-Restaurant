import { Outlet } from "react-router-dom";
import { NavLayout } from "./NavLayout";
import FooterLayout from "./FooterLayout";

export function RootLayout() {
  return (
    <>
      <div id="home"></div>
      <NavLayout />
      <Outlet />
      <FooterLayout />
    </>
  );
}
