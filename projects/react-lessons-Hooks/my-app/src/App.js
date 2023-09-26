import React, { useState } from 'react'


function App() {
  const [counter, setCounter] = useState(0);
  function increment() { 
    setCounter(counter+1)
  }

  function dicrement() {
    setCounter(counter - 1);
  }
  function CounterZero() {
    setCounter(0);
  }
  
  return (
    <div className="totalBox">
      <h1 className="titleBox">
        <span className='titleCounter'>Лічильник:</span>  {counter}
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
    </div>
  );
}

export default App;


// <input className="inputcounter"></input>;