import React from "react";
import { useDispatch } from "react-redux";
import { deletetoDo, completetoDo, savetoDo } from "../actions/actions";
import { FaTrashAlt, FaCheckSquare, FaEdit, FaUndo } from "react-icons/fa";

const ToDoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div className="Item">
      <p className={todo.complete ? "done" : undefined}>{todo.text}</p>
      <div>
        <button
          className="delete_btn"
          onClick={() => dispatch(deletetoDo(todo.id))}
        >
          <FaTrashAlt className="faTrash" />
        </button>
        <button
          className="complete_btn"
          onClick={() => dispatch(completetoDo(todo.id))}
        >
          {todo.complete ? (
            <FaUndo className="faUndo" />
          ) : (
            <FaCheckSquare className="faCheck" />
          )}
        </button>
        <button
          className="edit_btn"
          onClick={() => dispatch(savetoDo({ todo }))}
        >
          <FaEdit className="faEdit" />
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
