import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Container from '../../Counters'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Counter from '../../../components/Counter'

describe('Container', () => {
  const initialState = {counters: {ids: [1], byId: {1: 0}}}
  const mockStore = configureMockStore([thunk])
  const store = mockStore(initialState)

  const counters = mount(
    <Provider store={store}>
      <Container />
    </Provider>
  )

  it('should render counters', () => {
    expect(counters.find(Counter).length).toEqual(1)
    expect(counters.find('#counter-1-value').text()).toEqual('0')
  })

  it('should create counters', () => {
    const expectedAction = {type: 'CREATE_COUNTER'}

    counters.find('#create-counter').simulate('click')

    expect(store.getActions()).toEqual([expectedAction])
  })
})
