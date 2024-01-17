
import React from 'react';
import './App.css'; // Import your external styles here
import Map from './map';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Google Maps App</h1>
      </header>
      <main className="app-main">
        <Map />
      </main>
    </div>
  );
}

export default App;
