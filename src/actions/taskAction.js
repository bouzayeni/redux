
import {ADD,EDIT,DELETE,ISDONE} from "./Types";
  
 
  export const addTask = (task) => {
    return {
      type: ADD,
      payload: task,
    };
  };
  
  
  export const editTask = (id,content ) => {
    return {
      type: EDIT,
      payload: { id,content },
    };
  };
  
  
  export const isdone = (id) => {
    return {
      type: ISDONE,
      payload: id,
    };
  };
  
 
  export const deleteTask = (id) => {
    return {
      type: DELETE,
      payload: id,
    };
  };