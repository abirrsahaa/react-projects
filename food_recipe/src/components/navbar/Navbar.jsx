import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ search, setsearch, getting }) => {
  // here i will be having optimization issues as it will result in multiple render of the navbar
  // as it will have a state which will be having text input and it will be changing on every key stroke

  // so what i can do is the fact is i need the data in the body so let me take the state there and then see
  // what happens and if it works then i will be able to optimize it
  // but in order to do this i need to take it to the root which is again the worst practise
  // as by pushing down the state i will be getting my work done but will cause huge optimization issues

  // this is the thing i need to focus on after building the whole project but for now lets stick to it!

  const list = useSelector((store) => store.fav.all);

  const navitems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Favourites",
      path: "/Favourites",
    },
  ];

  return (
    <header className=" w-full h-24  p-1  block">
      <nav className="w-full h-24 flex justify-between items-center ">
        <div>
          <NavLink to={"/"}>
            <h1>FoodRecipe</h1>
          </NavLink>
        </div>
        <input
          type="search"
          placeholder="Search for a recipe..."
          className="p-2 rounded-3xl w-[35%] h-[50%] shadow-2xl outline-none"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          onKeyDown={getting}
        />
        <ul className="flex gap-2 m-3">
          {navitems.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path} className="flex flex-col">
                {item.title} {item.title === "Favourites" ? list.length : null}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
