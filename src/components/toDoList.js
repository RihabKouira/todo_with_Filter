import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ToDoItem from "./ToDoItem";
import filtertoDo from "../actions/actions";

const ToDoList = () => {
  const todos = useSelector((state) => state.ToDoReducer.todos);
  const filtertoDo = useSelector((state) => state.ToDoReducer.filter);
  const dispatch = useDispatch();
  const filterState = (todos, filtertoDo) => {
    switch ((todos, filtertoDo)) {
      case "Done":
        return todos.filter((el) => el.complete);
        // return todos.filter((el) => el.complete ===true);

      case "not Done":
        return todos.filter((el) => !el.complete);
      case "no-filter":

      default:
        return todos;
    }
  };
  const viewToDo = filterState(todos, filtertoDo);
  return (
    <div className="center_list ">
      <p>
        {viewToDo.map((el) => (
          <ToDoItem key={el.id} todo={el} />
        ))}
      </p>
    </div>
  );
};

export default ToDoList;
// export default connect(mapStoreToProps, mapDispatchToProps)(ToDoList)
