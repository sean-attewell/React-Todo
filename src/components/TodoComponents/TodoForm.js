import React from 'react';

class TodoForm extends React.Component {
    state = {
        input: '',
    }
    
    changeHandler = (event) => {
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.value);
        this.setState({
            input: event.target.value,
        });
    }
    
    onButtonClick = () => {
        this.props.addTodo(this.state.input);
    }

    render () {
        return (
            <div>
                <form>
                    <input type="text" onChange={this.changeHandler} />
                    <input type="submit" value="Add Todo" onClick={this.onButtonClick} />
                    <input type="submit" value="Clear Completed" />
                </form> 
            </div>
        );
    }
}

export default TodoForm;