import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import daytime from './images/mobile/daytime.png';
import nighttime from './images/mobile/bg-image-nighttime.jpg';
import './styles.css';
import sun from './images/desktop/icon-sun.svg';
import moon from './images/desktop/icon-moon.svg';
import uparrow from './images/desktop/icon-arrow-up.svg';
import downarrow from './images/desktop/arrowdown.png';
import desktopDayBg from './images/desktop/bg-image-daytime.jpg';
import desktopNightBg from './images/desktop/bg-image-nighttime.jpg';
import tabletDayBg from './images/tablet/bg-image-daytime.jpg';
import tabletNightBg from './images/tablet/bg-image-nighttime.jpg';

function App() {

  const [timezone, setTimezone] = useState();
  const [dayOfYear, setDayOfYear] = useState();
  const [dayOfWeek, setDayOfWeek] = useState();
  const [weekNumber, setWeekNumber] = useState();
  const [data, setData] = useState([]);
  const [countryDate, setCountryDate] = useState([]);
  const [countryCode, setCountryCode] = useState();
  const [countryName, setCountryName] = useState();
  useEffect(() => {

    let countryApi = "https://ipbase.com/"
    const fetchUsersData = async () => {
      let response = await fetch(countryApi);
      let countryDate = await response.json();
      setCountryDate(countryDate)
      setCountryCode(countryDate.country_code)
      setCountryName(countryDate.country_name)
    }
    fetchUsersData()
  }, [])

  useEffect(() => {

    //timezone api
    let api = "http://worldtimeapi.org/api/ip";


    const fetchUsers = async () => {
      let response = await fetch(api);
      let data = await response.json();
      setData(data);
      setTimezone(data.timezone)
      setDayOfYear(data.day_of_year)
      setDayOfWeek(data.day_of_week)
      setWeekNumber(data.week_number)

    }
    fetchUsers()
    console.log(fetchUsers);
  }, []);

  const [isMorning, setIsMorning] = useState<boolean>(true);
  const [detailVisible, setDetailVisible] = useState<boolean>(false); // dacherisas cvlis less/more icons steiti
  const textColor = isMorning ? 'white' : 'black';  // roca evening/morning icvleba es cvlis textis fers 
  const backgroundColor = isMorning ? 'grey' : 'black';

  const hanldeChangeThem = () => {
    setIsMorning(!isMorning); // funqcia achens da aqrobs sun/moons
  }
  const handleDetailVisible = () => {
    setDetailVisible(!detailVisible);
  }
  return (
    <div className={`container ${isMorning ? 'daytime-icon' : 'nighttime-icon'}`}>
      <div className="daytime">
        <img src={isMorning ? daytime : nighttime}
          alt="daytime" className="daytime-icon"
        />
        <img src={isMorning ? tabletDayBg : tabletNightBg}
          alt="daytime" className="daytime-tablet-icon"
        />
        <img src={isMorning ? desktopDayBg : desktopNightBg}
          alt="daytime" className="daytime-desktop-icon"
        />

      </div>
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
            <span className="geo-location">IN LONDON, UK {countryName}</span>
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
        {detailVisible && (<div className={`details-transform ${isMorning ? 'bg-grey' : 'bg-black'}`}  >
          <div className='current-timezone' >
            <span className={`timezone-txt ${isMorning ? 'evening-txt' : 'morning-txt'}`}>
              CURRENT TIMEZONE
            </span>
            <span className={`timezone-txt2 ${isMorning ? 'evening-txt' : 'morning-txt'}`}>
              {timezone}
            </span>

          </div>
          <div className='dofy'>
            <span className={`dofy-txt ${isMorning ? 'evening-txt' : 'morning-txt'}`}>
              Day of the year
            </span>
            <span className={`dofy-txt2 ${isMorning ? 'evening-txt' : 'morning-txt'}`}>
              {dayOfYear}
            </span>
          </div>
          <div className='dofw'>
            <span className={`dofw-txt ${isMorning ? 'evening-txt' : 'morning-txt'}`}>
              Day of the week
            </span>
            <span className={`dofw-txt2 ${isMorning ? 'evening-txt' : 'morning-txt'}`}>
              {dayOfWeek}
            </span>
          </div>
          <div className='w-number'>
            <span className={`w-number-txt ${isMorning ? 'evening-txt' : 'morning-txt'}`} >
              Week number
            </span>
            <span className={`w-number-txt2 ${isMorning ? 'evening-txt' : 'morning-txt'}`}>
              {weekNumber}
            </span>
          </div>
        </div>
        )}
      </div>


    </div >
  );
}

export default App;
