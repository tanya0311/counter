import React, { useState } from "react";
import "./App.css";
import Btn from "./component/btn/btn";
import Interface from "./component/Interface/Interface";

function App() {
  let [counter, setCounter] = useState<number>(0);
  

  function addNumber() {
    // if (count <= 4) {
    let newCounter = counter + 1;
    setCounter(newCounter);
    
    // }
  }
  function resetCounter() {
    setCounter(0);
  }
  return (
    <div className="App">
      <div className="AppItem1">
        <div>
          <Interface counter={counter} />
        </div>
        <div>
          <Btn counter={counter} addNumber={addNumber} resetCounter={resetCounter} />
        </div>
      </div>
    </div>
  );
}

export default App;
