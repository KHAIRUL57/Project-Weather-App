import React from "react";
// import { ReactAnimatedWeather } from "react-animated-weather";
import "../Style/Table.css";

const Table = (props) => {
  const { data, } = props;

  const loping = data.map((data, index) => {
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{data.name}</td>
        <td>{data.weather[0].description}</td>
        <td>{Math.floor(data.main.temp - 273.15)}</td>
      </tr>
    );
  });

  return (
    <div className="scroll">
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">NO</th>
            <th scope="col">CITY</th>
            <th scope="col">DESCRIPTION</th>
            <th scope="col">TEMPERATUR</th>
          </tr>
        </thead>
        <tbody>{loping}</tbody>
      </table>
    </div>
  );
};

export default Table;
