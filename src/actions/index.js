import openweathermap from '../apis/openweathermap';

export const fetchWeather = (searchValue) => async dispatch => {
  await openweathermap.get(`/weather?q=${searchValue}&appid=9af1d53ab396d07e060362a1b6c5c8cb`)
  .then(response => dispatch({type:'FETCH_WEATHER_SEARCH',payload:response.data}))
  .catch(err => alert('WRONG INPUT,CHECK YOUR SEARCH VALUE'))

};

export const fetchWeatherCoords = (lat ,long) => async dispatch => {
  const response = await openweathermap.get(`/weather?lat=${lat}&lon=${long}&appid=9af1d53ab396d07e060362a1b6c5c8cb`);
  dispatch({type:'FETCH_WEATHER_COORDS',payload:response.data});
};
