import React from 'react';
import {connect} from 'react-redux';

const Li =(props)=>{
    const {value} = props;
    return(
        <ul>
            {value.item.map((e)=><li key={props.id}>
                <input type="checkbox" checked={props.complete} onChange={props.changeHandle}/>
                {e}
                <button onClick={props.remove}>x</button>
                </li>)}
        </ul>
    )
}

export default connect()(Li);