import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { addCharacterDetail, emptyCharacter, empty_character } from '../../actions'
import { useParams } from 'react-router-dom'
import "./CharacterDetail.css"
import Spinner from '../../spinner'

export  function CharacterDetail(props) {
     console.log(props)
    const {entry}=useParams()
    
    useEffect(() => {
        props.emptyCharacter()
        props.getCharacterDetail(entry)
    }, [entry])

    return (
        <div className='box_detail'>
             <div className='box_table_detail'>
                 <table border="1">
                     <tr>
                         <th>Name</th>
                         <th>Status</th>
                         <th>Occupation</th>
                         <th>Nickname</th>
                         <th>Category</th>
                         <th>Image</th>
                     </tr>
                  { 
                       props.detail ?
                     <tr>
                    
                        <td>{props.detail.name}</td> 
                        <td> {props.detail.status}</td> 
                        <td>{props.detail.occupation}</td>
                        <td>{props.detail.nickname}</td> 
                        <td>{props.detail.category}</td> 
                        <td ><img className='img_img'  src={props.detail.img} alt="" /></td> 
                        
                         
                       
                     </tr>: <Spinner/>
                     }
                 </table>
             </div>
        </div>
    )
}
function mapStateToProps(state){
    return{
        detail:state.detail
    }
}
function mapDispatchToProps(dispatch){
    return{
        emptyCharacter: ()=>dispatch(empty_character()),
        getCharacterDetail: (entry)=>dispatch(addCharacterDetail(entry))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CharacterDetail)
