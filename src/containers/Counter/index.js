import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../../components/Counter'
import { getRandom1000 } from '../../utils/random'
import * as actionCreators from '../../actionCreators'
import { connect } from 'react-redux'

export class Container extends React.Component {
  componentDidMount() {
     this.props.onMount()
  }

  render() {
    return <Counter {...this.props}/>
  }
}

Container.propTypes = {
  onMount: PropTypes.func
}

export default connect(
  (state, props) => ({
    id: props.id,
    value: state.counters.byId[props.id],
  }),
  (dispatch, props) => ({
    onIncrement: (id) => dispatch(actionCreators.changeCounterValue(id, 1)),
    onDecrement: (id) => dispatch(actionCreators.changeCounterValue(id, -1)),
    onRandom: (id) => dispatch(actionCreators.randomizeCounterValue(id)),
    onMount: (id) => dispatch(actionCreators.fetchCounterValue(id))
  })
)(Container);
