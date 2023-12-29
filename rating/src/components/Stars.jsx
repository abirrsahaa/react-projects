import { FaStar } from "react-icons/fa6";
const Stars = ({ indexi, setindexi, index }) => {
  const handle = () => {
    setindexi(index);
  };
  return <div onMouseOver={handle}>{indexi >= index ? "⭐" : <FaStar />}</div>;
};

export default Stars;
