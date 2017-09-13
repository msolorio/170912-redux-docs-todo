const initialState = {
  todos: [],
  nextTodoId: 0
};

export default function todoReducer(state=initialState, action) {
  switch(action.type) {
    case 'ADD_TODO':
      console.log('addTodo action hits reducer');
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            todoText: action.todoText,
            todoId: action.todoId,
            completed: false
          }
        ],
        nextTodoId: state.nextTodoId + 1
      });
    default:
      return state;
  }
};
