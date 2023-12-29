import { useState } from "react";
import Card from "./Cards";

const data = [
  {
    title: "Section 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    title: "Section 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    title: "Section 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    title: "Section 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    title: "Section 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

const Container = () => {
  //   const [show, setShow] = useState(false);
  const [indexi, setIndexi] = useState(0);
  //   const showing = () => setShow(!show);
  return (
    <>
      <div className="h-[100vh] w-[100vw] flex justify-center items-center">
        <div className="border-black  border-solid h-[80%] w-[70%]">
          {data.map((i, index) => {
            return (
              <Card
                title={i.title}
                description={i.description}
                key={i.title}
                index={index}
                selected={indexi === index}
                setIndexi={setIndexi}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Container;
