import React,{Component} from 'react';
import { fetchWeather ,fetchWeatherCoords } from '../actions';
import { connect } from 'react-redux';
import 'weather-icons/css/weather-icons.css';

class PostList extends Component{
  //ICON SELECTOR
  onCliChange = (id) => {
    if(id === 800){
      //CLEAR SKY
      return ['var(--img-6)','var(--col-6)','wi-day-sunny'];

    }else if (id>800 && id<805) {
      //CLOUD
      return ['var(--img-2)','var(--col-2)','wi-cloudy'];

    }else if (id>700 && id<782) {
      //FOG,MIST
      return ['var(--img-5)','var(--col-5)','wi-windy'];

    }else if (id>599 && id<623) {
      //SNOW
      return ['var(--img-4)','var(--col-4)','wi-snowflake-cold'];

    }else if (id>199 && id<233) {
      //THUNDERSTORM
      return ['var(--img-3)','var(--col-3)','wi-thunderstorm'];

    }else {
      //RAIN
      if(id>299 && id<322){
        return ['var(--img-1)','var(--col-1)','wi-sprinkle'];
      }else if(id>499 && id<505){
        return ['var(--img-1)','var(--col-1)','wi-showers'];
      }else {
        return ['var(--img-1)','var(--col-1)','wi-rain'];
      }
    }
  };

  //TEMPERATURE C0NVERT K TO C
  CalcTemp(temp){
    return Math.round(temp-273.15);
  };

  onValid = () => {
    //DESTRUCTION
    let { pressure ,temp ,temp_max ,temp_min ,humidity } = this.props.posts.main;
    let { speed } = this.props.posts.wind;
    let { description ,id } = this.props.posts.weather[0];
    const { name } = this.props.posts;
    const { country } = this.props.posts.sys;

    //TEMPERATURE C0NVERT (Function Call)
    temp = this.CalcTemp(temp);
    temp_max = this.CalcTemp(temp_max);
    temp_min = this.CalcTemp(temp_min);

    //WIND CONVERT SPEED MTR/SEC TO KM/H
    speed = Math.round(speed * 3.6);

    //IMAGE AND ICONS
    let icon = ['var(--img-def)','var(--col-def)',''];
    icon = this.onCliChange(id);
    document.body.style.backgroundImage = icon[0];
    var widget = document.getElementsByClassName('widget-main')[0];
    widget.style.backgroundImage = icon[1];

    //DATE TIME
    var d = new Date();
    var n = d.toDateString();

    return (
      <>
        {/*LEFT-WIDGET*/}
       <div className="widget-left">

         <div className="season">
           <div className="degree">
             <h4>Pressure</h4>
             <h3>{pressure}mb</h3>
           </div>
           <div className="date">
             <h6><i id="i-20" className='wi wi-barometer'></i></h6>
           </div>
            <div className="clear"> </div>
         </div>

         <div className="season w3">
           <div className="degree">
             <h4>Temperature</h4>
             <h3>{temp}°c</h3>
           </div>
           <div className="date temp">
             <h6><em>Temp_MAX:</em>{temp_max}°c</h6>
             <h6><em>Temp_MIN:</em>{temp_min}°c</h6>
           </div>
            <div className="clear"> </div>
         </div>

         <div className="season agile">
           <div className="degree">
             <h4>Humidity</h4>
             <h3>{humidity}%</h3>
           </div>
           <div className="date">
             <h6><i id="i-20" className='wi wi-humidity'></i></h6>
           </div>
            <div className="clear"> </div>
         </div>

         <div className="season">
           <div className="degree">
             <h4>Wind</h4>
             <h3>{speed}Km/h</h3>
           </div>
           <div className="date">
             <h6><i id="i-20" className='wi wi-strong-wind'></i></h6>
           </div>
            <div className="clear"> </div>
         </div>

       </div>
       {/*LEFT-WIDGET__END*/}

       {/*RIGHT-WIDGET*/}
       <div className="widget-right w3l">
         <p>{n}</p>
         <h4 id='place'>{name},{country}</h4>
         <h5 id='desc'>{description}</h5>
         {/*<img src="../images/icon/i-1.png" />*/}
         <h2><i className={`wi ${icon[2]} display-1`}></i></h2>
       </div>
       {/*RIGHT-WIDGET__END*/}
     </>
    );
  };

  render(){

    return(
      <>
      { this.props.posts.length !== 0 ? this.onValid() : null}
      <p id='des'></p>
     </>
    );
  }
}

const mapStateToProps = state => {
  return ({ posts:state.weather });
};

export default connect(mapStateToProps,{ fetchWeather ,fetchWeatherCoords })(PostList);
