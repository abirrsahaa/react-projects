const Card = ({ title, description, indexi, index, selected, setIndexi }) => {
  const handling = () => {
    setIndexi(index === indexi ? null : index);
    // handling the case for single selection where on clicking the same card again, it closes
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
