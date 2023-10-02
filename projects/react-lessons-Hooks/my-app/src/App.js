import React, { useState, useMemo } from 'react'
 
function complexCompute(num) {
  console.log("complexCompute");

  let i = 0
  while(i<100000000)  i++  
  return num * 2

 }


function App() {
  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)

  const styles={ 
    color: colored ? 'darkred': 'black'
  }
  
  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);
 

  
  return (
    <div>
      <h1 style={styles}> Властивість, що обчислюється: {computed}</h1>

      <button
        className={"btn btn-success"}
        onClick={() => setNumber((prev) => prev + 1)}
      >
        Додати
      </button>

      <button
        className="btn btn-danger"
        onClick={() => setNumber((prev) => prev - 1)}
      >
        Відняти
      </button>

      <button
        className="btn btn-warning"
        onClick={() => setColored((prev) => !prev)}
      >
        Змінити
      </button>
    </div>
  );
}

export default App;


