import React from "react";

const Top = ({ text, setText, handling }) => {
  return (
    <div className="w-[95%] h-[20%] p-1 m-1 border-2 border-solid border-black flex gap-4 items-center justify-center ">
      <input
        type="text "
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="   Fucker Type your fucking city !!!!"
        className="border-2 border-solid border-black rounded-lg h-[50%] w-[65%] p-4 "
      />
      <button
        onClick={handling}
        className="border-2 border-solid border-black m-2 rounded-xl shadow-md h-[50%] w-[15%]"
      >
        Search
      </button>
    </div>
  );
};

export default Top;
