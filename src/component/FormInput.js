import React from "react";

export const FormInput = ({ placeHolder, onChange }) => {
  return <input type="text" placeholder={placeHolder} onInput={onChange} />;
};
