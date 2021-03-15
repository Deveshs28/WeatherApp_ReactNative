import React from 'react'
import { View, Text } from 'react-native'
import ItemStyle from '../styles/ItemStyle'

const WeatherItem = props => {
    return (
        <View style={ItemStyle.card}>
            <Text style={ItemStyle.tempTitle}>Temperature is <Text style={ItemStyle.highlightedText}>{`${props.temp}${'\u00b0'}c`}</Text></Text>
            <Text style={ItemStyle.otherText}>Min. temp <Text style={ItemStyle.highlightedText}>{`${props.tempMin}${'\u00b0'}c `}</Text>and Max. temp <Text style={ItemStyle.highlightedText}>{`${props.tempMax}${'\u00b0'}c`}</Text></Text>
            <Text style={ItemStyle.conditionTextColor}>{`Weather condition is ${props.weatherCondition}`}</Text>
        </View>
    )
}

export default WeatherItem