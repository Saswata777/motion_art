import './App.css';
import { useEffect, useRef } from 'react';
import webGLFluidEnhanced from 'webgl-fluid-enhanced';
import Home from './Page/home';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    webGLFluidEnhanced.simulation(canvasRef.current, {
      SIM_RESOLUTION: 256,
      DENSITY_DISSIPATION: 2,
      PRESSURE_ITERATIONS: 30,
      VELOCITY_DISSIPATION: 0.1,
      SPLAT_FORCE: 9000,
      BRIGHTNESS: 0.5,
      BLOOM_SOFT_KNEE: 0.7,
      // COLOR_UPDATE_SPEED: 10,
      CURL: 40, // Higher value for more turbulence
      COLOR_PALETTE: ['#61dafb', '#a8dadc', '#457b9d', '#1d3557', '#f1faee', '#9BFA7B','#FA55D9'],
    });
  }, []);

  return (
    <div className="App">
      <canvas ref={canvasRef} style={{position: 'fixed',top: 0,left: 0,width: '100vw',height: '100vh',zIndex:1}} />
      <div style={{ position: 'relative', zIndex: 'revert-layer' }}>
        <Home />
      </div>
    </div>
  );
}

export default App;

