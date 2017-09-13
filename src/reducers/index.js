const initialState = {
  todos: [],
  nextTodoId: 0,
  inputVal: ''
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
    case 'CHANGE_INPUT':
      console.log('changeInput action hits reducer');
      return Object.assign({}, state, {
        inputVal: action.inputVal
      });
    default:
      return state;
  }
};
