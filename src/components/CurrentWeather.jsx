import React from "react";

const CurrentWeather = ({ data }) => {
  return (
    <div className="mt-8 w-full max-w-screen-sm bg-white p-10 rounded  ">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-5xl font-bold">
            {Math.round(data.main.temp)}°C
            <span className=" text-blue-400"> - </span>
            {data.city}
          </span>
        </div>
        <img
          alt="weather"
          className="w-32"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
    </div>
  );
};

export default CurrentWeather;
