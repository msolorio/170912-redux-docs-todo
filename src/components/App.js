import React, { Component } from 'react';
import AddTodoForm from '../containers/AddTodoForm';
import TodoList from '../containers/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
