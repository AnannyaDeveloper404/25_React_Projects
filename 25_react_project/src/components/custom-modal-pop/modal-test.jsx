import React, { useState } from "react";
import Modal from "./modal";
import "./modal.css";
const Model_Test = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);
  function handleTogglePopup() {
    setShowModalPopup(!showModalPopup);
  }
  function onClose() {
    setShowModalPopup(false);
  }
  return (
    <div>
      <button onClick={handleTogglePopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal onClose={onClose} body={<div>Customized body</div>} />
      )}
    </div>
  );
};

export default Model_Test;
