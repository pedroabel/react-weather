import { useState } from "react";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
    );
  };

  return (
    <div className="">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather data={currentWeather} />
    </div>
  );
}

export default App;
