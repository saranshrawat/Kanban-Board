import React from 'react'
import { useSelector } from 'react-redux';

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
    <div style={{display:'flex',flexDirection:'column', gap:'10px', flexWrap:'wrap', width:'300px'}}>
         
            {
               filteredTasks.map((task)=>(

      <div key={task.id} 
           onDragStart={(e)=>handleDragStart(e, task.id)}
            draggable={true}
           style={{ 
            color:'black',
            padding: '6px 12px',
            cursor:'grab',
            border: '1px solid black',
            borderRadius: '20px',
            background: 'white',
            width:'auto',
            maxWidth: '100%',     // prevents overflow
            wordBreak: 'break-word'}}>
                        {task.text}
                    </div>
                ))
            }
         

         
    </div>
  )
}

export default Chips