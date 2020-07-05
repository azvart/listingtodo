export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CHANGE_TODO = "CHANGE_TODO";

export const addTodo = (newtext) =>({
    
    type:ADD_TODO,
    newtext
});

export const deleteToDo = (id)=>({
    type:DELETE_TODO,
    id
});

export const changeToDo = (id)=>({
    type:CHANGE_TODO,
    id
});

