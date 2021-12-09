import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, editTask } from '../actions/taskAction'


const Tasks = ({id,Content}) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const[content,setContent]=useState('')
    return (
        <div className='dest'>
             
            <h3>{Content}</h3>
            <button onClick={()=>dispatch(deleteTask(id))}><i class="fas fa-trash-alt"></i>
            </button>
                {
    show?
    <div>
     <input
        type="text"
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
    <button onClick={()=>dispatch(editTask(id,content))}>Edit Task</button>
    </div>
    :null
                }
            
            <button onClick={()=>setShow(true)} ><i class="far fa-edit"></i></button>
           
            
        </div>
    )
   
}

export default Tasks
