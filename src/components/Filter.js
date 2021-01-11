import React from "react";
import { useDispatch} from "react-redux"
import {filtertoDo} from "../actions/actions"
const Filter = () => {
  const dispatch = useDispatch()
  const handleFilter=(e)=>{
     dispatch( filtertoDo (e.target.value))
  };
  return (
    <div className="radio_btn">
      <input type="radio"  name="filter" value="no-filter" onChange={handleFilter}/>
      <label className="label_radio" for="no-filter">no-Filtre</label>
      <br />
      <input type="radio"  name="filter" value="Done"  onChange={handleFilter}/>
      <label className="label_radio" for="Done">Done</label>
      <br />
      <input type="radio"  name="filter" value="not Done"  onChange={handleFilter}/>
      <label className="label_radio" for="not Done">not Done</label>
    </div>
  );
};

export default Filter;
