import {ADD_TODO} from './actions';
import {CHANGE_TODO} from './actions';
import {REMOVE_TODO} from './actions';

const initialState = {
    text:'',
    
}

export const Reducers = (state=initialState,action)=>{
    switch(action.type){
        case ADD_TODO:
        return {...state, text: action.payload,id:action.id,complete:false};
        case CHANGE_TODO:
        return state.map(change=>{
            if(change.id !==action.id){
                return change;
            }
        return{
            ...change, complete:!change.complete
        }
        });
        case REMOVE_TODO:
        let index;
        state.map((t,i)=>{
            if(t.id === action.id){
                index=i;
            }
        });
        return[
            ...state.slice(0,index),
            ...state.slice(index +1)
        ]
        default:
        return state;
    }
}


