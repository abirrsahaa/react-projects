import React from "react";

const Card = ({ data }) => {
  console.log("data", data);
  return (
    <div className=" w-[22%] h-[35%] rounded-xl shadow-2xl flex items-center justify-center">
      <div className="flex flex-col gap-2     w-[90%] h-[95%] relative">
        <div className=" w-full h-[55%] object-cover">
          <img src={data.image_url} className="w-full h-full rounded-xl" />
        </div>
        <div className="w-full my-2">
          <span>{data.publisher}</span>
          <br />
          <h1>{data.title}</h1>
        </div>
        <button className=" absolute bottom-0 left-0   w-[50%] text-left">
          button
        </button>
      </div>
    </div>
  );
};

export default Card;
