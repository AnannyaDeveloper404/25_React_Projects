import React, { useState } from "react";
import Menu_list from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

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
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
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
