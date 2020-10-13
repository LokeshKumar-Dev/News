import React,{ Component } from 'react';
import PostList from './postList';
import SearchBox from './SearchBox';

class App extends Component{
  render(){
    return(
      <>
        <SearchBox />{/*search functional*/}
        <PostList />{/*posting functional*/}
      </>
    );
  }
}

export default App;
