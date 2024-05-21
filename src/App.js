import './App.css';
import { useEffect, useRef } from 'react';
import webGLFluidEnhanced from 'webgl-fluid-enhanced';
import Home from './Page/home';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    webGLFluidEnhanced.simulation(canvasRef.current, {
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 512,
        CAPTURE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 0.97,
        VELOCITY_DISSIPATION: 0.2,
        PRESSURE: 0.8,
        PRESSURE_ITERATIONS: 20,
        CURL: 30,
        INITIAL: true,
        SPLAT_AMOUNT: 4,
        SPLAT_RADIUS: 0.25,
        SPLAT_FORCE: 5000,
        SPLAT_KEY: 'Space',
        SHADING: true,
        COLORFUL: true,
        COLOR_UPDATE_SPEED: 15,
        COLOR_PALETTE: ['#FF4500', '#32CD32', '#1E90FF', '#FFD700', '#FF69B4', '#00FFFF'],
        HOVER: true,
        BACK_COLOR: '#000000',
        TRANSPARENT: false,
        BRIGHTNESS: 0.8,
        BLOOM: true,
        BLOOM_ITERATIONS: 8,
        BLOOM_RESOLUTION: 150,
        BLOOM_INTENSITY: 0.9,
        BLOOM_THRESHOLD: 0.9,
        BLOOM_SOFT_KNEE: 0.7,
        SUNRAYS: true,
        SUNRAYS_RESOLUTION: 196,
        SUNRAYS_WEIGHT: 1.0
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

