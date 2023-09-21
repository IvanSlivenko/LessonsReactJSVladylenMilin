import React from "react";
import PropTypes from 'prop-types'
import TodoItem from "./TodoItem";

const styles = {
    ul: { 
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
 }

function TodoList(propsW) { 
    return (
      <ul style={styles.ul}>
        {propsW.TodoListProps.map((todoI, todoIndex) => {
            return (
              <TodoItem
                TodoItemProps={todoI}
                key={todoI.id}
                indexTodo={todoIndex}
              />
            );
        })}
      </ul>
    ); 
}


TodoList.propTypes = {
    TodoListProps: PropTypes.array,
    
};

export default TodoList