import React from 'react';
import {connect} from 'react-redux';

const Li =(props)=>{
    
    const {vals,id,deletes} = props;
    return(
        <ul>
            <li key={id}>
                <input type='checkbox'  />
                {vals}
                <button  >x</button>
            </li>
           
          
        </ul>
    )
}

export default connect()(Li);


