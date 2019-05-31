import React, {Component} from 'react';
import './App.css';
import MapContainer from './MapContainer';
import Navbar from './Navbar';
const moment = require('moment')


const dataFile = require('./events.json')
const stringData = JSON.stringify(dataFile);
const events = JSON.parse(stringData);
console.log(events.events);

let placePool = [
  {
    text: '5:00pm',
    date: '2019-05-31',
    link: 'www.google.com',
    lat: 47.628013,
    lng: -122.355167
  },
  {
    text: '8:00pm',
    date: '2019-05-31',
    link: 'www.google.com',
    lat: 47.648013,
    lng: -122.375167
  }
]

let defaultFilter = moment(new Date()).format().match(/.{10}/)[0]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: defaultFilter,
      places: [],
    };
  };
  convertDateEpochUTC(date) {
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()).getTime()/1000 - 25200;
  }
  convertEpochToLocal(utcSeconds) {
    let d = new Date(0);
    d.setUTCSeconds(utcSeconds);
    return d;
  }
  componentDidMount = () => {
    console.log(this.state.filter);
    this.setState({places:events.events})
  }
  setFilter = (e) => {
    let dateFilter = e.target.textContent.match(/Events (.+)/)[1].toLowerCase()
    console.log(dateFilter);
    console.log(this.state.filter);
    console.log(this.state.places);
    if (dateFilter === 'today') {
      let today = new Date();
      today = moment(today).format().match(/.{10}/)[0]
      console.log(today);
      let eventsList = events.events.filter((el) => {
        return el.local_date === this.state.filter
      });
      this.setState(
        {
          filter: today,
          places: eventsList
        }
      )
    } else {
      let today = new Date();
      today = moment(today).add(1,'days').format().match(/.{10}/)[0]
      console.log(today);
      let eventsList = events.events.filter((el) => {
        return el.local_date === this.state.filter
      });
      this.setState(
        {
          filter: today,
          places: eventsList
        }
      )
    }
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
