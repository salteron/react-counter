import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../../containers/Counter'

export default function Counters({ids, onCreateCounter}) {
  return (
    <div>
      {ids.map(id => <Counter key={id} id={id} />)}
      <hr />
      <button id="create-counter" onClick={onCreateCounter}>
        Add Counter
      </button>
    </div>
  )
}

Counters.propTypes = {
  ids: PropTypes.array,
  onCreateCounter: PropTypes.func,
};
