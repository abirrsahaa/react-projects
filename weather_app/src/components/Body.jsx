import React from "react";

const Body = ({ obj }) => {
  console.log(obj);

  const { temp, humidity, description, speed, country1, name1 } = obj;
  console.log(temp, humidity, description, speed, country1, name1);

  return (
    <>
      {obj && (
        <div className="w-[95%] h-[70%] border-2 border-solid border-black my-2 flex flex-col justify-center items-center">
          <div className="w-[60%] h-[60%] border-2 border-solid border-black mt-2 flex flex-col items-center justify-center gap-2">
            <div className="w-[70%] h-[17%] border-2 m-2 border-solid border-black">
              {name1} , {country1}
            </div>
            <div className="w-[70%] h-[8%] border-2 border-solid border-black"></div>
            <div className="w-[70%] h-[25%] border-2 border-solid border-black">
              {temp}
            </div>
            <div className="w-[70%] h-[15%] border-2 border-solid border-black">
              {description}
            </div>
          </div>
          <div className="w-[80%] h-[25%] border-2 border-solid border-black my-2 flex justify-around m-2 p-2 ">
            <div className="w-[25%] h-[90%] border-2 border-solid border-black flex flex-col gap-1 justify-center items-center">
              <div className="w-[10%] h-[10%] border-2 border-solid border-black">
                {speed}
              </div>
              <div className="w-[30%] h-[10%] border-2 border-solid border-black">
                Wind Speed
              </div>
            </div>
            <div className="w-[25%] h-[90%] border-2 border-solid border-black flex flex-col gap-1 justify-center items-center">
              <div className="w-[10%] h-[10%] border-2 border-solid border-black">
                {humidity}%
              </div>
              <div className="w-[30%] h-[10%] border-2 border-solid border-black">
                Humidity
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
