const initialState = {
  todos: [],
  nextTodoId: 0,
  inputVal: '',
  visibilityFilter: 'ALL'
};

export default function todoReducer(state=initialState, action) {
  switch(action.type) {
    case 'ADD_TODO':
      console.log('ADD_TODO action hits reducer');
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
      console.log('CHANGE_INPUT action hits reducer');
      return Object.assign({}, state, {
        inputVal: action.inputVal
      });

    case 'CLICK_CHECKBOX':
      console.log('CLICK_CHECKBOX action hit reducer');
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          if (todo.todoId === action.todoId) {
            return {...todo, completed: !todo.completed}
          }
          return todo;
        })
      });

    case 'REMOVE_TODO':
      console.log('REMOVE_TODO action hit reducer');
      return Object.assign({}, state, {
        todos: state.todos.filter((todo) => {
          return (todo.todoId !== action.todoId);
        })
      });

    case 'SET_VISIBILITY_FILTER':
      console.log('SET_VISIBILITY_FILTER action hit reducer');
      return Object.assign({}, state, {
        visibilityFilter: action.filterName
      });
    default:
      return state;
  }
};
