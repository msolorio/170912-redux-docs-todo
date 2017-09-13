import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

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

const mapStateToProps = (state) => ({...state});

export default connect(mapStateToProps)(App);
