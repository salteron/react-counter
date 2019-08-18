import React from 'react';
import axios from 'axios';

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

  render() {
    return (
      <div>
        <div id="counter">{this.state.value}</div>
        <input id="decrement" type="button" defaultValue="Decrement" onClick={this.handleDecrease}/>
        <input id="increment" type="button" defaultValue="Increment" onClick={this.handleIncrease}/>
      </div>
    )
  }
}
