import characters from './characters';
import {API_URL, LIST_CHARACTERS, SELECT_CHARACTER} from '../actions/character.actions';


const initialState = {
    list: [],
    activeCharacter: null
};

export default function charactersReducer(state=initialState, action) {
    switch (action.type) {
        case LIST_CHARACTERS:
            return {...state, list: action.payload}
        case SELECT_CHARACTER:
            return {...state, activeCharacter: action.payload}
        default:
            return state
    }
}