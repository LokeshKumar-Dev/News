import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

class Index extends Component{
  render(){
    return(
      <>
          <App />
      </>
    );
  }
}

const store = createStore(reducers,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
  <Index/>
  </Provider>,
  document.querySelector('#root')
);
