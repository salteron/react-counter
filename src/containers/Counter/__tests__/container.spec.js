import React from 'react'
import Enzyme, { mount } from 'enzyme'
import { Container } from '../../Counter'

describe('Container', () => {
  const props = {
    id: 1,
    value: 42,
    onIncrement: jest.fn(),
    onDecrement: jest.fn(),
    onRandom: jest.fn(),
    onMount: jest.fn()
  }

  const counter = mount(<Container {...props} />)

  it('should render value from props', () => {
    expect(counter.find('#counter-1-value').text()).toEqual("42")
  })

  it('should call onMount on mount', () => {
    expect(props.onMount).toHaveBeenCalled()
  })

  it('should call onIncrement on increment button click', () => {
    counter.find('#counter-1-increment').simulate('click')

    expect(props.onIncrement).toHaveBeenCalled()
  })

  it('should call onDecrement on decrement button click', () => {
    counter.find('#counter-1-decrement').simulate('click')

    expect(props.onDecrement).toHaveBeenCalled()
  })

  it('should call onRandom on random button click', () => {
    counter.find('#counter-1-random').simulate('click')

    expect(props.onRandom).toHaveBeenCalled()
  })
})
