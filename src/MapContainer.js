import React, {Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import controllable from 'react-controllables';
import Place from './Place';
require('dotenv').config();

const LocMarker = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [
        {
          text: 'C',
          lat: 47.628013,
          lng: -122.355167
        },
        {
          text: 'D',
          lat: 47.648013,
          lng: -122.375167
        }
      ],
    };

  }

  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    placeCoords: PropTypes.any
  };

  static defaultProps = {
    center: {
      lat: 47.608013,
      lng: -122.335167
    },
    zoom: 11
  };

  handleClick = (e) => {
    console.log("clicky");
  }

  render() {
    let places = this.state.places.map((place, i) => {
      return (
        <Place
          lat={place.lat}
          lng={place.lng}
          text={place.text}
          onClick={this.handleClick}
        />
      )
    })
    return (
      // Important! Always set the container height explicitly

      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC7u8bJnMAE9H5OckZHCbX4ZYi_ONzv9OI' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {places}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
