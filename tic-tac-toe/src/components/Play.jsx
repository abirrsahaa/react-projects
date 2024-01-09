import React, { useEffect, useState } from "react";
import Box from "./Box";

const Play = () => {
  var arr = new Array(9).fill(null);

  //   creating the logic for the game which is actually the project for and checking your hook skills
  const [player1, setplayer1] = useState([]);
  const [player2, setplayer2] = useState([]);

  const [player1turn, setplayer1turn] = useState(true);

  useEffect(() => {
    console.log("player1", player1);
    console.log("player2", player2);
    if (player1.length === 0 && player2.length === 0) return;
    console.log(" i am in the useEffect");
    if (
      (player1.find((i) => i === 0) === 0 &&
        player1.find((i) => i === 1) === 1 &&
        player1.find((i) => i === 2) === 2) ||
      (player1.find((i) => i === 0) === 0 &&
        player1.find((i) => i === 3) === 3 &&
        player1.find((i) => i === 6) === 6) ||
      (player1.find((i) => i === 6) === 6 &&
        player1.find((i) => i === 7) === 7 &&
        player1.find((i) => i === 8) === 8) ||
      (player1.find((i) => i === 2) === 2 &&
        player1.find((i) => i === 5) === 5 &&
        player1.find((i) => i === 8) === 8) ||
      (player1.find((i) => i === 0) === 0 &&
        player1.find((i) => i === 4) === 4 &&
        player1.find((i) => i === 8) === 8) ||
      (player1.find((i) => i === 2) === 2 &&
        player1.find((i) => i === 4) === 4 &&
        player1.find((i) => i === 6) === 6) ||
      (player1.find((i) => i === 1) === 1 &&
        player1.find((i) => i === 4) === 4 &&
        player1.find((i) => i === 7) === 7) ||
      (player1.find((i) => i === 3) === 3 &&
        player1.find((i) => i === 4) === 4 &&
        player1.find((i) => i === 5) === 5)
    ) {
      alert("player 1 wins");
      setplayer1([]);
      setplayer2([]);
    } else if (
      (player2.find((i) => i === 0) === 0 &&
        player2.find((i) => i === 1) === 1 &&
        player2.find((i) => i === 2) === 2) ||
      (player2.find((i) => i === 0) === 0 &&
        player2.find((i) => i === 3) === 3 &&
        player2.find((i) => i === 6) === 6) ||
      (player2.find((i) => i === 6) === 6 &&
        player2.find((i) => i === 7) === 7 &&
        player2.find((i) => i === 8) === 8) ||
      (player2.find((i) => i === 2) === 2 &&
        player2.find((i) => i === 5) === 5 &&
        player2.find((i) => i === 8) === 8) ||
      (player2.find((i) => i === 0) === 0 &&
        player2.find((i) => i === 4) === 4 &&
        player2.find((i) => i === 8) === 8) ||
      (player2.find((i) => i === 2) === 2 &&
        player2.find((i) => i === 4) === 4 &&
        player2.find((i) => i === 6) === 6) ||
      (player2.find((i) => i === 1) === 1 &&
        player2.find((i) => i === 4) === 4 &&
        player2.find((i) => i === 7) === 7) ||
      (player2.find((i) => i === 3) === 3 &&
        player2.find((i) => i === 4) === 4 &&
        player2.find((i) => i === 5) === 5)
    ) {
      alert("player 2 wins");
      setplayer1([]);
      setplayer2([]);
    }
  }, [player1, player2]);

  return (
    <>
      <h1>{player1turn ? "player 1 turn " : "player 2 turn"}</h1>
      <div className="border-2 border-black border-solid w-[30%] h-[50%] flex  flex-wrap">
        {arr.map((_, index) => (
          <Box
            key={index}
            index={index}
            player1={player1}
            setplayer1={setplayer1}
            player2={player2}
            setplayer2={setplayer2}
            player1turn={player1turn}
            setplayer1turn={setplayer1turn}
          />
        ))}

        {/* with that i am done with the styling basic offcourse */}
        {/* but now the main thing is that i m interested in building the logic for this game  */}
        {/* what i have figured out is that i will be using react redux or i can use a state  */}
        {/* if i use a state i will be using two state variable arrays of player a and b */}
        {/* whenever one player will click the index will be getting stored in the player state array */}

        {/* and there will be an useEffect which will have my winning logic  */}
        {/* and my useEffect will be having dependency on both the state array of players  */}
      </div>
    </>
  );
};

export default Play;
