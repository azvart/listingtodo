import React from 'react';
import {connect} from 'react-redux';

const Li =(props)=>{
    const {value} = props;
    return(
        <ul>
            {value.map((e)=><li>
                <input type="checkbox"  onClick={props.changeHandle}/>
                {e}
                <button onClick={props.remove}>x</button>
            </li>)}
          
        </ul>
    )
}

export default connect()(Li);


