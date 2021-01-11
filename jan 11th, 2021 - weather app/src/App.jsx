import './App.css';
import React from 'react';
import axios from 'axios';

const cities = require("./cities.json")

console.log(cities);

function App() {

  const [cityName, setCityName] = React.useState("karachi");
  const [weatherData, setWeatherData] = React.useState({});


  function getWeather() {
    const cityName = document.getElementById("cityName").value;
    setCityName(cityName)
    setWeatherData({});
  }

  React.useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=429736441cf3572838aa10530929f7cd&units=metric`)
      .then(res => {
        const newWeatherData = res.data;
        console.log("api data: ");
        console.log(newWeatherData)
        setWeatherData(newWeatherData);
      });

  }, [cityName]);


  return (

    <div className="App">
     
      <h1>Weather app</h1>
      <input type="text" id="cityName" placeholder="Enter city name" />

      <button onClick={getWeather} > Get Weather </button>

      {(weatherData.main && weatherData.main.temp) ?

        <div>
          <h1>{weatherData.main.temp}</h1>

          <h6> H: {weatherData.main.temp_min} / L: {weatherData.main.temp_max} </h6>
          <h6>Humidity: {weatherData.main.humidity}</h6>
          <h4>{weatherData.name}</h4>
        </div>
        :

        <h1>Loading...</h1>
      }


    </div>

  );
}

export default App;
