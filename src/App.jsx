import React,{useState} from 'react';
import {add,change,removeTodo} from './store/actions';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import {Route} from 'react-router-dom';
import Li from './components/li';
import Nav from './components/nav';


const App=(props)=>{

  const {complete,id,text,add,change,removeTodo} = props;


  const [value,setValue] = useState({
    item: [],
   
  });

  const handleClick = ()=>{
    let newItem ={
      text: text
    }
    setValue(({
      item: value.item.concat(newItem.text)
    }))
    
  }
  const changeHandle = (event)=>{
    change(event.complete);
  }
  const removeHandle = ()=>{
    removeTodo();
  }
  return (
    
    <div >
     
      <input type="text" value={text}  placeholder='write the task'  onChange={(event)=>add(event.target.value)}/>
      <div>
        <button onClick ={handleClick}>Add</button>
      </div>
      <div>
     
        
            <Nav/>
            
            <Route path='/active' render={()=> <Li value={value} id={id} complete={complete} change={changeHandle} remove={removeHandle} />}/>
            {/* <Route path ='/complete' render={()=>}/>
            <Route path ='/delete' render={()=>}/> */}

      </div>
    </div>
    
  );
}
const putStateAction =(state)=>{
  return{
    text: state.text,
    id: state.id,
    complete:false

  }
};
const putDispatchAction =(dispatch)=>{
  return{
  add: bindActionCreators(add,dispatch),
  change: bindActionCreators(change,dispatch),
  removeTodo: bindActionCreators(removeTodo,dispatch)
  }
};
export default connect( putStateAction,putDispatchAction)(App);
