import {
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCESS,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCESS,
  REMOVE_TODO_ERROR,
  REMOVE_TODO_LOADING,
  REMOVE_TODO_SUCESS,
  TOGGLE_TODO_ERROR,
  TOGGLE_TODO_LOADING,
  TOGGLE_TODO_SUCESS,
} from "./actionTypes.js";

const init = { loading: false, todos: [], error: false };

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_TODO_SUCESS:
      return { ...state, loading: false };

    case ADD_TODO_ERROR:
      return { ...state, loading: false, error: true };

    case GET_TODO_LOADING:
      return { ...state, loading: true };

    case GET_TODO_SUCESS:
      return { ...state, todos: payload, loading: false };

    case GET_TODO_ERROR:
      return { ...state, loading: false, error: true };

    case REMOVE_TODO_LOADING:
      return { ...state, loading: true };

    case REMOVE_TODO_SUCESS:
      return {
        ...state,
        loading: false,
      };

    case REMOVE_TODO_ERROR:
      return { ...state, loading: false, error: true };

    case TOGGLE_TODO_LOADING:
      return { ...state, loading: true };

    case TOGGLE_TODO_SUCESS:
      return { ...state, loading: false };

    case TOGGLE_TODO_ERROR:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};
