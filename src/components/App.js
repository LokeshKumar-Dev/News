import React,{ Component } from 'react';
import PostList from './postList';
import SearchBox from './SearchBox';

class App extends Component{
  render(){
    return(
      <div className="widget-main">
        <div className="widget-climate-wthree">

          <SearchBox />{/*search functional*/}
          <PostList />{/*posting functional*/}

          <div className="clear"></div>

        </div>
      </div>
    );
  }
}

export default App;
