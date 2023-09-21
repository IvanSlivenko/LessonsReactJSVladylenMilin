import React from "react";



export default function TodoItem({ TodoItemProps, indexTodo }) {
    return (
        <li>
            <strong>{ indexTodo + 1}</strong>
            {TodoItemProps.title}

        
      </li>
    );
}