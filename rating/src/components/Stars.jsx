import { FaStar } from "react-icons/fa6";
const Stars = ({ indexi, setindexi, index, selected, setselected }) => {
  const handle = () => {
    setindexi(index);
  };

  const handling = () => {
    setselected(index);
  };

  const yoyo = () => {
    setindexi(selected);
  };

  return (
    <div
      onMouseOver={handle}
      onClick={handling}
      onMouseLeave={yoyo}
      className={
        index <= (indexi || selected) ? "text-yellow-500" : "text-black"
      }
    >
      {" "}
      <FaStar />
    </div>
  );
};

export default Stars;
