import React, { useEffect } from 'react';
import TodoList from './Todo/TodoList';

import { useState } from 'react';
import Context from './context'
// import AddTodo from './Todo/AddTodo';
import Loader from './loader';

// const AddTodo = React.lazy(() => import("./Todo/AddTodo"));
const AddTodo = React.lazy(() => 
  new Promise(resolve => {
    setTimeout(() => {
      resolve(import("./Todo/AddTodo"));
    },3000)
  })
);


function App() {
  const [todosAray, setTodosAray] = useState([]);
  const [loading, setLoading] = useState(true);

  // const [todosAray, setTodosAray] = useState([
  //   { id: 1, complited: false, title: "Купити хліб" },
  //   { id: 2, complited: true, title: "Купити масло" },
  //   { id: 3, complited: false, title: "Купити молоко" },
  //   { id: 4, complited: false, title: "Купити чай" },
  // ]);

  useEffect(() => { 
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todosAray) => {
        setTimeout(() => {
          setTodosAray(todosAray);
          setLoading(false);
        }, 2000);
        

      });
  },[])

  function toggleTodo(id) { 
    
    setTodosAray(
      todosAray.map(todoItemProps => {
      if (todoItemProps.id === id) {
        todoItemProps.complited = !todoItemProps.complited;
      }
      return todoItemProps
    })
    )
  }

  function removeTodo(id) { 
    setTodosAray(todosAray.filter((todoItemProps) => todoItemProps.id !== id));
  }

  function addTodo(title) { 
    setTodosAray(todosAray.concat([{
      title: title,
      id: Date.now(),
      complited: false
    }]));
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React tutorial</h1>
        <React.Suspense fallback={<p>Loading.....</p> }>
            <AddTodo onCreate={addTodo} />
        </React.Suspense>

        {loading && <Loader />}
        {todosAray.length ? (
          <TodoList TodoListProps={todosAray} onToggle={toggleTodo} />
        ) : loading ? null : (
          <p>No todos!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
