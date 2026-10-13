
import React, { Component } from 'react';

export default class Time extends Component {
  constructor(props) {
    super(props);

    this.state = {
      today: new Date()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const today = this.state.today;
    const date = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    return (
      <center className="d-flex justify-content-center my-3">
        <h2>{`${date}-${month}-${year}`}</h2>
        <h4 className="mx-3">
          {`${hours}:${minutes}:${seconds}`}
        </h4>
      </center>
    );
  }
}
