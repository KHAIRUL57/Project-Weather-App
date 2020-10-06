import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import Input from "../Display/Input";
import "../Style/Display.css";
import Table from "./Table";

const Display = (props) => {
  const { data, getweaters } = props;

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  const icon = () => {
    const id = data.icon_id;
    if (id >= 200 && id <= 531) {
      return "RAIN";
    } else if (id >= 600 && id <= 622) {
      return "SNOW";
    } else if (id >= 701 && id <= 711) {
      return "FOG";
    } else if (id === 800 && id) {
      return "CLEAR_DAY";
    } else if (id >= 801 && id <= 804) {
      return "CLOUDY";
    }
  };

  const setIcon = {
    icons: icon(),
  };

  const background = () => {
    const id = data.icon_id;
    if (id >= 200 && id <= 531) {
      return `bg1`;
    } else if (id >= 600 && id <= 622) {
      return `bg2`;
    } else if (id >= 701 && id <= 711) {
      return `bg3`;
    } else if (id >= 800 && id <= 804) {
      return `bg4`;
    }
  };

  return (
    <div className={`input-table ${background()}`}>
      <div>
        <Input getweaters={getweaters} />
        <div className="display">
          <div className="weather">
            <div>
              <div className="city">{data.city}</div>
              <i className="date">{dateBuilder(new Date())}</i>
            </div>
            <div className="icon">
              {" "}
              <ReactAnimatedWeather
                icon={setIcon.icons}
                color={"goldenrod"}
                size={100}
                animate={true}
              />
            </div>
            <div className="temp">{Math.round(data.temp - 273.15)}°c</div>
            <div className="cuaca">{data.description}</div>
            <div className="temp-2">
              {Math.floor(data.temp_max - 273.15)} /{" "}
              {Math.floor(data.temp_min - 273.15)}º
            </div>
          </div>
          <div className="weather-1">
            <Table data={data.listData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
