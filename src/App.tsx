import React, { useState } from "react";
import "./App.css";
import Interface from "./component/Interface/Interface";

function App() {
  let [counter, setCounter] = useState<number>(0);
  const maxValue = 6;

  function addNumber() {
    // if (counter <= 4) {
    // let newCounter = counter + 1;
    // setCounter(newCounter);
    // }
    if (counter === maxValue) {
      return
    }
    let newCounter = counter + 1;
    setCounter(newCounter);
  }

  function resetCounter() {
    setCounter(0);
  }
  return (
    <div className="App">
      <div className="AppItem1">
        <div>
          <Interface counter={counter}  maxValue={maxValue} addNumber={addNumber} resetCounter={resetCounter} />
        </div>
      </div>
    </div>
  );
}

export default App;
