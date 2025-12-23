import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addTodo } from '../global/slice.js';

function Navbar() {
  const [input, setInput]= useState("");

  const dispatch = useDispatch();


  // adds items to the array after clicking on add button
const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addItems = () => {
    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput("");
  };



  return (
   
      <div className="navbar">
  <input type="text" placeholder="Add item" value={input} onChange={handleChange} />
  <button onClick={addItems}>Add</button>
</div>


   
  )
}

export default Navbar