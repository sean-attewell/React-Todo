import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor (props) {
    super(props);

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
        },{
          task: 'Build New Garage',
          id: 3,
          completed: "false"
        },
      ],
    }
  }



  // HANDLING FUNCTIONS
  
  render() {
    return (
      <div>
        <h2>To do list: MVP!</h2>
        <TodoList list={this.state.todos} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
