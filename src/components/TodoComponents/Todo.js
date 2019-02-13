import React from 'react';

const Todo = ({ idx, completed, task }) => {
    return (
        <div data-completed={completed} key={idx}>
            {task}
        </div>
    );
}

export default Todo;
