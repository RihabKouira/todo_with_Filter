import { SAVE_TODO,SAVE_TODO_NULL } from "../actions/types";

const SavedReducer = (state = null, action) => {
  switch (action.type) {
    case SAVE_TODO:
      return action.payload;
    case SAVE_TODO_NULL:
      return null;
    default:
      return state;
  }
};
export default SavedReducer;
