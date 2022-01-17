import React,{useState,useEffect}  from 'react'
import { connect } from 'react-redux'
import {  searchCharacter } from '../../actions'
import Spinner from '../../spinner'
import {Link} from "react-router-dom"
import "./Characters.css"

import "./Characters.css"

export  function Characters(props) {
    
    const [entry, setEntry]=useState("")

    useEffect(() => {
        props.getCharacter(entry)
        
    }, [entry])
   
    const handleChange=(e)=>{
        setEntry(e)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setEntry({
            name:""
        })
    }
    

    return (
        <div className='box'>

            <form onSubmit={(e)=>handleSubmit(e)}>
                <div> 
                <input type="text" placeholder="Search" value={entry.name}
                onChange={(e)=>handleChange(e.target.value)}
                />
                </div>
            </form>
            <hr />
            {
                
                    props.character ?
                    props.character.map(el=>
                        <div className='detail' key={el.char_id}>
                        <Link to={`/detail/${el.char_id}`}>
                            {el.name} 
                         </Link>
                            
                        </div>
                        
                        ): <Spinner/>
                
            }
        </div>
    )
}
function mapStateToProps(state){
    return{
        character:state.character
    
    }
}
function mapDispatchToProps(dispatch){
    return{
        getCharacter: (entry)=>dispatch(searchCharacter(entry)),
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Characters)
