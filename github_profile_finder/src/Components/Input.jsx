import React from "react";

const Input = ({ profile, setProfile, finding }) => {
  return (
    <>
      <div className="relative top-[12%]  w-[50%] h-[5%] flex gap-4 justify-center">
        <input
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          type="text"
          placeholder="Search for any GitHub profile..."
          className="p-1 border-2 border-solid border-black h-full w-[40%] rounded-md"
        />
        <button
          className="border-2 border-black border-solid w-[10%] h-full rounded-lg"
          onClick={finding}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Input;
