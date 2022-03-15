import {
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCESS,
} from "./actionTypes.js";
const addTodoLoading = () => {
  return {
    type: ADD_TODO_LOADING,
  };
};

const addTodoSucess = (data) => {
  return {
    type: ADD_TODO_SUCESS,
    payload: data,
  };
};

const addTodoError = (err) => {
  return { type: ADD_TODO_ERROR, payload: err };
};

export { addTodoError, addTodoLoading, addTodoSucess };
