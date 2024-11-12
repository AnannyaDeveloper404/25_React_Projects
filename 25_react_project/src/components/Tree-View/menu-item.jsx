import React, { useState } from "react";
import Menu_list from "./menu-list";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  function handleToggleChildren(currLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [currLabel]: !displayCurrentChildren[currLabel],
    });
  }
  console.log(displayCurrentChildren);

  return (
    <li>
      <div style={{ display: "flex", gap: "20px" }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length &&
      displayCurrentChildren[item.label] ? (
        <Menu_list list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
