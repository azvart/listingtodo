import React,{useState} from 'react';
import {deleteToDo,changeToDo, addTodo} from './store/actions';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import {Route} from 'react-router-dom';
import Li from './components/li';
import Nav from './components/nav';


const App=(props)=>{

  const {text,addToDo,deleteToDo,changeToDo} = props;

  return (
    
    <div >
     <form onSubmit={(e)=>addTodo(e.preventDefault(),
      e.terget.value)}>
       <input type="text" value={txt} onChange={}/>
       <button type='submit'>ADD</button>
     </form>
      
    </div>
    
  );
}
const putStateAction =(state)=>{
  return{
    text: state.map((e)=>e.text),
    id: state.map((e)=>e.id),
    complete:false

  }
};
const putDispatchAction =(dispatch)=>{
  return{
  addTodo: bindActionCreators(addTodo,dispatch),
  deleteToDo: bindActionCreators(deleteToDo,dispatch),
  changeToDo: bindActionCreators(changeToDo,dispatch)

  }
};
export default connect( putStateAction,putDispatchAction)(App);
