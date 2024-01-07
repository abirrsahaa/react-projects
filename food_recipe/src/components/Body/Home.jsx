import React from "react";
import Card from "./Cards";
import { useSelector } from "react-redux";

const Home = () => {
  var items = useSelector((store) => store.recipe.list);

  return items ? (
    <div className="w-[80%] h-full mx-auto flex flex-wrap gap-5 mt-3">
      {console.log("items", items)}
      {/* {console.log("items[0]", items[0][0])} */}
      {/* <Card data={items[0][0]} /> */}
      {items.length >= 1 &&
        items[0].map((data, index) => <Card key={index} data={data} />)}
    </div>
  ) : null;
};

export default Home;
