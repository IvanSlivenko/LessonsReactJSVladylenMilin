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

function TodoList(props) { 
    return (
      <ul style={styles.ul}>
        {props.TodoListProps.map((todoI, todoIndex) => {
            return (
              <TodoItem
                todoItemProps={todoI}
                key={todoI.id}
                indexTodo={todoIndex}
                onChangeT={props.onToggle}
              />
            );
        })}
      </ul>
    ); 
}


TodoList.propTypes = {
  TodoListProps: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
};

export default TodoList