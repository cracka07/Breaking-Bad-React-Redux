import { ADD_QUOTE,GET_CHARACTER_DETAIL,EMPTY_CHARACTER,  GET_EPISODES,SEARCH_CHARACTER } from "../actions";

const initialState={
    quote:{},
    character:[],
    episodes:[],
    detail:{},
    emptyCharacter:{}
}

export default function rootReducer(state=initialState,action){
    switch(action.type){
        case ADD_QUOTE:
            return {
                ...state,
                quote:action.payload,
            }
        case SEARCH_CHARACTER:
            return {
                ...state,
                character:action.payload,
            }
        case GET_CHARACTER_DETAIL:
            return {
                ...state,
                detail:action.payload
            }
        case GET_EPISODES:
            return {
                ...state,
                episodes:action.payload,
            }
        case EMPTY_CHARACTER:
            return {
                ...state,
                emptyCharacter:{}

            }
        default:
            return {...state}
    }
}