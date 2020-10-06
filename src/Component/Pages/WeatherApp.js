import React, { useState, useEffect } from "react";
import axios from "axios";
import Display from "../Display/Display";
import '../Style/WeatherApp.css'

const api_key = "12040d26242efedf3d0eafc7f6d14350";

const WeatherApp = () => {
  const [data, setData] = useState({
    listData: [],
    city: "",
    icon_id: "",
    temp: "",
    temp_max: "",
    temp_min: "",
    description: "",
  });

  const [weather, setWeather] = useState(true);

  const getWeatherApi = (values, d) => {
    if (weather === true) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        axios
          .get(
            `http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=30&appid=${api_key}`
          )
          .then((response) => {
            const data = response.data.list;
            setData({
              listData: data,
              city: data[0].name,
              icon_id: data[0].weather[0].id,
              temp: data[0].main.temp,
              temp_max: data[0].main.temp_max,
              temp_min: data[0].main.temp_min,
              description: data[0].weather[0].description,
            });
            console.log(data);
            setWeather(false);
          });
      });
    } else {
      const city = values.city;
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
        )
        .then((response) => {
          const lat = response.data.coord.lat;
          const lon = response.data.coord.lon;
          axios.get (`http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=1&appid=${api_key}`)
          .then((response) => {
            const data = response.data.list;
            setData({
              listData: data,
              city: data[0].name,
              icon_id: data[0].weather[0].id,
              temp: data[0].main.temp,
              temp_max: data[0].main.temp_max,
              temp_min: data[0].main.temp_min,
              description: data[0].weather[0].description,
            });
            console.log(data);
          });

          })
      d.target.reset();
    }
  };

  useEffect(() => {
    getWeatherApi();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="main-cont">
      <Display data={data} getweaters={getWeatherApi}/>
    </div>
  );
};

export default WeatherApp;
