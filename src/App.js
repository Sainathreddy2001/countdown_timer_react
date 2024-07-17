import React, { useState, useEffect } from "react";
import Display from './Components/Display.jsx';

const App = () => {
  const endTime = new Date('July 20, 2024 00:00:00').getTime();
  const [currentTime, setCurrentTime] = useState(new Date().getTime());

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTime(new Date().getTime());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentTime]);

  const gap = endTime - currentTime;
  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const remainingDays = Math.floor(gap / days);
  const remainingHours = Math.floor((gap % days) / hours);
  const remainingMinutes = Math.floor((gap % hours) / minutes);
  const remainingSeconds = Math.floor((gap % minutes) / seconds);

  return (
    <div>
      <center>
        <Display
          days={remainingDays}
          hours={remainingHours}
          minutes={remainingMinutes}
          seconds={remainingSeconds}
        />
      </center>
    </div>
  );
}

export default App;
