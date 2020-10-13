import newsApi from '../apis/newsApi';

export const FetchNews = (country, category) => async dispatch => {
  const news = await newsApi.get(`?country=${country}&category=${category}&apiKey=33634c3d649745ab9599c95b7176de62`)
  dispatch({type:'FETCH_HEADLINES', payload:news.data })
}