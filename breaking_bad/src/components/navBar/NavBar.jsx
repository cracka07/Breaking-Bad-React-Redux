import React from 'react'
import {Link} from "react-router-dom"
import "./NavBar.css"

export default function NavBar() {
    return (
        <div className='nav'>
 <div> <Link to="/">Home</Link>  </div>
<div>  <Link to="/characters">Characters</Link>  </div>
 <div>   <Link to="/episodes">Episodes</Link>  </div> 
            
           
             
        </div>
    )
}
