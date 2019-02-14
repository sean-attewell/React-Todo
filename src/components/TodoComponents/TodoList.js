import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.todos.map(todo => (
                <Todo
                    handleToggleComplete={props.handleToggleComplete}
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </div>
    );
};

export default TodoList;

// we passed down the whole todos as a prop, along with toggle method.

// map over todos, handing that particular todo object into a Todo component
// also give the Todo component the particular id as a key
// and give it the toggle method