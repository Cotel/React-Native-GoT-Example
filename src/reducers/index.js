import {combineReducers} from 'redux';
import charactersReducer from './character.reducer';

const rootReducer = combineReducers({
    characters: charactersReducer
});

export default rootReducer;