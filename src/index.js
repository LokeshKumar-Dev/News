import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

import './css/style.css'

class Index extends Component{
  render(){
    return(
      <div className="widget">
        <div className="wra">
          <h1>What's Weather!</h1>
          <App />
        </div>
      </div>
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
