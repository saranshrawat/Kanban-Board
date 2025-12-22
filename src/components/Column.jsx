import React from 'react'
import { useDispatch } from 'react-redux';
import Chips from './chips'
import { moveTask } from '../global/slice';

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
       <div  
        style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:'center'}}
       >


        {
            columns.map((col)=>(
                    <div 
                    onDragOver={(e)=>e.preventDefault()}
                    onDrop={(e)=>handleDrop(e,col.id)}
                    key={col.id}
                     style={{ width: '100%',padding:"15px", borderRadius: "8px",height:"60vh",border:'5px solid white'}}
                    > 
                      <h2>{col.title}</h2> 


       {/*  render the chips component for each column and pass the status of current column as props */}
                    <Chips status={col.id}/>

                    </div>

            ))




        }

       </div> 


  )
}

export default Column