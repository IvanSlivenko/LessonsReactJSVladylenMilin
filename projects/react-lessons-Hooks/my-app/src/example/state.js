import React, { useState } from "react";

function computeInitialCounter() {
  console.log("Some calculations...");
  return Math.trunc(Math.random() * 20);
}

function App() {
  // const [counter, setCounter] = useState(0);
  // const [counter, setCounter] = useState(computeInitialCounter);

  const [counter, setCounter] = useState(() => {
    return computeInitialCounter();
  });

  const [state, setState] = useState({
    title: "Лічильник",
    date: Date.now(),
  });

  function increment() {
    setCounter(counter + 1);

    // setCounter((prevCounter) => {
    //   return prevCounter + 1;
    // })
    // setCounter(prev=>prev+1)
  }

  function dicrement() {
    setCounter(counter - 1);
  }
  function CounterZero() {
    setCounter(0);
  }

  function updateTitle() {
    setState((prevState) => {
      return {
        ...prevState,
        title: "Нова назва",
      };
    });
  }

  return (
    <div className="totalBox">
      <h1 className="titleBox">
        <span className="titleCounter">Лічильник:</span> {counter}
      </h1>

      <div className="btnBox">
        <button onClick={increment} className="btn btn-success">
          Додати
        </button>
        <button onClick={dicrement} className="btn btn-danger">
          Зменшити
        </button>
        <button onClick={CounterZero} className="btn btn-danger ZeroButton">
          Обнулити
        </button>
      </div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <div className="btnBox">
        <button onClick={updateTitle} className="btn btn-default ">
          Змінити назву
        </button>
      </div>
    </div>
  );
}

export default App;

// <input className="inputcounter"></input>;
