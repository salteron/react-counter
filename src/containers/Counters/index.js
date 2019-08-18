import React from 'react';
import PropTypes from 'prop-types';
import Counters from '../../components/Counters'
import * as actionCreators from '../../actionCreators'
import { connect } from 'react-redux'

export default connect(
  (state, props) => ({
    ids: state.counters.ids
  }),
  (dispatch, props) => ({
    onCreateCounter: () => dispatch(actionCreators.createCounter()),
  })
)(Counters);
