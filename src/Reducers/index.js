import { combineReducers } from "redux";
import ToDoReducer from "./ToDoReducer";
import SavedReducer from "./SavedReducer";
export default combineReducers({ ToDoReducer, SavedReducer });
