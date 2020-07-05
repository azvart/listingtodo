import {ADD_TODO,CHANGE_TODO,DELETE_TODO} from './actions';



const initialState = [{
    
    text:'',
    completed:false,
    id:0
    
}];

export const Reducers = (state=initialState,action)=>{
    switch(action.type){
        case ADD_TODO:
        return [...state,{
            id:state.reduce((maxId,todo)=>Math.max(todo.id,maxId), -1)+1,
            completed:false,
            text:action.newtext
        }];
        case DELETE_TODO:
        return state.filter(todo=>todo.id !==action.id);
        case CHANGE_TODO:
        return state.map(todo=>todo.id === action.id ?{...todo,completed: !todo.completed}:todo);
        
        default:
        return state;
    }
}


