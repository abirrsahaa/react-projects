import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { remove } from "../../store/favSlice";

import { add } from "../../store/favSlice";
import { useDispatch, useSelector } from "react-redux";

const Recipe = () => {
  const dispatch = useDispatch();
  const list = useSelector((store) => store.fav.all);
  console.log("list in ", list);
  const [recipe, setrecipe] = useState(null);
  const id = useParams();

  const isPresent = list.find((item) => item.id === id.id);
  console.log("isPresent in ", isPresent);

  const newlist = list?.filter((item) => item.id !== id.id);

  console.log(id);
  useEffect(() => {
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id.id}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setrecipe(data.data.recipe);
      });
  }, []);

  const handler = (recipes) => {
    console.log("list", list);
    // list.push(recipes);
    dispatch(add(recipes));
  };

  return (
    <div className="w-[98%] mx-auto h-full  flex justify-center pt-5 gap-2">
      {recipe && console.log(recipe)}
      <div className="w-[48%] h-[55%] shadow-2xl object-cover rounded-xl">
        <img
          className="w-full h-full rounded-xl shadow-2xl"
          src={recipe ? recipe.image_url : null}
        />
      </div>
      <div className="w-[45%] h-[80%]  flex flex-col gap-2">
        <div className="w-full my-2">
          <span className="text-blue-500 font-bold text-sm">
            {recipe?.publisher}
          </span>
          <br />
          <h1 className="font-bold text-xl">{recipe?.title}</h1>
        </div>
        {isPresent ? (
          <button
            onClick={() => dispatch(remove(newlist))}
            className="    w-[50%] h-[12%] text-white text-xs  bg-black rounded-lg text-center "
          >
            Remove from Favourites
          </button>
        ) : (
          <button
            onClick={() => handler(recipe)}
            className="    w-[50%] h-[12%] text-white text-xs  bg-black rounded-lg text-center "
          >
            Add to Favourites
          </button>
        )}
        <h2>Ingredients:</h2>
        <ul className=" p-5 list-disc">
          {recipe?.ingredients.map((data, index) => (
            <li key={index}>
              {data?.quantity} {data?.unit} of {data?.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
