import React from 'react';

const Todo = props => {
    return (
        <div
            style={props.todo.completed ? { textDecoration: 'line-through' } : null}
            onClick={() => props.handleToggleComplete(props.todo.id)}
        >
            {props.todo.task}
        </div>
    );
};

export default Todo;

// takes in 3 props and returns one div.

// div content comes all the way from App state task

// ternary sets the div style property in-line. Open braces to write the ternary in JS.
// think the resulting style is therefore interpolated into text?

// Has an onClick property
// which calls toggle function that has been passed down all this way
// WITH the particular todo id as a parameter.

// so that will change completed on this particular todo
// which will change the inline styling.