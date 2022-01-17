import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { getEpisodes } from '../../actions'
import "./Episodes.css"
import Spinner from "../../spinner"

export  function Episodes(props) {

    useEffect(() => {
       props.getEpisode()
    }, [])

    return (
        <div className='box_episode'>
             <div className='box_table_detail'>
                 <table border="1">
                     <tr>
                         <th>Title</th>
                         <th>Season</th>
                         <th>Characters</th>
                         <th>Episode</th>
                         <th>Serie</th>
                     </tr>  
                         
                     {
                      props.episodes ?  props.episodes.map(u=>{

                       
                     
                        
                         
                          if(u.series==="Breaking Bad"){
                              return (  
                     <tr>
                         
                            <td>{u.title}</td> 
                            <td> {u.season}</td> 
                            <td>{u.characters}</td>
                            <td>{u.episode}</td> 
                            <td>{u.series}</td> 
                              
                       </tr>
                       
                       )}
                         
                             }): <Spinner/>
                            }
                    
                 </table>
             </div>
        </div>
    )    
                        }
function mapStateToProps(state){
    return{
        episodes:state.episodes
    }
}
function mapDispatchToProps(dispatch){
    return{
        getEpisode: ()=>dispatch(getEpisodes())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Episodes)
