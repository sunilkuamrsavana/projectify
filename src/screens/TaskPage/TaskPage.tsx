import React from 'react'
import DragAndDrop from '../../components/DragAndDrop'
import { v4 as uuidv4 } from "uuid";
import { getDocs } from 'firebase/firestore';
import { tasks } from '../../firebase';

function TaskPage() {
  const columns = {
    delayed: "Delayed",
    progress: "In progress",
    completed: "Completed ",
    onhold: "On Hold",
    open: "Open",
  };
  const sampleTodos = [
    {
      id:uuidv4(),
      title: "Todo item 1",
      column: "delayed",
    },
    {
      id:uuidv4(),
      title: "Todo item 2",
      column: "delayed",
    },
    {
      id:uuidv4(),
      title: "Todo item 3",
      column: "delayed",
    },
  ];
  getDocs(tasks).then((response)=>{
    let task:any =[]
    response.docs.forEach((doc)=>{task.push({...doc.data(),id:doc.id})})
    console.log(task)
})
  return (
    <div>
      <DragAndDrop columns={columns} items={sampleTodos}/>
    </div>
  )
}

export default TaskPage
