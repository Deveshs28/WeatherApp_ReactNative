import React from 'react';
import {
  View, Text,
  SectionList, ActivityIndicator, TextInput, Image,
  TouchableOpacity, Alert
} from 'react-native';
import { Keyboard } from 'react-native'
const axios = require('axios');
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles'
import moment from 'moment';
import WeatherItem from '../component/WeatherItem'
import AppConstant from '../constants/AppConstant'

class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      weatherData: [],
      loading: false,
      error: null,
      query: ''
    }
  }

  // This function will return component UI 
  contentScreen = () => {
    return (
      <View data-test="component-app" style={styles.container}>
        {/* Title Bar */}
        <Text style={styles.titleBar}>Home Screen</Text>
        {/* Search View container, containing Text input and search icon */}
        <View style={styles.searchContainer}>
          <TextInput
            data-test="search-text-input"
            onChangeText={(text) => {
              this.setState({
                query: text,
                weatherData: []
              })
            }}
            placeholder="Search Zipcode"
            style={styles.searchBox}
            keyboardType="numeric"
          />
          <TouchableOpacity data-test="search-button-touch" style={{ width: 20 }} onPress={() => {
            this.handleSearchClick()
          }}>
            <Image data-test="search-button" source={require('../../assets/search_icon.png')} />
          </TouchableOpacity>
        </View>
        {/* This view will display activity indicator incase data is loading otherwise will display data in section list */}
        {this.state.loading === true ? <ActivityIndicator size="large" color="black" /> :
          this.state.error === null ?
            <SectionList
              sections={this.state.weatherData}
              renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{moment(section.title).format('MMM Do YYYY, hh:mm a')}</Text>}
              renderItem={itemData => <WeatherItem
                temp={itemData.item.main.temp}
                tempMin={itemData.item.main.temp_min}
                tempMax={itemData.item.main.temp_max}
                weatherCondition={itemData.item.weather[0].main}
              />}
              keyExtractor={(item, index) => index.toString()}
            /> : <Text style={styles.errorLabel}>{this.state.error}</Text>}
      </View>
    )
  }

  // Lifecycle method to render component UI
  render() {
    return (
      this.contentScreen()
    );
  }

  // This function will handle search icon click.
  // If user does not input text in text input, it will show error
  //otherwise it will perform action based on the network availability 
  handleSearchClick = () => {
    Keyboard.dismiss()
    if (this.state.query !== null && this.state.query.trim().length > 0) {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          this.fetchDataFromServer(this.state.query.trim())
        } else {
          this.fetchCacheData(this.state.query.trim())
          // Alert.alert('Error', 'Please check internet connection')
        }
      });

    } else {
      Alert.alert("Error", "Zipcode cannot be blank")
    }
  }

  // This function will asynchoronusly fetch data
  //  from server for the given zipcode
  fetchDataFromServer = async (zipCode) => {
    this.setState({
      loading: true
    })
    try {
      const api = `${AppConstant.baseUrl}${AppConstant.zipCodeKey}${zipCode},${AppConstant.countryIdentifier}&${AppConstant.appId}&${AppConstant.units}`
      const response = await axios.get(api)
      this.parseResponseData(response.data.list)
      this.cacheData(zipCode, response.data.list)
    } catch (error) {
      this.setState({
        loading: false,
        error: error.message
      })
    }
  }

  // This function will cache server data for the zipcode
  cacheData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
    }
  }

  //This function will asynchronously fetch cache data for zipcode
  fetchCacheData = async (zipcode) => {
    try {
      this.setState({
        loading: true
      })
      const jsonValue = await AsyncStorage.getItem(zipcode)
      if (jsonValue != null) {
        const data = JSON.parse(jsonValue)
        this.parseResponseData(data)
      } else {
        this.setState({
          loading: false,
          error: 'Internet not available. Data not found'
        })
      }
    } catch (e) {
      // error reading value
    }
  }

  //This function will parse the response to display in section list.
  // It will compare each item by date and combine all data having same date of the month
  parseResponseData(response) {
    let parsedList = []
    if (response != null) {
      let initialDate = String(response[0].dt_txt).split(' ')
      let initialDateSplit = String(initialDate[0]).split('-')
      let month = initialDateSplit[1]
      let date = initialDateSplit[2]
      let sectionData = []
      let sectionTitle = response[0].dt_txt
      for (let resp of response) {
        let currItmDate = String(resp.dt_txt).split(' ')
        let rDate = String(currItmDate[0]).split('-')
        let currMonth = rDate[1]
        let currDate = rDate[2]
        if (month === currMonth && date === currDate) {
          sectionData.push(resp)
        } else {
          const completeObj = {
            title: sectionTitle,
            data: sectionData
          }
          parsedList.push(completeObj)
          sectionData = []
          month = currMonth
          date = currDate
          sectionTitle = resp.dt_txt
          sectionData.push(resp)
        }
      }

      this.setState({
        loading: false,
        weatherData: parsedList,
        error: null
      })
    } else {
      this.setState({
        loading: false,
        error: 'Unable to parse data'
      })
    }
  }
};

export default HomeScreen;
