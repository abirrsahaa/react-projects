const Card = ({ title, description, index, selected, setIndexi }) => {
  const handling = () => {
    setIndexi(index);
  };
  return (
    <>
      <div className="border border-black 2px w-96 h-28 flex justify-between items-center">
        <div className="w-[80%] flex flex-col justify-center items-center">
          {title}
        </div>
        <div className="w-[20%] cursor-pointer" onClick={handling}>
          +
        </div>
      </div>
      {selected && (
        <div className="border border-black 2px w-96 h-28 flex justify-between items-center rounded-xl">
          <div>{description}</div>
        </div>
      )}
    </>
  );
};

export default Card;
