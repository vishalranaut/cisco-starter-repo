
import React from 'react';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';

function App() {
  return (
    <div>
      <Banner />
      <Exhibit title="System Info">
        <p>This could be your OS or browser details.</p>
      </Exhibit>
      <Exhibit title="Weather Forecast">
        <p>Some weather component could go here.</p>
      </Exhibit>
    </div>
  );
}

export default App;
