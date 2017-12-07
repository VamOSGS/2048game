import React, { Component } from 'react';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.handleKeyInput = this.handleKeyInput.bind(this);
    this.state = {
      keys: [37, 38, 39, 40],
      horizontal: [37, 39],
      vertical: [38, 40]
    };
  }

  handleKeyInput(e) {
    if (this.state.keys.indexOf(e.keyCode) != -1) {
      const params = {
        key: e.keyCode,
        dir: null
      };
      this.state.horizontal.indexOf(e.keyCode) != -1
        ? this.props.onPress({ ...params, dir: 'horizontal' })
        : this.props.onPress({ ...params, dir: 'vertical' });
    }
  }
  render() {
    const { grid } = this.props.gridState;
    return (
      <div tabIndex="-1" onKeyDown={this.handleKeyInput} className={'Grid'}>
        {grid.map((item, key) => (
          <div
            key={key}
            className={`gridItem ${item.active ? `active g${item.num}` : ''}`}
          >
            {item.active ? <h1>{item.num}</h1> : ''}
          </div>
        ))}
      </div>
    );
  }
}

export default Grid;
