import React from "react";

const CurrentWeather = ({ data }) => {
  return (
    <div>
      <div>
        <div>
          <p>data.city</p>
          <p>data.description</p>
        </div>
        <img />
      </div>

      <div>
        <p> ºC</p>
        <div>
          <div>
            <span>Details</span>
          </div>

          <div>
            <span>Feels Like</span>
            <span></span>
          </div>

          <div>
            <span>Wind</span>
            <span> m/s</span>
          </div>

          <div>
            <span>Humidity</span>
            <span>%</span>
          </div>
          <div>
            <span>Pressure</span>
            <span> hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
