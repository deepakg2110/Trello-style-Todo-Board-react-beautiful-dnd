export const ADD_TASK = 'ADD_TASK'
export const MOVE_TASK = 'MOVE_TASK'
export const EDIT_TASK = 'EDIT_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const SET_INITIAL_DATA = 'SET_INITIAL_DATA';

export const setInitialData = (todos) => ({
  type: SET_INITIAL_DATA,
  todos,
});

export function addTask(id) {
  return { type: ADD_TASK, id }
}

export function moveTask(fromListId, toListId, id) {
  return { type: MOVE_TASK, fromListId, toListId, id }
}

export function editTask(id, value) {
  return { type: EDIT_TASK, id, value }
}

export function deleteTask(listId, id) {
  return { type: DELETE_TASK, listId, id }
}

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://dummyjson.com/todos');
      const data = await response.json();
      dispatch(setInitialData(data.todos));
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };
};
