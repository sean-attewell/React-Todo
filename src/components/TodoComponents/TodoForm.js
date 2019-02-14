import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input
                onChange={props.handleTodoChange}
                type="text"
                name="todo"
                value={props.value}
                placeholder="...todo"
            />
            <button onClick={props.handleAddTodo}>Add Todo</button>
            <button onClick={props.handleClearTodos}>Clear Completed</button>
        </form>
    );
};

export default TodoForm;

// all methods have been passed down to it to call with props
// they invoke without brackets because methods stored in variables

// changeTodo sets todo state in App to whatever the event value is (typed in)
// It selects the todo state in App by referencing the event target name to make it
// reusable. 