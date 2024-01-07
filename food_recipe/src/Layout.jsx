import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { useDispatch } from "react-redux";
import { getting } from "./store/recipesSlice";

const Layout = () => {
  const [search, setsearch] = useState("");
  //   const [datas, setdatas] = useState(null);

  const dispatch = useDispatch();

  const fetching = async () => {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  };

  const gettingi = async (e) => {
    if (e.key === "Enter") {
      console.log(search);
      //   function call to get all the recipe
      const data = await fetching();
      if (data) {
        dispatch(getting(data));
      }
    }
  };
  return (
    <div className="w-[100vw] h-[100vh] ">
      <Navbar search={search} setsearch={setsearch} getting={gettingi} />

      <Outlet />
    </div>
  );
};

export default Layout;
