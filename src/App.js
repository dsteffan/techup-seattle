import React from 'react';
import './App.css';
import MapContainer from './MapContainer';
import Navbar from './Navbar';

const dataFile = require('./events_formatted.json')
const stringData = JSON.stringify(dataFile);
console.log(stringData);
const events = JSON.parse(stringData);

console.log(events.name)


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      </header>
      <div className="map-div">
        <MapContainer />
      </div>
    </div>
  );
}

export default App;
