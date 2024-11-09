// import React from "react";
import data from "./data";
import { useState } from "react";
import "./styles.css";
// Single selection
const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enable, setEnable] = useState(false);
  const [muliState, setMultiState] = useState([]);
  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };
  const handleMultipleState = (id) => {
    let multiple = [...muliState];
    const findIndOfCurrentId = multiple.indexOf(id);
    if (findIndOfCurrentId === -1) {
      multiple.push(id);
    } else {
      multiple.splice(findIndOfCurrentId, 1);
    }
    setMultiState(multiple);
  };
  return (
    <div className="wrapper">
      <button onClick={() => setEnable(!enable)}>enable multi selection</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item" key={item.id}>
              <div
                onClick={
                  enable
                    ? () => handleSingleSelection(item.id)
                    : () => handleMultipleState(item.id)
                }
                className="title"
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {selected === item.id ? (
                <div className="content">{item.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
