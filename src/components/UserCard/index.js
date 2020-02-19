import React, { Component } from 'react';

class UserCard extends Component {
  constructor (props) {
    super( props );
    this.state = {
      user: {},
      isFetching: false,
      error: null
    }
  }

  render () {
    const {imgSrc, firstName, lastName} = this.state
    return (
      <div>
        <img src = {imgSrc} alt="HEX HEX HEXHEXZAGLUSHKA" />

        <h1>

        </h1>
      </div>
    );
  }
}
