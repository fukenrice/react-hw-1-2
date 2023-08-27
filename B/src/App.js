import logo from "./logo.svg";
import Keyboard from "./components/Keyboard/Keyboard";
import Output from "./components/Output/Output";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [output, setOutput] = useState("");
  const [query, setQuery] = useState("")


  const values = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];



  function calc(value) {
    if (value === "=") {
      try {
        let finalEquation = ""
        if (query !== output) {
          finalEquation = query + output
        }
        let result = eval(finalEquation);
        if (!isFinite(result)) {
          throw EvalError("division by zero");
        }
        setOutput(prevState => result.toString())
        setQuery(prevState => "")
      } catch (e) {
        let newValue = e.message;
        setOutput(prevState => newValue)
        setTimeout(() => {
          setOutput(prevState => "")
          setQuery(prevState => "")
        }, 1500);
      }
    } else if (value === "C") {
      setOutput(prevState => "")
      setQuery(prevState => "")
    } else if (value.match(/\+|\-|\*|\//)) {
      if (output !== "") {
        setQuery(prevState => prevState + output + value)
        setOutput("")
      }
      console.log(query);
    } else {
      if (value === "." && output.search(/\./) !== -1) {
        return;
      }
      if (
        value === "0" &&
        output.charAt(0) === "0" &&
        output.length === 1
      ) {
        return;
      }
      if (output.length < 16) {
        setOutput(prevState => prevState += value)
      }
    }
  }

  return (
    <div className="calc">
      <Output onClearClick={calc} result={output}></Output>
      <Keyboard btnVals={values} onBtnClick={calc}></Keyboard>
    </div>
  );
}

export default App;
