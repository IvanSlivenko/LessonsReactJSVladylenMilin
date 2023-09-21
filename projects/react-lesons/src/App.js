import React from 'react';
import TodoList from './Todo/TodoList';


function App() {

  const todosAray = [
    { id: 1, complited: false, title: "Купити хліб" },
    { id: 2, complited: false, title: "Купити масло" },
    { id: 3, complited: false, title: "Купити молоко" },
    { id: 4, complited: false, title: "Купити чай" }
  ];

  return (
    <div className="wrapper">
      <h1>React tutorial</h1>
      <TodoList TodoListProps={todosAray} />
    </div>
  );
}

export default App;
