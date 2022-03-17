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

const getTodoLoading = () => {
  return {
    type: GET_TODO_LOADING,
  };
};

const getTodoSucess = (data) => {
  return {
    type: GET_TODO_SUCESS,
    payload: data,
  };
};

const getTodoError = (err) => {
  return { type: GET_TODO_ERROR, payload: err };
};

const removeTodoLoading = () => {
  return {
    type: REMOVE_TODO_LOADING,
  };
};

const removeTodoSucess = (id) => {
  return {
    type: REMOVE_TODO_SUCESS,
    payload: id,
  };
};

const removeTodoError = (err) => {
  return { type: REMOVE_TODO_ERROR, payload: err };
};

export {
  addTodoError,
  addTodoLoading,
  addTodoSucess,
  getTodoError,
  getTodoLoading,
  getTodoSucess,
  removeTodoError,
  removeTodoLoading,
  removeTodoSucess,
};
