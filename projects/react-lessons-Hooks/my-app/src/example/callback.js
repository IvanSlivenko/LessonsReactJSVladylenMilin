import React, { useState, useCallback } from "react";
import ItemsList from "./itemsList";

function App() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? "darkred" : "black",
  };

  const genereteItemsFromAPI = useCallback(
    (indexNumber) => {
      return new Array(count)
        .fill("")
        .map((_, i) => `Елемент ${i + indexNumber}`);
    },
    [count]
  );

  return (
    <div>
      <h1 style={styles}> Кількість елементів {count}</h1>

      <button
        className={"btn btn-success"}
        onClick={() => setCount((prev) => prev + 1)}
      >
        Додати
      </button>

      <button
        className="btn btn-warning"
        onClick={() => setColored((prev) => !prev)}
      >
        Змінити
      </button>

      <ItemsList getItems={genereteItemsFromAPI} />
    </div>
  );
}

export default App;
