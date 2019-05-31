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
          date: 'today',
          link: 'www.google.com',
          lat: 47.628013,
          lng: -122.355167
        },
        {
          text: '8:00pm',
          date: 'tomorrow',
          link: 'www.google.com',
          lat: 47.648013,
          lng: -122.375167
        }
      ],
    };
  };
  setFilter = (e) => {
    console.log(e.target.textContent.match(/Events (.+)/)[1].toLowerCase());
    this.setState({filter: e.target.textContent.match(/Events (.+)/)[1].toLowerCase()})
    console.log(this.state.places.filter(eventObj => eventObj.date === this.state.filter));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar clickHandler={this.setFilter} />
        </header>
        <div className="map-div">
          <MapContainer places={this.state.places} />
        </div>
      </div>
    );
  }
}

export default App;
