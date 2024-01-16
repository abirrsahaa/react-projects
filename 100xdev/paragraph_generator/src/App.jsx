import word from "word-list-json";
import { useState } from "react";
function App() {
  // console.log(word);
  const [words, setWords] = useState("");
  const [ans, setAns] = useState(null);

  function handling() {
    const how = Number(words);
    let ans = "";
    for (let i = 0; i < how; i++) {
      ans += word[Math.floor(Math.random() * word.length)] + " ";
    }
    setAns(ans);
  }

  return (
    <div className="flex justify-center flex-col gap-5 items-center h-[100vh] w-[100vw]">
      <h1 className="font-bold text-3xl">Para Generator</h1>
      <div className="border-2 border-solid border-black w-[90%] h-[8%]  flex justify-center items-center gap-5">
        <div className="border-2 border-black border-solid h-[95%] w-[70%]">
          <input
            value={words}
            className="h-full w-full pl-2"
            type="text"
            placeholder="Enter number of words"
            onChange={(e) => setWords(e.target.value)}
          />
        </div>
        <div
          onClick={() => handling()}
          className="border-2 cursor-pointer border-black border-solid h-[80%] w-[10%] rounded-xl text-white bg-black flex items-center justify-center"
        >
          Generate
        </div>
      </div>

      {ans && (
        <div className="w-[90%] border-2 border-black border-solid">{ans}</div>
      )}
    </div>
  );
}

export default App;
