// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = ({ list, toggleCompleted }) => {
    return (
        <div>
            {list.map((todo, idx) => {
                return (
                    <Todo 
                        // onClick={toggleCompleted(idx)} 
                        task={todo.task} 
                        completed={todo.completed}  
                        key={idx}/>
                )  
            })
            }
        </div>
    );
}

export default TodoList;