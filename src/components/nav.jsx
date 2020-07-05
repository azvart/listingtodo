import React from 'react';
import {Link} from 'react-router-dom';



const Nav = ()=>{
    return(
        <div>
            <Link to='active'>Active</Link>
            <Link to='complete'>Complete</Link>
            <Link to='delete'>Delete</Link>
        </div>
    )
}


export default Nav;