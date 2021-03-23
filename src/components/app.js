// Allows you to build out an app one piece at a time
// Each component has it's own functions
// All other components will be nested inside this app.js file
//app.js is the parent component

import React, { Component } from "react";
import moment from "moment";

import PortfolioContainer from "./portfolio/portfolio-container";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Jordan Hudgens Portfolio</h1>
        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
        <PortfolioContainer />
      </div>
    );
  }
}
