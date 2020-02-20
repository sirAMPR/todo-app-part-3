// Action types
export const TOGGLE_TODO = "TOGGLE_TODO",
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  CLEAR_COMPLETED_TODOS = "CLEAR_COMPLETED_TODOS";

// action creators
export function toggleTodo(id) {
  return { type: TOGGLE_TODO, id };
}

export function addTodo(todoTitle) {
  const newTodo = {
    userId: 1,
    id: Math.floor(Math.random() * 1000000),
    title: todoTitle,
    completed: false
  };

  return { type: ADD_TODO, payload: newTodo };
}

export function deleteTodo(id) {
  return { type: DELETE_TODO, id };
}

export function clearCompletedTodos() {
  return { type: CLEAR_COMPLETED_TODOS };
}
