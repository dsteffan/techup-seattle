import React from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './MapContainer';
import Navbar from './Navbar';

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
