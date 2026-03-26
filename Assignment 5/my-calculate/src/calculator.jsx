import React, { useState } from "react";
import "./App.css";
function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (op) => {
    let a = Number(num1);
    let b = Number(num2);

    switch (op) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(b !== 0 ? a / b : "Cannot divide by zero");
        break;
      default:
        setResult("Error");
    }
  };

  return (
  <div className="calc-container">
    <div className="calc-box">
      <h2>🧮 Calculator</h2>

      <input
        type="number"
        placeholder="First number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div className="calc-buttons">
        <button onClick={() => calculate("+")}>+</button>
        <button onClick={() => calculate("-")}>-</button>
        <button onClick={() => calculate("*")}>*</button>
        <button onClick={() => calculate("/")}>/</button>
      </div>

      <h3 className="result">Result: {result}</h3>
      </div>
    </div>
  );
}

export default Calculator;