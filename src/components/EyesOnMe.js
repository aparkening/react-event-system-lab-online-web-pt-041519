import React, { Component } from 'react';

export default class EyesOnMe extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     output: "Hi"
  //   }
  // }

  // Focus message
  focused = () => console.log('Good!')

  // Blur message
  blurred = () => console.log('Hey! Eyes on me!')

  render() {
    return (
    <button onFocus={this.focused} onBlur={this.blurred}>Look here!</button>
    )
  }
}

