const ADD_NEW_TODO = 'NADD_NEW_TODO';
const DELETE_TODO = 'DELETE_TODO';
const SWITCH_LIST = 'SWITCH_LIST';

const initialState = {
  currentList: 'general',
  todos: {
    general: [
      {title: 'have a cookie', id: Math.random()},
      {title: 'have a bath', id: Math.random()},
      {title: 'have a laugh', id: Math.random()}
    ],
    sport: [
      {title: 'run', id: Math.random()},
      {title: 'fly', id: Math.random()},
      {title: 'sleep', id: Math.random()}
    ],
    random: [
      {title: 'haadsfasdfkie', id: Math.random()},
      {title: 'ha21341234th', id: Math.random()},
      {title: 'hae3e3er4r4gh', id: Math.random()}
    ]
  }
}

export const actions = {
  addNewTodo(newTodo) {
    return {
      type: ADD_NEW_TODO,
      newTodo
    }
  },
  deleteTodo(id) {
    return {
      type: DELETE_TODO,
      id
    }
  },
  switchList(newList) {
    return {
      type: SWITCH_LIST,
      newList
    }
  }
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NEW_TODO:
      return {
        currentList: state.currentList,
        todos: {
          ...state.todos,
          [state.currentList]: [
              ...state.todos[state.currentList],
              { title: action.newTodo, id: Math.random() }
          ]
        }
      }
    case DELETE_TODO:
      const newList = state.todos[state.currentList].filter(todo => !(todo.id === parseFloat(action.id)));
      return {
        currentList: state.currentList,
        todos: {
          ...state.todos,
          [state.currentList]: newList
        }
      }
    case SWITCH_LIST:
      return {
        currentList: action.newList,
        todos: state.todos
      }
    default:
      return state;
  }
}