
import { ADD,EDIT ,DELETE,ISDONE } from '../actions/Types';


const initialState = {
  ListTask :[]}

 const taskReducer = (state = initialState, {type,payload}) => {
    switch (type) {
      case ADD:
        return { ...state, ListTask: [...state.ListTask, payload] };
      case EDIT:
        return {...state, ListTask: state.ListTask.map((el) => el.id === payload.id ? {...el,content: payload.content}: el ) };
      case ISDONE:
        return { ...state, ListTask: state.ListTask.map((el) => el.id === payload ? {...el, isdone: !el.isdone }: el ) };
      case DELETE:
        return {...state, ListTask: state.ListTask.filter(({ id }) => id !== payload),
        };
      default:
        return state;
    }
  };
  
   export default taskReducer;