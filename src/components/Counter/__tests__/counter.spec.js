import React from 'react';
import { mount, shallow } from 'enzyme';
import Counter from '../../Counter'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('Counter', () => {
  const mockedAxios = new MockAdapter(axios);
  const flushPromises = () => new Promise(resolve => setTimeout(resolve))

  afterEach(() => {
    mockedAxios.reset()
  });

  const decrementBtnFor = wrap => wrap.find('#decrement');
  const incrementBtnFor = wrap => wrap.find('#increment');
  const randomBtnFor = wrap => wrap.find('#random');
  const counterFor = wrap => wrap.find('#counter');

  it('should init with a value from API', async () => {
    mockedAxios.onGet('/counter').reply(200, 10);

    const wrap = mount(<Counter/>);
    await flushPromises();

    expect(counterFor(wrap).text()).toEqual('10');
  });

  it('should init with the default value if API call fails', async () => {
    mockedAxios.onGet('/counter').reply(500);

    const wrap = mount(<Counter/>);
    await flushPromises();

    expect(counterFor(wrap).text()).toEqual('0');
  });

  it('should decrement value on decrement button click', async () => {
    mockedAxios.onGet('/counter').reply(200, 10);

    const wrap = mount(<Counter/>);
    await flushPromises();
    decrementBtnFor(wrap).simulate('click');

    expect(counterFor(wrap).text()).toEqual('9');
  });

  it('should increment value on increment button click', async () => {
    mockedAxios.onGet('/counter').reply(200, 10);

    const wrap = mount(<Counter/>);
    await flushPromises();
    incrementBtnFor(wrap).simulate('click');

    expect(counterFor(wrap).text()).toEqual('11');
  });

  it('should not decrement below zero', async () => {
    mockedAxios.onGet('/counter').reply(200, 0);

    const wrap = mount(<Counter/>);
    await flushPromises()
    decrementBtnFor(wrap).simulate('click');

    expect(counterFor(wrap).text()).toEqual('0');
  });

  it('should randomize value on random button click', async () => {
    mockedAxios.onGet('/counter').reply(200, 0);

    const random = jest.fn(() => 42);

    const wrap = mount(<Counter random={random}/>);
    await flushPromises()
    randomBtnFor(wrap).simulate('click');

    expect(counterFor(wrap).text()).toEqual('42');
  });
});
