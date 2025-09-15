import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layout/RootLayout.jsx";
import HomePage from "../pages/HomePage.jsx";
import MenuPage from "../pages/menuPage/MenuPage.jsx";
// import { NavLayout } from "../layout/NavLayout.jsx";
// import ErrorPage from "../components/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "menu", element: <MenuPage /> },
    ],
  },
]);

export default router;
