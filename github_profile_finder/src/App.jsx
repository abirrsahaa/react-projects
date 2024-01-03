import "./App.css";
import Container from "./Components/Container";
import Input from "./Components/Input";
import { Octokit } from "octokit";
import { useState } from "react";

function App() {
  const [profile, setProfile] = useState(null);
  const [obj, setobj] = useState(null);

  const finding = async () => {
    const octokit = new Octokit({
      auth: "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",
    });

    const response = await octokit.request(`GET /users/${profile}`, {
      username: profile,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    console.log(profile);
    console.log(response);

    const { avatar_url, bio, followers, following, html_url, name, login } =
      response.data;

    const { public_repos } = response.data;

    let obj1 = {
      avatar_url,
      bio,
      followers,
      following,
      html_url,
      name,
      public_repos,
      login,
    };
    console.log(obj1);
    setobj(obj1);
  };

  return (
    <>
      <div className="w-[100vw] h-[100vh] flex justify-center relative">
        <Input profile={profile} setProfile={setProfile} finding={finding} />
        {obj && <Container obj={obj} />}
      </div>
    </>
  );
}

export default App;
