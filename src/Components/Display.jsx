

/*
//This is using Table we can create display component, Below is another method which css added
import React from "react";
const Display=({days,hours,minutes,seconds})=>{
return(
    <div>
        <h1>SALES COUNTDOWN TIMER</h1>
        <h2>Offer ends in</h2>
        <table>
            <tbody>
                <tr>
                    <th>{days}</th>&nbsp;&nbsp;
                    <th>{hours}</th>&nbsp;&nbsp;
                    <th>{minutes}</th>&nbsp;&nbsp;
                    <th>{seconds}</th>&nbsp;&nbsp;
                </tr>
                <tr>
                  <td>DAYS</td>&nbsp;&nbsp;
                  <td>HOURS</td>&nbsp;&nbsp;
                  <td>MINUTES</td>&nbsp;&nbsp;
                  <td>SECONDS</td>&nbsp;&nbsp;
                </tr>
            </tbody>
        </table>
    </div>
);
}
export default Display;
*/

import React from "react";
import "../App.css"; // Import your CSS file for styling

const Display = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="countdown-container">
      <h1 className="countdown-title">SALES COUNTDOWN TIMER</h1>
      <h2 className="countdown-subtitle">Offer ends in</h2>
      <div className="countdown-timer">
        <div className="countdown-item">
          <span className="countdown-number">{days}</span>
          <span className="countdown-label">DAYS</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{hours}</span>
          <span className="countdown-label">HOURS</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{minutes}</span>
          <span className="countdown-label">MINUTES</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{seconds}</span>
          <span className="countdown-label">SECONDS</span>
        </div>
      </div>
    </div>
  );
}

export default Display;
