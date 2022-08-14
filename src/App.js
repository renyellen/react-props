import React, { Component } from "react";
import img from "./Components/Figures/potato.jpg";
import Header from "./Components/Header/Header.js";

export default class App extends Component {
  render() {
    return (
      <>
        <Header nome="Renyellen" idade="25" estudando="Props" imagem={img} />
      </>
    );
  }
}
