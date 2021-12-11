/*import React,{useState} from 'react'
import './AddTask.css'
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
    const[input,setInput]=useState('')
    const [task,setTask]=useState("")
    const[listTask,setListTask] =  useState([])

    const addTodo =(e)=>{
        e.preventDefault()
        setListTask([...listTask, {id:uuidv4(),desc:task,isDone:false}])
        setTask('')
    }
    return (
        <div className='input'>
            <input type='text' value={input} onChange={e=>setInput(e.target.value)}/>
            <button onClick={addTodo}>Add!</button>
        </div>
    )
}

export default AddTask*/
import { useState } from 'react';
import './AddTask.css'
import { v4 as uuidv4 } from 'uuid';
import {Button,Modal} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { addTask } from '../actions/taskAction';

function AddTask() {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    const [Content, setContent] = useState('')
    const handlesubmit =(e)=>{
        e.preventDefault()
        dispatch(addTask({id:uuidv4(),content:Content, isdone:false}))
        handleClose()
    }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add a new task
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
         
          <Modal.Body>
            <form onSubmit={handlesubmit}>
         
            <input type='text' value={Content} onChange={(e)=>setContent(e.target.value)} required/>
            <button  type='submit'>Add Something !</button>
            </form>
          </Modal.Body>
          
        </Modal>
      </>
    );
  }
  export default AddTask


