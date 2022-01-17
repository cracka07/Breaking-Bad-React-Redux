import React,{useEffect} from 'react'
import { addQuote } from '../../actions'
//import home from "../img/bg.jpg"
import "./Home.css"
import {connect} from "react-redux"
import Spinner from '../../spinner'



export  function Home(props) {
        console.log(props)
    useEffect(() => {
       props.getQuote()
    }, [])


    return (
        
        <div className='Home'>
         
        
         {
             
             props.quote ? 
              <div className='cita'> 
               <hr /> 
             <h4>{props.quote.quote}</h4>
             <h5>{props.quote.author}</h5>
             
             </div>
             
             : <Spinner/>
            
                
             
         } 
        
           
        </div>
        
    )
    
}
function mapStateToProps(state){
    return{
        quote:state.quote
    }
}
function mapDispatchToProps(dispatch){
    return{
        getQuote: ()=>dispatch(addQuote())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
