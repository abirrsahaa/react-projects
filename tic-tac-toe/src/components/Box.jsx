import React, { useState } from "react";

const Box = ({
  index,
  player1,
  setplayer1,
  player2,
  setplayer2,
  player1turn,
  setplayer1turn,
}) => {
  const [clicked, setclicked] = useState(false);
  const handleclick = (index) => {
    if (player1.find((i) => i === index) || player2.find((i) => i === index))
      return;
    setclicked(true);
    player1turn
      ? setplayer1([...player1, index])
      : setplayer2([...player2, index]);
    setplayer1turn(!player1turn);
  };
  return (
    <>
      {clicked ? (
        <div
          onClick={() => handleclick(index)}
          key={index}
          className="outline-dashed w-[33.33%] h-[33.33%] flex justify-center items-center "
        >
          {player1.includes(index) ? "❌" : null}{" "}
          {player2.includes(index) ? "⭕" : null}
        </div>
      ) : (
        <div
          onClick={() => handleclick(index)}
          key={index}
          className="outline-dashed w-[33.33%] h-[33.33%] flex justify-center items-center "
        ></div>
      )}
    </>
  );
};

export default Box;
