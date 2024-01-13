import React from "react";

export const Buttons = ({ handleClick }) => {
  return (
    <div id="buttonsConatiner">
      <button onClick={handleClick} id="plus">
        +
      </button>
      <button onClick={handleClick} id="minus">
        -
      </button>
      <button onClick={handleClick} id="mul">
        x
      </button>
      <button onClick={handleClick} id="division">
        /
      </button>
    </div>
  );
};
