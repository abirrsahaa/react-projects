import { useState } from "react";
import Stars from "./Stars";

const Container = () => {
  const number = [1, 2, 3, 4, 5];
  const [indexi, setindexi] = useState(0);
  const [selected, setselected] = useState(0);
  return (
    <>
      <div className="flex">
        {number.map((i, index) => {
          return (
            <Stars
              key={index}
              indexi={indexi}
              setindexi={setindexi}
              index={index}
              selected={selected}
              setselected={setselected}
            />
          );
        })}
      </div>
    </>
  );
};

export default Container;
