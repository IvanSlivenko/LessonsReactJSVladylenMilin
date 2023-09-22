import React from 'react';
import TodoList from './Todo/TodoList';


function App() {

let todosAray = [
    { id: 1, complited: false, title: "Купити хліб" },
    { id: 2, complited: false, title: "Купити масло" },
    { id: 3, complited: false, title: "Купити молоко" },
    { id: 4, complited: false, title: "Купити чай" }
  ];

  function toggleTodo(id) { 
    // console.log('todo id', id);
    todosAray = todosAray.map((todoItemProps) => {
      if (todoItemProps.id === id) {
        todoItemProps.complited = !todoItemProps.complited;
      }
      return todoItemProps;
    });
  }

  return (
    <div className="wrapper">
      <h1>React tutorial</h1>
      <TodoList TodoListProps={todosAray} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
