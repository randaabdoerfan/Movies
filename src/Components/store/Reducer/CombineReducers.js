
import { combineReducers } from 'redux'
import LoaderReducer from './LoaderReducer';
import ModeReducer from './ModeReducer';
import FavReducer from './FavReducer';
import LoginReducer from './LoginReducer';

const CombineReducers = combineReducers({
    loader: LoaderReducer,
    mode :ModeReducer,
    fav:FavReducer,
    login:LoginReducer

})
export default CombineReducers;

