import { Grid } from '@material-ui/core';
import React,{Component} from 'react';
import { connect } from 'react-redux';

import MediaCard from './card';

class PostList extends Component{

  onValid = () => {
    return (
      <>
        <Grid container spacing={8}>
        {this.props.posts.articles.map((news, i) => { return (
            <Grid key={i} item md={4}>
              <MediaCard news={news} />
            </Grid>
        ) })}
        </Grid>
      </>
    );
  };

  render(){
    return(
      <>
        { this.props.posts.length !== 0 ? this.onValid() : null}
      </>
    );
  }
}

const mapStateToProps = state => {
  return ({ posts:state.news });
};

export default connect(mapStateToProps)(PostList);
