import React from "react";
// import Navigation from "./Components/NavBar/Navigation";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "./Components/Home/HomePage";
// import { Router } from "express";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [{ path: "", element: <HomePage /> }],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
