import React,{useState} from 'react';
import {deleteToDo,changeToDo, addTodo} from './store/actions';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import {Route} from 'react-router-dom';
import Li from './components/li';
import Nav from './components/nav';


const App=(props)=>{
  
  const {listing,addTodo,id,deleteToDo,changeToDo} = props;
  const [values, setValues] = useState('');

  return (
    
    <div >
    
       <input type="text" value={values} onChange={(e)=>setValues(e.target.value)} />
       <button onClick={()=>addTodo({text:values,  id:id,status:'/active'})}>ADD</button>
     
      <div>
        
        
        
        {listing.map((e)=><Route path={e.status} render={()=><Li vals={e.text} id={e.id}  />} />)}
        <Nav></Nav>
      </div>
    </div>
    
  );
}
const putStateAction =(state)=>{
  return{
    listing: state.list,
    id:state.list.reduce((maxId,todo)=>Math.max(todo.id,maxId), -1)+1,
    
    

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
