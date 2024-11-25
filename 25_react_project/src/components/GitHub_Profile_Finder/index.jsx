import React, { useEffect, useState } from "react";
import Card from "./Card";

const GithubProfileFinder = () => {
  const [username, setUserName] = useState("AnannyaDeveloper404");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  async function fetchUserData() {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    console.log(data);
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
  }
  useEffect(() => {
    fetchUserData();
  }, []);
  function handleSubmit() {
    fetchUserData();
  }
  if (loading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search Github User"
          value={username}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
        <div>{userData !== null ? <Card user={userData} /> : null}</div>
      </div>
    </div>
  );
};

export default GithubProfileFinder;
