import React from 'react'
import { useSelector } from 'react-redux';
import './kanban.css'

function Chips({status}) {

   const tasks = useSelector(state => state.global);           //get all the tasks from store



    // filter the tasks based on the status of columns provied in props
   const filteredTasks = tasks.filter(task => task.status === status); 


 //when drag is stated save the data of the dragged column  and allow it to move
 const handleDragStart=(e,taskId)=>{
    e.dataTransfer.setData("taskId", taskId);
    e.dataTransfer.effectAllowed = "move";
 }

  return (
   <div className="chips-container">
  {filteredTasks.map((task) => (
    <div
      key={task.id}
      className="chip"
      draggable
      onDragStart={(e) => handleDragStart(e, task.id)}
    >
      {task.text}
    </div>
  ))}
</div>

  )
}

export default Chips