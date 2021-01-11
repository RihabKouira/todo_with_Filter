import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoDo, edittoDo,savetoDoNULL } from "../actions/actions";
import { v4 as uuidv4 } from "uuid";
import { FaPlusSquare, FaEdit } from "react-icons/fa";

const AddToDo = () => {
  const [add, setAdd] = useState("");
  const handleChange = (e) => {
    setAdd(e.target.value);
  };

  const dispatch = useDispatch();
  const save = useSelector((state) => state.SavedReducer);
  useEffect(() => {
    console.log(" changed", save);
    if (save) setAdd(save.todo.text);
  }, [save]);
  return (
    <div>
      <h2 className="title" style={{ margin: "5" }}>
        My To Do List
      </h2>
      <div className="addtodo">
        <input
          value={add}
          className="txtb"
          type="text"
          placeholder="Add New ToDo.."
          onChange={handleChange}
        ></input>
        <button
          className="add_edit_btn"
          onClick={() => {
            if (save) dispatch(edittoDo(add, save.todo.id));
            else
              dispatch(addtoDo({ text: add, id: uuidv4(), complete: false }));
            setAdd("");
          }}
        >
          {save ? (
            <button
              className="edit2_btn"
              onClick={() => dispatch(savetoDoNULL())}
            >
              <FaEdit className="faEdit" />
            </button>
          ) : (
           
              <FaPlusSquare className="faPlus" />
          
          )}
        </button>
      </div>
    </div>
  );
};

export default AddToDo;
