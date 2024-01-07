import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  console.log("data", data);
  return (
    <div className=" w-[22%] h-[35%] rounded-xl shadow-2xl flex items-center justify-center">
      <div className="flex flex-col gap-2     w-[90%] h-[95%] relative">
        <div className=" w-full h-[55%] object-cover">
          <img src={data.image_url} className="w-full h-full rounded-xl" />
        </div>
        <div className="w-full my-2">
          <span className="text-blue-500 font-bold text-sm">
            {data.publisher}
          </span>
          <br />
          <h1 className="font-bold text-xl">{data.title}</h1>
        </div>
        <button className=" absolute bottom-0 left-0   w-[50%] h-[12%] text-white text-xs  bg-black rounded-lg text-center border-2 border-black border-solid">
          <Link to={`/${data.id}`}>RECIPE DETAILS</Link>
        </button>
      </div>
    </div>
  );
};

export default Card;
