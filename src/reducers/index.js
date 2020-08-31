import { combineReducers } from 'redux';
import postWeather from './postWeather';
 
export default combineReducers({
  weather:postWeather
});
