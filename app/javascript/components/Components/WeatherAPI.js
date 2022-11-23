import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";

const WeatherAPI = () => {
  const [lat, setLat] = useState(undefined);
  const [lon, setLon] = useState(undefined);
  const [weatherData, setWeatherData] = useState(undefined);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    getWeatherData();
  }, [lat, lon]);

  const getWeatherData = async () => {
    if (lat == undefined && lat == undefined) return;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=00da260d1aabb2d7530e8dce69d277a9`
    );
    const data = await response.json();
    setWeatherData(data);
  };
  return (
    <>
      {weatherData !== undefined ? (
        <div>
          <p className="m-0 p-0">{weatherData.name}</p>
          <p className="weather-text italic m-0 p-0 pb-2">
            {weatherData.weather[0].description}
          </p>
          <div className="d-flex flex-direction-row align-items-center ">
            <p className="weather-text m-0 p-0">
              {Math.trunc(weatherData.main.temp)}&deg;F
            </p>
            <img
              style={{ width: "2rem", marginLeft: "0.5rem" }}
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            />
          </div>
        </div>
      ) : (
        <Spinner
          color="primary"
          style={{
            height: "3rem",
            width: "3rem",
          }}
        >
          Loading...
        </Spinner>
      )}
    </>
  );
};

export default WeatherAPI;
