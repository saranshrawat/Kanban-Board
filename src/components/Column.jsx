import React from 'react'
import { useDispatch } from 'react-redux';
import Chips from './chips'
import { moveTask } from '../global/slice';
import './kanban.css'

function Column() {
  const dispatch= useDispatch();


  // created the 3 columns for kanban board
  const columns=[
    {id:'todo', title: "TODO"},
    {id:'progress', title: "Progress"},
    {id:'done', title:"Done"}
  ]


  // when a task is dropped in a column update its status in the store
const handleDrop=(e, newStatus)=>{
   const taskId= e.dataTransfer.getData("taskId");
   dispatch(moveTask({id:taskId, status:newStatus}))
}
   
    return (
       <div className="columns-container">
  {columns.map((col) => (
    <div
      className="column"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => handleDrop(e, col.id)}
      key={col.id}
    >
      <h2>{col.title}</h2>
      {/* this renders the chips component for each column */}
      <Chips status={col.id} />
    </div>
  ))}
</div>

  )
}

export default Column
