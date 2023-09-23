import React, { useState } from "react";
import PropTypes from 'prop-types'



function useInputValue(defaultValue='') { 
    const [valueInput, setValueInput] = useState(defaultValue);
    
    return {
      bind: {
        value: valueInput,
        onChange: (event) => setValueInput(event.target.value),
      },
      clear: () => setValueInput(""),
      valueFunc: () => valueInput
    };
}

function AddTodo({ onCreate }) {
    const input = useInputValue('');
    

  function submitHandler(event) {
      event.preventDefault();
      

    if (input.valueFunc().trim()) {
      onCreate(input.valueFunc());
        // setValueInput('')
        input.clear();
    }
  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      <input
              {...input.bind}
      />
      <button type="submit">Add todo</button>
    </form>
  );
}

AddTodo.propTypes = {
    onCreate:PropTypes.func.isRequired
}

export default AddTodo
