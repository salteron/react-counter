import * as actionTypes from '../actionTypes';

const defaultCounterValue = 0
const defaultState = {counters: {ids: [1], byId: {1: defaultCounterValue}}}
const minCounterValue = 0

export const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_COUNTER_VALUE: {
      const newValue = state.counters.byId[action.id] + action.value
      return stateForNewCounterValue(state, action.id, newValue)
    }
    case actionTypes.SET_COUNTER_VALUE:
      return stateForNewCounterValue(state, action.id, action.value)
    case actionTypes.CREATE_COUNTER:
      return stateForNewCounter(state)
    default:
      return state
  }
}

const stateForNewCounterValue = (state, counterId, counterValue) => {
  return {
    ...state,
    counters: {
      ...state.counters,
      byId: {
        ...state.counters.byId,
        [counterId]: normalizeValue(counterValue)
      }
    }
  }
}

const stateForNewCounter = (state) => {
  const newId = state.counters.ids.length + 1
  const newValue = defaultCounterValue

  return {
    ...state,
    counters: {
      ...state.counters,
      ids: [...state.counters.ids, newId],
      byId: {
        ...state.counters.byId,
        [newId]: newValue
      }
    }
  }
}

const normalizeValue = (value) => Math.max(minCounterValue, value)
