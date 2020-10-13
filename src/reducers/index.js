import { combineReducers } from 'redux';
import postNews from './postNews';
 
export default combineReducers({
  news : postNews
});
