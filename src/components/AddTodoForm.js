import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

export function AddTodoForm(props) {
  function handleClick() {
    props.dispatch(addTodo(
      'todo item',
      props.nextTodoId
    ));
  }

  return (
    <div className="AddTodo">
      <button onClick={handleClick}>click here</button>
    </div>
  );
};

const mapStateToProps = (state) => ({...state});

export default connect(mapStateToProps)(AddTodoForm);
