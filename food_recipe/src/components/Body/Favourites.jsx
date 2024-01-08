import React from "react";
import { useSelector } from "react-redux";
import Card from "./Cards";

const Favourites = () => {
  var items = useSelector((store) => store.fav.all);

  return items.length >= 1 ? (
    <div className="w-[80%] h-full mx-auto flex flex-wrap gap-5 mt-3">
      {console.log("items", items)}
      {/* {console.log("items[0]", items[0][0])} */}
      {/* <Card data={items[0][0]} /> */}
      {items.length >= 1 &&
        items.map((data, index) => <Card key={index} data={data} />)}
    </div>
  ) : null;
};

export default Favourites;
