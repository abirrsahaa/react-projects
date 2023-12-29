import { useState } from "react";
import "./App.css";
import QRCode from "qrcode";
import { useEffect } from "react";

function App() {
  const [text, setText] = useState("abir");
  const [get, setGet] = useState("");
  const generating = () => {
    console.log(typeof text);
    QRCode.toString(text, { type: "utf8" }, function (err, url) {
      setGet(url);
      console.log(get);
    });
  };
  useEffect(() => generating(), []);

  return (
    <>
      {/* {" "}
      <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
        <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
      </svg> */}
      <input
        className="border-2  shadow-lg rounded-lg  border-solid border-black"
        type="text"
        value={text}
        placeholder={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="border shadow-lg rounded-lg" onClick={generating}>
        Generate
      </button>
      <div className="h-32 w-24" dangerouslySetInnerHTML={{ __html: get }} />
    </>
  );
}

export default App;
