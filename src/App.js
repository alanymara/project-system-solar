import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import MissionCard from './components/MissionCard';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Missions />
        <MissionCard />
      </div>
    );
  }
}

export default App;
