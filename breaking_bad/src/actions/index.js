export const ADD_QUOTE="ADD_QUOTE"
export const SEARCH_CHARACTER="SEARCH_CHARACTER"
export const GET_CHARACTER_DETAIL="GET_CHARACTER_DETAIL"
export const GET_EPISODES="GET_EPISODES"
export const EMPTY_CHARACTER="EMPTY_CHARACTER"


export function addQuote(){
    return function(dispatch){
        return fetch("https://www.breakingbadapi.com/api/quote/random")
        .then(response=>response.json())
        .then(json=>{
            dispatch({type:ADD_QUOTE, payload:json[0]})})

    }
}
export function searchCharacter(name){
    return function(dispatch){
        return fetch(`https://www.breakingbadapi.com/api/characters?name=${name}`)
        .then(resp=>resp.json())
        .then(json=>dispatch({type:SEARCH_CHARACTER,payload:json}))
    }
}
export function addCharacterDetail(query){
    return function(dispatch){
        return fetch(`https://www.breakingbadapi.com/api/characters/${query}`)
        .then(resp=>resp.json())
        .then(json=>dispatch({type:GET_CHARACTER_DETAIL,payload:json[0]}))
    }
}
export function getEpisodes(){
    return function(dispatch){
        return fetch("https://www.breakingbadapi.com/api/episodes")
        .then(resp=>resp.json())
        .then(json=>dispatch({type:GET_EPISODES,payload:json}))
    }
}
export function empty_character(){
    return function(dispatch){
           dispatch({type:EMPTY_CHARACTER})
    }
    }


