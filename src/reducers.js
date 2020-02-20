import todosList from "./todos.json";

import {
  TOGGLE_TODO,
  ADD_TODO,
  DELETE_TODO,
  CLEAR_COMPLETED_TODOS
} from "./actions";

const initialState = {
  todos: todosList
};

function todoApp(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_TODO:
      return;
    case ADD_TODO: {
      // action = { type: ADD_TODO, payload: newTodo }
      // update component state with new todo
      // create copy of data
      const newTodos = state.todos.slice();
      // modify and overwrite original
      newTodos.push(action.payload);
      return { todos: newTodos };
    }
    case DELETE_TODO:
      return;
    case CLEAR_COMPLETED_TODOS: {
      const newTodos = state.todos.filter(todo => !todo.completed);
      return { todos: newTodos };
    }
    default:
      return state;
  }
}

export default todoApp;
