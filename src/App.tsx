import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Particles } from 'react-tsparticles';

function App() {
  return (
    <div className="App">
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: '#0d47a1',
            },
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#ffffff',
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: 5,
            },
            move: {
              direction: 'none',
              speed: 2,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

export default App;
