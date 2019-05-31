import React, {Component} from 'react';
import './App.css';
import MapContainer from './MapContainer';
import Navbar from './Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'today',
      places: [
        {
          text: '5:00pm',
          link: 'www.google.com',
          lat: 47.628013,
          lng: -122.355167
        },
        {
          text: '8:00pm',
          link: 'www.google.com',
          lat: 47.648013,
          lng: -122.375167
        }
      ],
    };
  };
  changeLocations = (e) => {
    console.log(e.target);
    // this.setState({filter: e.target.value})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar clickHandler={this.changeLocations} />
        </header>
        <div className="map-div">
          <MapContainer places={this.state.places} />
        </div>
      </div>
    );
  }
}

export default App;
