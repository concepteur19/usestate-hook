import React from "react";
import ReactDOM from "react-dom";
//import App from "./components/App";

import cars from "./practice";

// ReactDOM.render(<App />, document.getElementById("root"));

//Challenge:
//1. Given that you can get the current time using:
//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);

const [
    {
        model: hondaModel, 
        coloursByPopularity: [hondaTopColour], 
        speedStats: {topSpeed: hondaTopSpeed}
    }, 
    {
        model: teslaModel, 
        coloursByPopularity: [teslaTopColor], 
        speedStats: {topSpeed: teslaTopSpeed}
    }
] = cars;


ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{teslaModel}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColor}</td>
    </tr>
    <tr>
      <td>{hondaModel}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);

