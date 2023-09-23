import React, { useContext } from "react";
import PropTypes from 'prop-types'
import Context from '../context';


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
  const { removeTodo } = useContext(Context);
  const classes = [];
  if (todoItemProps.complited) { 
    classes.push('done');
  }
    return (
      <li style={styles.li}>
        <span className={classes.join(" ")}>
          <input
            type="checkbox"
            checked={todoItemProps.complited}
            style={styles.input}
            onChange={() => onChangeT(todoItemProps.id)}
          />
          <strong>{indexTodo + 1}</strong>
          &nbsp;
          {todoItemProps.title}
        </span>
        <button
          className="rm"
          onClick={removeTodo.bind(null, todoItemProps.id)}
        >
          &times;
        </button>
      </li>
    );
}

TodoItem.propTypes = {
  todoItemProps: PropTypes.object.isRequired,
  indexTodo: PropTypes.number,
  onChangeT:PropTypes.func.isRequired
};

export default TodoItem;