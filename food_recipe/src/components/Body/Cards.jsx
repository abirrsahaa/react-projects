import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { remove } from "../../store/favSlice";
import { useSelector } from "react-redux";

const Card = ({ data }) => {
  const id = data?.id;
  const list = useSelector((store) => store.fav.all);

  const dispatch = useDispatch();
  console.log(list ? list : null);
  console.log("data", data);
  const isPresent = list?.find((item) => item.id === id);

  const newlist = list?.filter((item) => item.id !== id);

  console.log("isPresent", isPresent);
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
        <div className="flex justify-between w-full ">
          <button className="  w-[40%] h-full text-white text-xs  bg-black rounded-lg text-center border-2 shadow-lg">
            <Link to={`/${data.id}`}>RECIPE DETAILS</Link>
          </button>

          {isPresent ? (
            <button
              onClick={() => dispatch(remove(newlist))}
              className="   w-[40%] h-full text-white text-xs  bg-black rounded-lg text-center shadow-lg"
            >
              Remove from Favourites
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
