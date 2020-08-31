export default (state = [],action) => {
  switch (action.type) {
    case 'FETCH_WEATHER_SEARCH':
      return action.payload;
    case 'FETCH_WEATHER_COORDS':
      return action.payload;
    default:
      return state;
  }
};
