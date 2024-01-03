import React, { useState } from "react";
import datas from "./tab_data";

const Container = () => {
  const percentage = 100 / datas.length;
  const [curr, setcurrent] = useState(0);
  return (
    <>
      <div className="w-72 h-16 border-black border-solid border-2 absolute right-[50%] top-[20%] flex">
        {datas.map((data, index) => {
          return (
            <div
              key={data.id}
              onClick={() => setcurrent(index)}
              className="cursor-pointer hover:bg-green-700 hover:scale-110 hover:border-none h-[100%] w-[33.33%] flex justify-center items-center border-2 border-black shadow-xl border-solid"
            >
              Tab {data.id}
            </div>
          );
        })}
      </div>
      <div className="absolute right-[50%] top-[30%] flex justify-center items-center w-72 h-12 border-2 border-black border-solid">
        {datas[curr].content}
      </div>
    </>
  );
};

export default Container;
