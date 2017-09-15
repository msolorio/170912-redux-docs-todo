export const addTodo = (todoText, todoId) => ({
  type: 'ADD_TODO',
  todoText,
  todoId
});

export const changeInput = (inputVal) => ({
  type: 'CHANGE_INPUT',
  inputVal
});

export const clickCheckbox = (todoId) => ({
  type: 'CLICK_CHECKBOX',
  todoId
});

export const removeTodo = (todoId) => ({
  type: 'REMOVE_TODO',
  todoId
});
