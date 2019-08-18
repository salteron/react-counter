import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Counter from '../../Counter'

describe('Counter', () => {
  const props = {
    id: 1,
    value: 42,
    onIncrement: jest.fn(),
    onDecrement: jest.fn(),
    onRandom: jest.fn(),
  }

  const counter = shallow(<Counter {...props} />)

  it('should render value from props', () => {
    expect(counter.find('#counter-1-value').text()).toEqual("42")
  })

  it('should call onIncrement on increment button click', () => {
    counter.find('#counter-1-increment').simulate('click')

    expect(props.onIncrement).toHaveBeenCalledWith(props.id)
  })

  it('should call onDecrement on decrement button click', () => {
    counter.find('#counter-1-decrement').simulate('click')

    expect(props.onDecrement).toHaveBeenCalledWith(props.id)
  })

  it('should call onRandom on random button click', () => {
    counter.find('#counter-1-random').simulate('click')

    expect(props.onRandom).toHaveBeenCalledWith(props.id)
  })
})
