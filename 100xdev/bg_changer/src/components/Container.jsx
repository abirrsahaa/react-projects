import React, { useState } from "react";

const data = [
  {
    title: "Red",
    code: "#FF0000",
  },
  {
    title: "Yellow",
    code: "#FFFF00",
  },
  {
    title: "Black",
    code: "#000000",
  },
  {
    title: "Purple",
    code: "#800080",
  },
  {
    title: "Green",
    code: "#008000",
  },
  {
    title: "Blue",
    code: "#0000FF",
  },
  {
    title: "Default",
    code: "#FFFFFF",
  },
];

const Container = () => {
  const [color, setcolor] = useState("white");
  return (
    <div
      style={{ backgroundColor: color }}
      className="h-full w-full flex justify-center items-center"
    >
      <div className="p-2 w-[70%] h-[7%] border-2 border-black border-solid flex justify-center items-center gap-10">
        {data.map((item, index) => (
          <div
            onClick={() => setcolor(item.title.toLowerCase())}
            key={index}
            style={{ backgroundColor: item.code }}
            className={`w-[10%] border-2   border-black border-solid h-full rounded flex justify-center items-center cursor-pointer  `}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;
