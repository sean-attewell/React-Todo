import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super();

    this.state = {
      todos : [
        {
          task: 'Organize Garage',
          id: 1,
          completed: "false"
        },
        {
          task: 'Burn Down Garage',
          id: 2,
          completed: "false"
        },
        {
          task: 'Build New Garage',
          id: 3,
          completed: "false"
        },
      ],
    }
  }

    addTodo = (Todo) => {
      this.setState(st => ({todos: st.todos.concat({ 
        task: Todo,
        id: 10,
        completed : "false" 
      })}))
    }
  
    toggleCompleted = (idx) => {
      this.state.todos.foreach(todo => {
        if (todo.id === idx+1) {
          this.setState(st => ({ completed: "true" }));
        }}
      )
    }
  
  render() {
    return (
      <div>
        <h2>To do list: MVP!</h2>
        <TodoList toggleCompleted={this.toggleCompleted} list={this.state.todos} />
        <TodoForm addTodo={this.addTodo}/>
      </div>
      
    );
  }
}

export default App;
