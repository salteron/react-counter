import { rootReducer } from '../../reducers';
import {
  changeCounterValue,
  setCounterValue,
  createCounter
} from '../../actionCreators'

describe('timerReducer', () => {
  it('should init state when state is undefined', () => {
    expect(rootReducer(undefined, {})).toEqual(
      {counters: {ids: [1], byId: {1: 0}}}
    );
  });

  it('should increase value when change with positive number', () => {
    const initialState = {counters: {ids: [1], byId: {1: 7}}}
    const action = changeCounterValue(1, 3)
    const expectedNewState = {counters: {ids: [1], byId: {1: 10}}}

    expect(rootReducer(initialState, action)).toEqual(expectedNewState)
  });

  it('should decrease value when change with negative number', () => {
    const initialState = {counters: {ids: [1], byId: {1: 7}}}
    const action = changeCounterValue(1, -3)
    const expectedNewState = {counters: {ids: [1], byId: {1: 4}}}

    expect(rootReducer(initialState, action)).toEqual(expectedNewState)
  });

  it('should not decrease below 0', () => {
    const initialState = {counters: {ids: [1], byId: {1: 7}}}
    const action = changeCounterValue(1, -8)
    const expectedNewState = {counters: {ids: [1], byId: {1: 0}}}

    expect(rootReducer(initialState, action)).toEqual(expectedNewState)
  });

  it('should set value when set number', () => {
    const initialState = {counters: {ids: [1], byId: {1: 7}}}
    const action = setCounterValue(1, 3)
    const expectedNewState = {counters: {ids: [1], byId: {1: 3}}}

    expect(rootReducer(initialState, action)).toEqual(expectedNewState)
  });

  it('should not set below 0', () => {
    const initialState = {counters: {ids: [1], byId: {1: 7}}}
    const action = setCounterValue(1, -8)
    const expectedNewState = {counters: {ids: [1], byId: {1: 0}}}

    expect(rootReducer(initialState, action)).toEqual(expectedNewState)
  });

  it('should not affect counters out of action scope', () => {
    const initialState = {counters: {ids: [1, 2], byId: {1: 7, 2: 4}}}
    const action = setCounterValue(2, 10)
    const expectedNewState = {counters: {ids: [1, 2], byId: {1: 7, 2: 10}}}

    expect(rootReducer(initialState, action)).toEqual(expectedNewState)
  });

  it('should add counter with the default value', () => {
    const initialState = {counters: {ids: [1], byId: {1: 7}}}
    const action = createCounter()
    const expectedNewState = {counters: {ids: [1, 2], byId: {1: 7, 2: 0}}}

    expect(rootReducer(initialState, action)).toEqual(expectedNewState)
  });
});
