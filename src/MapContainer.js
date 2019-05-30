import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
require('dotenv').config()
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const myapikey = `${process.env.REACT_APP_GOOGLE_MAPS_KEY}`

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          bootstrapURLKeys={{ key: myapikey }}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap