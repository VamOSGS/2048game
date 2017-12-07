import React, { Component } from "react";

const Header = props => (
  <header>
    <h1>2048</h1>
    <h3>Score:{props.scoreState.score}</h3>
  </header>
);

export default Header;
