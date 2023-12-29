import { useState } from "react";
import { PiArrowFatRightThin } from "react-icons/pi";
import { PiArrowFatLeftThin } from "react-icons/pi";

const images = [
  {
    url: "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
  },
  {
    url: "https://fastly.picsum.photos/id/1/367/267.jpg?hmac=jZdc5TviQPVhxLyvyU8siO-I5FMVXVZpBhsBYKbBJpM",
  },
  {
    url: "https://fastly.picsum.photos/id/4/367/267.jpg?hmac=Rqu-I3Sq8iKayz1FUM3EuPZnWCQHYBXAfzPOJKv3iGk",
  },
  {
    url: "https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o",
  },
  {
    url: "https://fastly.picsum.photos/id/10/367/267.jpg?hmac=XRdepQX9y39tepelazZaEAxb6SbCWtual9_w28FPb6U",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const increment = () => {
    if (current === images.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const decrement = () => {
    if (current === 0) {
      setCurrent(images.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };
  return (
    <>
      <div className="h-64 w-96 border-black border-2 border-solid relative">
        <img
          src={images[current].url}
          alt="random"
          className="h-full w-full object-cover"
        />
        <div
          className="border-black border-2 border-solid w-10 absolute top-1/2 cursor-pointer"
          onClick={increment}
        >
          <PiArrowFatLeftThin />
        </div>
        <div
          className="border-black border-2 border-solid w-10 absolute right-0 top-1/2 cursor-pointer "
          onClick={decrement}
        >
          <PiArrowFatRightThin />
        </div>
      </div>
    </>
  );
};

export default Slider;
