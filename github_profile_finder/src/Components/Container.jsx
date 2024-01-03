import React from "react";

const Container = ({ obj }) => {
  return (
    <div className="absolute top-[20%] border-2 border-black border-solid w-[60%] h-[50%] rounded-md flex flex-col gap-3 items-center justify-center">
      <div className="border-2 border-solid border-black rounded-full w-28 h-28 object-cover overflow-hidden">
        <img src={obj.avatar_url} />
      </div>
      <a href={obj.html_url} className="cursor-pointer">
        {obj.name ? obj.name : obj.login}
      </a>

      {obj.bio && <p className="text-center font-medium">{obj.bio}</p>}
      <div>Public Repos: {obj.public_repos} </div>
      <div>Followers: {obj.followers}</div>
      <div>Following: {obj.following} </div>
    </div>
  );
};

export default Container;
