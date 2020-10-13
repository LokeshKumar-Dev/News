export default (state =[], action) => {
  switch (action.type) {
    case "FETCH_HEADLINES":
      return action.payload
    default:
      return state
  }
}
