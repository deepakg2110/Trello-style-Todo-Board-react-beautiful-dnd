import _ from 'lodash';
import { combineReducers } from 'redux';
import { ADD_TASK, MOVE_TASK, EDIT_TASK, DELETE_TASK, SET_INITIAL_DATA } from './actions';

function lists(state = {}, action) {
  switch (action.type) {
    case SET_INITIAL_DATA: {
      const initialState = {
        pending: { id: 'pending', title: 'Pending', tasks: [] },
        inProgress: { id: 'inProgress', title: 'In Progress', tasks: [] },
        done: { id: 'done', title: 'Done', tasks: [] },
      };

      // Assign tasks to `pending` list by default from API data
      action.todos.forEach((todo) => {
        initialState.pending.tasks.push(todo.id);
      });

      return initialState;
    }
    case ADD_TASK: {
      return {
        ...state,
        pending: { ...state.pending, tasks: state.pending.tasks.concat(action.id) },
      };
    }
    case MOVE_TASK: {
      const from = state[action.fromListId];
      const to = state[action.toListId];
      return {
        ...state,
        [from.id]: { ...from, tasks: _.without(from.tasks, action.id) },
        [to.id]: { ...to, tasks: to.tasks.concat(action.id) },
      };
    }
    case DELETE_TASK: {
      const list = state[action.listId];
      return {
        ...state,
        [list.id]: { ...list, tasks: _.without(list.tasks, action.id) },
      };
    }
    default:
      return state;
  }
}

function tasks(state = {}, action) {
  switch (action.type) {
    case SET_INITIAL_DATA: {
      const taskState = {};
      action.todos.forEach((todo) => {
        taskState[todo.id] = { id: todo.id, title: todo.todo };
      });
      return taskState;
    }
    case ADD_TASK: {
      const task = { id: action.id, title: 'New Task' };
      return {
        ...state,
        [action.id]: task,
      };
    }
    case EDIT_TASK: {
      const task = state[action.id];
      return {
        ...state,
        [action.id]: { ...task, title: action.value },
      };
    }
    case DELETE_TASK:
      return _.omit(state, action.id);
    default:
      return state;
  }
}

export default combineReducers({ lists, tasks });
