import React from "react";

const Card = ({ user }) => {
  const { avatar_url, followers, following, public_repos, url, name, login } =
    user;
  return (
    <div className="user">
      <div>
        <img src={avatar_url} alt="user" className="avatar" />
        <div>
          <a href={url}>{name || login}</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
