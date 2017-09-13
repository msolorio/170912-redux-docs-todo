import React from 'react';
import { connect } from 'react-redux';

export function TodoList(props) {
  const list = props.todos.map((todo, index) => {
    return (
      <div className="todo" key={index}>
        <input type="checkbox" />
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
