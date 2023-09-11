import React from 'react';
import { useState } from 'react';
import './App.css';
import daytime from './images/mobile/daytime.png';
import nighttime from './images/mobile/bg-image-nighttime.jpg';
import './styles.css';
import sun from './images/desktop/icon-sun.svg';
import moon from './images/desktop/icon-moon.svg';
import uparrow from './images/desktop/icon-arrow-up.svg';
import downarrow from './images/desktop/arrowdown.png';

function App() {
  const [isMorning, setIsMorning] = useState(true);

  const [detailVisible, setDetailVisible] = useState(false); // dacherisas cvlis less/more icons steiti

  const textColor = isMorning ? 'white' : 'black';  // roca evening/morning icvleba es cvlis textis fers 
  const backgroundColor = isMorning ? 'black' : 'grey';

  const hanldeChangeThem = () => {
    setIsMorning(!isMorning); // funqcia achens da aqrobs sun/moons
  }
  const handleDetailVisible = () => {
    setDetailVisible(!detailVisible);
  }
  return (
    <div className={`container ${isMorning ? 'daytime-icon' : 'nighttime-icon'}`}>
      <img src={isMorning ? daytime : nighttime}
        alt="daytime" className="daytime-icon"
      />
      <div className="main-container">
        <div className="contrast">
          <button className="them" onClick={hanldeChangeThem}>
            <img src={isMorning ? sun : moon} alt="sun" className="sun" />
            <span className={isMorning ? 'sun-text' : 'moon-text'}>
              {isMorning ? 'GOOD MORNING' : 'GOOD EVENING'}
            </span>
          </button>
        </div>
        <div className="time-zone" >
          <div className="time">
            <span className="time-numbers">11:37</span>
            <span className="time-pm-am">bts</span>
          </div>
          <div className="location">
            <span className="geo-location">IN LONDON, UK</span>
          </div>
          <button className="arrow" onClick={handleDetailVisible}>
            <span className="less">
              {detailVisible ? 'MORE' : 'LESS'}
            </span>
            {detailVisible ? (   // dacherisas cvlis less/more icons
              <img src={downarrow} alt="downarrow" className="arrow-up" />
            ) : (
              <img src={uparrow} alt="uparrow" className="arrow-up" />
            )}
          </button>
        </div>
        {detailVisible && (<div className="details-transform" style={{ background: backgroundColor }}   >
          <div className='current-timezone' >
            <span className="timezone-txt">
              CURRENT TIMEZONE
            </span>
            <span className="timezone-txt2" style={{ color: textColor }}>
              Europe/London
            </span>
          </div>
          <div className='dofy'>
            <span className="dofy-txt">
              Day of the year
            </span>
            <span className="dofy-txt2" style={{ color: textColor }}>
              295
            </span>
          </div>
          <div className='dofw'>
            <span className="dofw-txt">
              Day of the week
            </span>
            <span className="dofw-txt2" style={{ color: textColor }}>
              5
            </span>
          </div>
          <div className='w-number'>
            <span className="w-number-txt" >
              Week number
            </span>
            <span className="w-number-txt2" style={{ color: textColor }}>
              42
            </span>
          </div>
        </div>
        )}
      </div>


    </div >
  );
}

export default App;
