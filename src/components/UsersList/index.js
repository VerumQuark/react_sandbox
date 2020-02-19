import React, { Component } from 'react';

class UsersList extends Component {

  constructor (props) {
    super( props );
    this.state = {
      users: [],
      isFetching: false,
      error: null,
    };
  }

  render () {
    const { isFetching, error } = this.state;
    if (error) {
      return <div>Error</div>
    }
    if (isFetching) {
      return <h1>Loading...</h1>;
    }

  }

}