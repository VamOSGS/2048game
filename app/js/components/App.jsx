import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import GameBoard from './GameBoard';

const App = () => (
  <Fragment>
    <GameBoard />
  </Fragment>
);

export default hot(module)(App);
