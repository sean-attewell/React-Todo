import React from 'react';

const TodoForm = () => {
    return (
        <div>
            <form>
                <input type="text" />
                <input type="submit" value="Add Todo" />
                <input type="submit" value="Clear Completed" />
            </form> 
        </div>
    );
}

export default TodoForm;