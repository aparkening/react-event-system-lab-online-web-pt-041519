import React, { Component } from 'react';

export default class Keypad extends Component {

  // Output when entering password
  handleInput = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.handleInput} />
      </div>
    )
  }
}


