export const addTodo = (todoText, todoId) => ({
  type: 'ADD_TODO',
  todoText,
  todoId
});

export const changeInput = (inputVal) => ({
  type: 'CHANGE_INPUT',
  inputVal
});
