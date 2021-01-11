import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  EDIT_TODO,
  SAVE_TODO,
  SAVE_TODO_NULL,
  FILTER_TODO,
} from "./types";
export const addtoDo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
};

export const deletetoDo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
export const completetoDo = (id) => {
  return {
    type: COMPLETE_TODO,
    payload: id,
  };
};
export const savetoDo = (todo) => {
  return {
    type: SAVE_TODO,
    payload: todo,
  };
};
export const edittoDo = (updatedtoDo, id) => {
  return {
    type: EDIT_TODO,
    payload: { text: updatedtoDo, id: id },
  };
};
export const savetoDoNULL = () => {
  return {
    type: SAVE_TODO_NULL,
   
  };
};
export const filtertoDo = (filterValue) => {
  return {
    type: FILTER_TODO,
    payload: filterValue,
  };
};