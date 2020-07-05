export const ADD_TODO = "ADD_TODO";
export const CHANGE_TODO = "CHANGE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

let todo =0;
export const add=(newtext)=>{
    
    return{
        type: ADD_TODO,
        payload:newtext,
        id:todo++,
        
    };
};

export const change =(id)=>{
    return{
        type: CHANGE_TODO,
        id
    };
};
export const removeTodo = (id)=>{
    return{
        type: REMOVE_TODO,
        id
    };
};

