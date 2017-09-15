import React from 'react';
import { connect } from 'react-redux';
import { clickCheckbox, removeTodo } from '../actions';


export function TodoList(props) {

  function handleCheckboxClick(todoId) {
    props.dispatch(clickCheckbox(todoId));
  }

  function handleRemoveTodo(todoId) {
    props.dispatch(removeTodo(todoId));
  }

  function getFilteredTodos(filter) {
    switch(filter) {
      case 'ALL':
        return props.todos;
      case 'COMPLETE':
        return props.todos.filter((todo) => todo.completed === true);
      case 'INCOMPLETE':
        return props.todos.filter((todo) => todo.completed === false);
    }
  }

  const filteredTodos = getFilteredTodos(props.visibilityFilter);

  const list = filteredTodos.map((todo, index) => {
    return (
      <div className="todo" key={index}>
        <span className="remove"
          onClick={() => handleRemoveTodo(todo.todoId)}>X</span>
        <input type="checkbox"
          onClick={() => handleCheckboxClick(todo.todoId)}
          checked={todo.completed ? true : false}/>
        <div className="todoText">{todo.todoText}</div>
      </div>
    );
  });

  return (
    <ul className="TodoList">
      {list}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  visibilityFilter: state.visibilityFilter
});

export default connect(mapStateToProps)(TodoList);
