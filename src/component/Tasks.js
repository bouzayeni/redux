import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, editTask,isdone } from '../actions/taskAction'
import './Tasks.css'


const Tasks = ({id,content,isdone:isDone}) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const[contents,setContents]=useState('')
    const handleClose = () => setShow(false);
    return (
        <div className='dest'>
             
         {   <h3 className='he' style={{
  textDecoration: isDone ? 'line-through' : 'none'
             }}>{content}</h3> }
         
            <button  className='hi' onClick= {()=>dispatch(isdone(id))}><i class="far fa-check-circle "></i></button>
            <button className='hii' onClick={()=>dispatch(deleteTask(id))}><i class="fas fa-trash-alt "></i>
            </button>
               
            
            <button className='hiii' onClick={()=>setShow(true)} ><i class="far fa-edit "></i></button>
            {
    show?
    <div>
     <input
        type="text"
        placeholder="Content"
        onChange={(e) => setContents(e.target.value)}
        value={contents}
      />
    <button className='hiiii' onClick={()=>dispatch(editTask(id,contents))} >Edit Task</button> 
    </div>
   
    :null
    
                }
            
        </div>
    )
   
}

export default Tasks
