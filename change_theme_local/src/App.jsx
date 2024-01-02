import "./App.css";
import { useState } from "react";

function App() {
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light");
  }

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // what issue i am facing is the fact that on initial render the theme follows local storage
  // but as soon as i click button handling changes te=he state but useeffect sets the local =storage to the previous state state reason and ways to fix this

  // so the solution was that what we wanted to do in use effect we have shifted that to in handling function so that
  // our logic remains the same but the useeffect is avoided

  // do find out why it didnt work out in useeffect
  const handling = () => {
    console.log(" i ran in handling");
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <>
      <div
        className={`w-[100vw] h-[100vh] relative bg-${
          localStorage.getItem("theme") === "dark" ? "black" : "white"
        }`}
      >
        {console.log(theme)}
        {console.log(localStorage.getItem("theme"))}
        <div
          className={`text-${
            localStorage.getItem("theme") === "dark" ? "white" : "black"
          } text-white absolute top-1/2 left-5`}
        >
          this is abir !
        </div>
        <button
          onClick={handling}
          className={` bg-${
            localStorage.getItem("theme") === "dark" ? "white" : "black"
          } rounded-xl text-${
            localStorage.getItem("theme") === "dark" ? "black" : "white"
          }  absolute top-[60%] left-10 text-sm`}
        >
          Change theme{" "}
        </button>
      </div>
    </>
  );
}

export default App;
