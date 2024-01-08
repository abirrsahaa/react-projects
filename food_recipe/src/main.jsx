import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Body/Home.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Recipe from "./components/Body/Recipe.jsx";
import Favourites from "./components/Body/Favourites.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":id",
        element: <Recipe />,
      },
      {
        path: "favourites",
        element: <Favourites />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
