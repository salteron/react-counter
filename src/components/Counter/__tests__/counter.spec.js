import React from 'react';
import { mount, shallow } from 'enzyme';
import Counter from '../../Counter'

describe('Counter', () => {
  it('should init with the default value of 10', () => {
    const wrap = shallow(<Counter/>);

    expect(wrap.find('#counter').html()).toContain('10');
  });

  it('should decrement value on decrement button click', () => {
    const wrap = mount(<Counter/>);

    wrap.find('#decrement').simulate('click');

    expect(wrap.html()).toContain('9');
  });

  it('should increment value on increment button click', () => {
    const wrap = mount(<Counter/>);

    wrap.find('#increment').simulate('click');

    expect(wrap.html()).toContain('11');
  });

  it('should not decrement below zero', () => {
    const wrap = mount(<Counter/>);

    for (let i = 0; i <= 10; i++) {
      wrap.find('#decrement').simulate('click');
    }

    expect(wrap.html()).toContain('0');
  });
});
