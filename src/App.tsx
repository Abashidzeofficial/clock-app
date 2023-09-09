import React from 'react';
import { useState } from 'react';
import './App.css';
import daytime from './images/mobile/daytime.png';
import nighttime from './images/mobile/bg-image-nighttime.jpg'
import './styles.css';
import sun from './images/desktop/icon-sun.svg';
import moon from './images/desktop/icon-moon.svg'

function App() {
  const [isMorning, setIsMorning] = useState(true); // 

  const hanldeChangeThem = () => {
    setIsMorning(!isMorning); // funqcia achens da aqrobs sun/moons
  }
  return (
    <div className={`container ${isMorning ? 'daytime-icon' : 'nighttime-icon'}`}>
      <img src={isMorning ? daytime : nighttime}
        alt="daytime" className="daytime-icon"
      />
      <div className="contrast">
        <button className="them" onClick={hanldeChangeThem}>
          <img src={isMorning ? sun : moon} alt="sun" className="sun" />
          <span className={isMorning ? 'sun-text' : 'moon-text'}>
            {isMorning ? 'GOOD MORNING' : 'GOOD EVENING'}
          </span>
        </button>
      </div>

    </div >
  );
}

export default App;
