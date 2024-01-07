import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [recipe, setrecipe] = useState(null);
  const id = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id.id}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setrecipe(data.data.recipe);
      });
  }, []);
  return (
    <div className="w-[98%] mx-auto h-full border-2 border-black border-solid flex justify-center pt-5 gap-2">
      {recipe && console.log(recipe)}
      <div className="w-[48%] h-[55%] shadow-2xl object-cover rounded-xl">
        <img
          className="w-full h-full rounded-xl shadow-2xl"
          src={recipe ? recipe.image_url : null}
        />
      </div>
      <div className="w-[45%] h-[80%] border-black border-solid border-2"></div>
    </div>
  );
};

export default Recipe;
