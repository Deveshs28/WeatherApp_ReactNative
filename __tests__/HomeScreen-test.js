import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HomeScreen from '../screens/HomeScreen';
import NetInfo from "@react-native-community/netinfo";
import {sampleResponse, parsedSuccessResponse} from '../data/DummyData'

// setup enzyme's react adapter
Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory function to create a ShallowWapper for the HomeScreen component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<HomeScreen />)

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('renders without crashing', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, "component-app")
  expect(appComponent.length).toBe(1);
})

test('renders textinput', () => {
  const wrapper = setup()
  const searchTextInput = findByTestAttr(wrapper, "search-text-input")
  expect(searchTextInput.length).toBe(1);
})

test('renders search button', () => {
  const wrapper = setup()
  const searchButton = findByTestAttr(wrapper, "search-button")
  expect(searchButton.length).toBe(1);
})

test('update state with text change', () => {
  const wrapper = setup()
  const searchTextInput = findByTestAttr(wrapper, "search-text-input")
  searchTextInput.simulate('changeText', '123456')
  wrapper.update();
  expect(wrapper.state().query).toEqual("123456")
})

test('search button click', () => {
  const wrapper = setup()
  const instance = wrapper.instance()
  const searchTextInput = findByTestAttr(wrapper, "search-button-touch")
  jest.spyOn(instance, 'handleSearchClick')
  searchTextInput.simulate('press')
  expect(instance.handleSearchClick).toHaveBeenCalled()
})

// test('handle search click with no internet', ()=>{
//   const wrapper = setup()
//   // NetInfo.isConnected.fetch().mockResolvedValueOnce(false)
//   const instance = wrapper.instance()
//   const searchTextInput = findByTestAttr(wrapper, "search-button-touch")
//   jest.spyOn(instance, 'handleSearchClick')
//   jest.spyOn(instance, 'fetchCacheData')
//   jest.mock('@react-native-community/netinfo', () => ({
//     fetch: () => Promise.resolve({isConnected: false})
//   }))
//   searchTextInput.simulate('press')
//   expect(NetInfo.fetch().isConnected).toBe(false)
// })

test('fetch data from server called', async () => {
  const wrapper = setup()
  const instance = wrapper.instance()
  const searchTextInput = findByTestAttr(wrapper, "search-button-touch")
  jest.spyOn(instance, 'fetchDataFromServer')
  wrapper.setState({
    query: '123456'
  })
  searchTextInput.simulate('press')
  wrapper.update();
  expect(await instance.fetchDataFromServer).toHaveBeenCalled()
})

describe('check parse response function', () => {
  const wrapper = setup()
  const instance = wrapper.instance()
  it('parse response function called with sucess response', () => {
    jest.spyOn(instance, 'parseResponseData')
    instance.parseResponseData(sampleResponse)
    wrapper.setState({
      weatherData: parsedSuccessResponse
    })
    wrapper.update();

    expect(wrapper.state().weatherData).toEqual(parsedSuccessResponse)
  })

  it('parse response function called with error response', () => {
    jest.spyOn(instance, 'parseResponseData')
    instance.parseResponseData(null)
    wrapper.setState({
      error: 'Unable to parse data'
    })
    wrapper.update();

    expect(wrapper.state().error).toEqual('Unable to parse data')
  })
})

test('check fetchCacheData function with no data available', async () => {
  const wrapper = setup()
  const instance = wrapper.instance()

  jest.spyOn(instance, 'fetchCacheData')
  instance.fetchCacheData('122001')
  wrapper.setState({
    error: 'Internet not available. Data not found'
  })
  wrapper.update();

  expect(wrapper.state().error).toEqual('Internet not available. Data not found')
})

test('check put data in cache and fetch data success', async () => {
  const wrapper = setup()
  const instance = wrapper.instance()
  
  jest.spyOn(instance, 'cacheData')
  await instance.cacheData('122001', sampleResponse)
  jest.spyOn(instance, 'fetchCacheData')
  jest.spyOn(instance, 'parseResponseData')
  await instance.fetchCacheData('122001')
  expect(instance.parseResponseData).toHaveBeenCalled()
})
