import React from 'react';
import PropTypes from 'prop-types';

export default function Counter(props) {
  const { id, value, onIncrement, onDecrement, onRandom } = props

  const handleDecrement = () => onDecrement(id)
  const handleIncrement = () => onIncrement(id)
  const handleRandom = () => onRandom(id)

  return (
    <div>
      <button id={"counter-" + id + "-decrement"} onClick={handleDecrement}>
        Decrement
      </button>
      {' '}
      <button id={"counter-" + id + "-increment"} onClick={handleIncrement}>
        Increment
      </button>
      {' '}
      <button id={"counter-" + id + "-random"} onClick={handleRandom}>
        Randomize
      </button>
      {' '}
      <div style={{display: 'inline-block'}} id={"counter-" + id + "-value"}>
        {value}
      </div>
    </div>
  )
}

Counter.propTypes = {
  id: PropTypes.number,
  value: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onRandom: PropTypes.func,
};
