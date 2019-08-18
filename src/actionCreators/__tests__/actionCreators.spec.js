import {
  changeCounterValue,
  setCounterValue,
  randomizeCounterValue,
  fetchCounterValue,
  createCounter
} from '../../actionCreators'

jest.mock('../../utils/random')
import random from '../../utils/random';
random.mockImplementation(() => 13);

import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
const mockedAxios = new MockAdapter(axios);

describe('actionCreator', () => {
  it('should create an action to change counter value', () => {
    const expectedAction = {type: 'CHANGE_COUNTER_VALUE', id: 1, value: 42}

    expect(changeCounterValue(1, 42)).toEqual(expectedAction)
  })

  it('should create an action to set counter value', () => {
    const expectedAction = {type: 'SET_COUNTER_VALUE', id: 1, value: 42}

    expect(setCounterValue(1, 42)).toEqual(expectedAction)
  })

  it('should create an action to randomize counter value', () => {
    const expectedAction = {type: 'SET_COUNTER_VALUE', id: 1, value: 13}

    expect(randomizeCounterValue(1)).toEqual(expectedAction)
  })

  it('should create an action to set counter value when API request is done', () => {
    const store = mockStore({value: 0})
    mockedAxios.onGet('/counter/1').reply(200, 10);

    const expectedAction = {type: 'SET_COUNTER_VALUE', id: 1, value: 10}

    return store.dispatch(fetchCounterValue(1)).then(() => {
      expect(store.getActions()).toEqual([expectedAction])
    })
  })

  it('should create an action to create counter', () => {
    const expectedAction = {type: 'CREATE_COUNTER'}

    expect(createCounter()).toEqual(expectedAction)
  })
})
