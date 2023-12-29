import { useState } from "react";
import Stars from "./Stars";

const Container = () => {
  const number = [1, 2, 3, 4, 5];
  const [indexi, setindexi] = useState(null);
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
            />
          );
        })}
      </div>
    </>
  );
};

export default Container;
