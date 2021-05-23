import React, { useEffect, useState } from "react";
import "./App.css";
import Interface from "./component/Interface/Interface";

function App() {
  let [counter, setCounter] = useState<number>(0);
  const maxValue = 6;

  useEffect(() => {
    let counterAsString = localStorage.getItem("counter");
    if (counterAsString) {
      let counterAsNumber = JSON.parse(counterAsString);
      setCounter(counterAsNumber);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(counter));
  }, [counter]);

  function addNumber() {
    // if (counter <= 4) {
    // let newCounter = counter + 1;
    // setCounter(newCounter);
    // }
    if (counter === maxValue) {
      return;
    }
    let newCounter = counter + 1;
    setCounter(newCounter);
  }

  function resetCounter() {
    setCounter(0);
  }
  //! LocalStorage practice
  const setItemLocalStorage = () => {
    localStorage.setItem("counter", JSON.stringify(counter));
    localStorage.setItem("counter + 1", JSON.stringify(counter + 1));
  };
  const getItemLocalStorage = () => {
    let counterAsString = localStorage.getItem("counter");
    if (counterAsString) {
      let counterAsNumber = JSON.parse(counterAsString);
      setCounter(counterAsNumber);
    }
  };
  const clearLocalStorage = () => {
    localStorage.clear();
    setCounter(0);
  };
  const removeItemLocalStorage = () => {
    localStorage.removeItem("counter + 1");
  };

  return (
    <div className="App">
      <div className="AppItem1">
        <div>
          <Interface
            counter={counter}
            maxValue={maxValue}
            addNumber={addNumber}
            resetCounter={resetCounter}
          />
        </div>
        <div>
          {/* <button onClick={setItemLocalStorage}>setItemLocalStorage</button>
          <button onClick={getItemLocalStorage}>getItemLocalStorage</button>
          <button onClick={clearLocalStorage}>clearLocalStorage</button>
          <button onClick={removeItemLocalStorage}>removeItemLocalStorage</button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
