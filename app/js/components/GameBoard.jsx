import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import GridContainer from '../containers/GridContainer';

class GameBoard extends Component {
  render() {
    return (
      <div className={'GameBoard'}>
        <GridContainer/>
        <HeaderContainer/>
      </div>
    );
  }
}

export default GameBoard;