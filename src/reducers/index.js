import {combineReducers} from 'redux';
import charactersReducer from './character.reducer';
import routerReducer from './router.reducer';

const rootReducer = combineReducers({
    characters: charactersReducer,
    routes: routerReducer
});

export default rootReducer;