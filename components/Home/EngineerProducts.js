import React, { useState } from "react";
import Popup from "./Popup";

function EngineerProducts() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div>
      <button onClick={handleOpenPopup}>Enquire Now</button>
      {isPopupVisible && <Popup handleClose={handleClosePopup} />}
    </div>
  );
}

export default EngineerProducts;

