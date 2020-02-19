import React, {Component} from 'react';
import moment             from 'moment';

class Timer extends Component{
  constructor(props) {
    super(props);
    this.state = {date: moment("000000", "hmm").format("HH:mm") === "01:23"};

  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
                    date: {date: moment().format('HH:mm:ss')}
                  });
  }

  render () {
    return (
      <h1>
        {moment().format('HH:mm:ss')}
      </h1>);
  }
}

export default Timer;