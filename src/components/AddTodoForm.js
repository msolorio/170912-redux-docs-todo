import React from 'react';
import { connect } from 'react-redux';
import { addTodo, changeInput } from '../actions';

export function AddTodoForm(props) {

  function handleClick() {
    props.dispatch(addTodo(
      props.inputVal,
      props.nextTodoId
    ));

    props.dispatch(changeInput(''));
  }

  function handleInputChange(e) {
    props.dispatch(changeInput(e.target.value));
  }

  return (
    <div className="AddTodo">
      <label>
        Todo Text:&nbsp;
        <input placeholder="walk the dog"
          value={props.inputVal}
          onChange={handleInputChange}/>
      </label>
      <button onClick={handleClick}>click here</button>
    </div>
  );
};

const mapStateToProps = (state) => ({...state});

export default connect(mapStateToProps)(AddTodoForm);
