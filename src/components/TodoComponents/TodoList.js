// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
            {props.list.map((todo, idx) => {
                return (
                    <Todo task={todo.task} completed={todo.completed}  key={idx}/>
                );
                
            })}
            
        </div>
    );
}

export default TodoList;