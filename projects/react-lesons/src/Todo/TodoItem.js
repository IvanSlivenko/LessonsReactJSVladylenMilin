import React from "react";
import PropTypes from 'prop-types'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
        
    },
    input: {
        marginRight: '1rem'
     }
}

function TodoItem({ todoItemProps, indexTodo, onChangeT }) {
     console.log("todoI", todoItemProps);
    return (
      <li style={styles.li}>
        <span>
          <input
            type="checkbox"
            style={styles.input}
            onChange={() => onChangeT(todoItemProps.id)}
          />
          <strong>{indexTodo + 1}</strong>
          &nbsp;
          {todoItemProps.title}
        </span>
        <button className="rm">&times;</button>
      </li>
    );
}

TodoItem.propTypes = {
  todoItemProps: PropTypes.object.isRequired,
  indexTodo: PropTypes.number,
  onChangeT:PropTypes.func.isRequired
};

export default TodoItem;