import React, { useState } from "react";

const Model_Test = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);
  function handleTogglePopup(params) {}
  return (
    <div>
      <button onClick={handleTogglePopup}>Open Modal Popup</button>
    </div>
  );
};

export default Model_Test;
