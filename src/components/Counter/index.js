import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {
  state = {value: 0}

  componentDidMount() {
    axios.get('/counter')
      .then(({data}) => this.setState({value: data}))
      .catch(() => {})
  }

  handleDecrease = () => {
    this.setState(prevState => ({value: Math.max(0, prevState.value - 1)}))
  }

  handleIncrease = () => {
    this.setState(prevState => ({value: prevState.value + 1}))
  }

  handleRandom = () => {
    this.props.random && this.setState({value: this.props.random()})
  }

  render() {
    return (
      <div>
        <button id="decrement" onClick={this.handleDecrease}>
          Decrement
        </button>
        {' '}
        <button id="increment" onClick={this.handleIncrease}>
          Increment
        </button>
        {' '}
        <button id="random" onClick={this.handleRandom}>
          Random
        </button>
        {' '}
        <div style={{display: 'inline-block'}} id="counter">{this.state.value}</div>
      </div>
    )
  }
}

Counter.propTypes = {
  random: PropTypes.func
};
