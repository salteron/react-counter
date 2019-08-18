import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Counters from '../../Counters'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Counter from '../../../components/Counter'

describe('Container', () => {
  const counterIds = [1, 2]
  const initialState = {counters: {ids: counterIds, byId: {1: 0, 2: 42}}}
  const mockStore = configureMockStore([thunk])
  const store = mockStore(initialState)

  const props = {
    ids: counterIds,
    onCreateCounter: jest.fn()
  }

  const counters = mount(
    <Provider store={store}>
      <Counters {...props} />
    </Provider>
  )

  it('should render counters', () => {
    expect(counters.find(Counter).length).toEqual(2)
    expect(counters.find('#counter-1-value').text()).toEqual('0')
    expect(counters.find('#counter-2-value').text()).toEqual('42')
  })

  it('should call onCreateCounter on create counter button click', () => {
    counters.find('#create-counter').simulate('click')

    expect(props.onCreateCounter).toHaveBeenCalled()
  })
})
