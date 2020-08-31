import React,{Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { fetchWeather ,fetchWeatherCoords } from '../actions';

class SearchBox extends Component{
  state = { term:'' };

  onFormSubmit = (event) => {
    event.preventDefault();

    const { term } = this.state;
    this.props.fetchWeather(term);

    this.setState({term: ''});
  }

  componentDidMount(){
    console.log('cdm geo');
    navigator.geolocation.getCurrentPosition(
      position => this.onGeolocation(position),
      err => alert("ALLOW 'LOCATION' FOR GREATER EXPERIANCE!")
    );
  }

  onGeolocation = (event) => {
    const {latitude ,longitude} = event.coords;
    console.log(latitude ,longitude);
    this.props.fetchWeatherCoords(latitude, longitude);
  };

  render(){
    return(
        <form onSubmit={this.onFormSubmit}>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="City Name" value={this.state.term} onChange={e =>{this.setState({term:e.target.value})}}/>
            <div className="input-group-append">
              <button className="btn btn-outline-light" type="submit">Search</button>
            </div>
          </div>
        </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchWeather ,fetchWeatherCoords },dispatch);
};
export default connect(null,mapDispatchToProps)(SearchBox);
