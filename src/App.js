import React, { Component } from "react";
import Title from "./components/title/title"
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div  className='main'>
        <Title />
      </div>
    );
  }
}
