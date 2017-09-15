import React, { Component } from 'react';
import AddTodoForm from '../containers/AddTodoForm';
import TodoList from '../containers/TodoList';
import FilterBar from './FilterBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodoForm />
        <TodoList />
        <FilterBar />
      </div>
    );
  }
}

export default App;
