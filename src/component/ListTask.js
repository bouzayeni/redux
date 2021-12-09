/*import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {deleteTask,edit,isDone}from './ToDoActions'
const ListTask = () => {
    const Task=useSelector(state=>state.ToDoReducer)
    const dispatch=useDispatch();
    return (
        <div>
            <p style={{textDecoration: elt.isDone ? 'line-through' : 'none'}}>{elt.desc}</p>
              <button onClick={()=>{dispatch(deleteTask(id))}}>Delete</button> 
              <button onClick={()=>{dispatch(isDone)(id)}}>Done</button>
              <button onClick={()=>{dispatch(edit)(id)}}>Edit</button>
        </div>
    )
}

export default ListTask*/
import React from 'react'
import { useSelector} from 'react-redux'
import Tasks from './Tasks'
const ListTask = () => {
    const tasks=useSelector(state=>state.task.ListTask)
    return (
        <div>
            {tasks.map(task=><Tasks key={task.id} {...task} />)}
        </div>
    )
}

export default ListTask
