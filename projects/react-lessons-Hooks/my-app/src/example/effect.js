import React, { useState, useEffect } from "react";

function App() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  const mouseMoveHandler = (event) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  };

  // useEffect(() => {
  //   console.log('rend er');
  // })
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}/1`)
      .then((response) => response.json())
      .then((jsonik) => setData(jsonik));
    return () => {
      console.log("clean type");
    };
  }, [type]);

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div>
      <h1> Реcурс {type}</h1>
      <button onClick={() => setType("users")}>Користувачі</button>
      <button onClick={() => setType("todos")}>Todo</button>
      <button onClick={() => setType("posts")}>Пости</button>
      {/*<prev>{JSON.stringify(data, null, 2)}</prev>*/}
      <prev>{JSON.stringify(pos, null, 2)}</prev>
    </div>
  );
}

export default App;

// <input className="inputcounter"></input>;
