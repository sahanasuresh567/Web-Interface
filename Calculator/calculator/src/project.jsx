import { useState } from "react";
import "./project.css";

function Calculator() {
  const [display, setDisplay] = useState("");

  const click = (value) => {
    setDisplay(display + value);
  };

  const calculate = () => {
    setDisplay(eval(display));
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>

      <input value={display} />

      <br /><br />

      <button onClick={() => click("7")}>7</button>
      <button onClick={() => click("8")}>8</button>
      <button onClick={() => click("9")}>9</button>
      <button className="operator" onClick={() => click("/")}>÷</button>

      <br />

      <button onClick={() => click("4")}>4</button>
      <button onClick={() => click("5")}>5</button>
      <button onClick={() => click("6")}>6</button>
      <button className="operator" onClick={() => click("*")}>×</button>

      <br />

      <button onClick={() => click("1")}>1</button>
      <button onClick={() => click("2")}>2</button>
      <button onClick={() => click("3")}>3</button>
      <button className="operator" onClick={() => click("-")}>−</button>

      <br />

      <button onClick={() => click("0")}>0</button>
      <button className="operator" onClick={() => click("+")}>+</button>
      <button className="equal" onClick={calculate}>=</button>
      <button className="clear" onClick={() => setDisplay("")}>C</button>
    </div>
  );
}

export default Calculator;