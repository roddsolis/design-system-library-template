import React from "react";

const Alert = ({ alertText, alertIcon }) => {
  return (
    <div className="alertcontainer">
      {alertText}
      {alertIcon}
    </div>
  );
};

export default Alert;
