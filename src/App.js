import React from "react";
import { FormInput } from "./component/FormInput";
import { Buttons } from "./component/Buttons";
import { useState } from "react";
import { calculateOutput } from "./component/functions";

export const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultMessage, setResultMessage] = useState(false);
  const [result, setresult] = useState("Please input the numbers.");

  // function to change state of inputs
  function handleInputt(e, inputType) {
    const value = e.target.value;

    if (inputType === "num1") {
      setNum1(value);
    } else {
      setNum2(value);
    }
  }

  // function to handle operations ans error
  function handleClick(e) {
    const operation = e.target.id;

    if (
      num1 === "" ||
      num2 === "" ||
      isNaN(Number(num1)) ||
      isNaN(Number(num2))
    ) {
      setresult(
        num1 === ""
          ? "Num1 can not be Empty."
          : num2 === ""
          ? "Num2 can not be Empty."
          : "Enter Valid Inputs."
      );
      setResultMessage(false);
    } else {
      const output = calculateOutput(Number(num1), Number(num2), operation);
      setresult(output);
      setResultMessage(true);
    }
  }

  return (
    <div id="mainContainer">
      <h1>React Calculator</h1>
      <FormInput
        placeHolder="Num 1"
        onChange={(e) => {
          handleInputt(e, "num1");
        }}
      />
      <FormInput
        placeHolder="Num 2"
        onChange={(e) => {
          handleInputt(e, "num2");
        }}
      />

      {/* addition subtraction multilpication and devision */}
      <Buttons
        handleClick={(e) => {
          handleClick(e);
        }}
      />

      <div id="resultDiv">
        {result === "Please input the numbers." ? null : !resultMessage ? (
          <h1 id="red">🙁 Error!.</h1>
        ) : (
          <h1 id="green">😊 Success!.</h1>
        )}
        <h2>{result}</h2>
      </div>
    </div>
  );
};
