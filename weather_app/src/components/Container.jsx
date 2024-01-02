import React from "react";
import { useState } from "react";
import Top from "./Top";
import Body from "./Body";

const Container = () => {
  let obj;
  const [text, setText] = useState("");
  const api_key = "7f333b067f3ce1bdcf91442266697823";

  const fetching = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=5&appid=${api_key}`
    );
    const data = await response.json();
    return data;
  };
  const [obj1, setobj1] = useState(null);

  const handling = async () => {
    const data = await fetching();
    const { lat, lon, name, state, country } = data[0];
    console.log(lat, lon, name, state, country);
    obj = { lat, lon, name, state, country };
    console.log(obj);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
    );
    const data2 = await response.json();
    console.log(data2);
    const { temp, humidity } = data2.main;
    const { description } = data2.weather[0];
    const { speed } = data2.wind;
    const country1 = data2.sys.country;
    const name1 = data2.name;
    let obj11 = { temp, humidity, description, speed, country1, name1 };
    setobj1(obj11);
  };

  return (
    <div className="w-[66%] h-[75%] border-black border-2 border-solid rounded-md flex flex-col items-center">
      <Top text={text} setText={setText} handling={handling} />
      {obj1 && <Body obj={obj1} />}
    </div>
  );
};

export default Container;
