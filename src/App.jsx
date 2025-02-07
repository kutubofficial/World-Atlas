import React from "react";
import { createBrowserRouter, HashRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Layout from "./components/UI/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Country from "./pages/Country";
import ErrorPage from "./pages/ErrorPage";

// Create a browser-based router instance
export const myrouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contacts",
          element: <Contacts />,
        },
        {
          path: "country",
          element: <Country />,
        },
      ],
    },
  ],
  {
    basename: "/World-Atlas",
    future: {
      v7_relativeSplatPath: true,
    },
  }
);
function App() {
  return (
    <HashRouter>
      <Layout>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/country" element={<Country />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
