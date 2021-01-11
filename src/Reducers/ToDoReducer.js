// import { v4 as uuidv4 } from "uuid";
import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  EDIT_TODO,
  FILTER_TODO
} from "../actions/types";
// let initialState = [
//   {
//     id: uuidv4(),
//     text: "lear redux",
//     complete: false,
//   },
//   {
//     id: uuidv4(),
//     text: "stay safe",
//     complete: false,
//   },
// ];
const TodoReducer = (state ={todos:[] , filter:"no-filter" }, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {...state, todos: state.todos.concat(action.payload)};
    //   return {...state, todos : [...state, action.payload]}
    case DELETE_TODO:
      return {...state, todos: state.todos.filter((el) => el.id !== action.payload)}
    case COMPLETE_TODO:
      return{...state, todos: state.todos.map((el) =>
        el.id === action.payload ? { ...el, complete: !el.complete } : el
      )};
    case EDIT_TODO:
      return {...state, todos:state.todos.map((el) =>
        el.id === action.payload.id ? { ...el, text: action.payload.text } : el
      )};
      case FILTER_TODO:
      return {...state, filter: action.payload};
    default:
      return state;
  }
};

export default TodoReducer;
