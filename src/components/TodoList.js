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

  const list = props.todos.map((todo, index) => {

    return (
      <div className="todo" key={index}>
        <div className="remove"
          onClick={() => handleRemoveTodo(todo.todoId)}>X</div>
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

const mapStateToProps = (state) => ({...state});

export default connect(mapStateToProps)(TodoList);
