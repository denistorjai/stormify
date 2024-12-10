import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Icons
import Sunny from '../assets/Sunny.svg';
import Cloudy from '../assets/Cloudy.svg';
import Rainy from '../assets/Rainy.svg';
import Snow from '../assets/Snow.svg';
import Windy from '../assets/Windy.svg';
import Thunder from '../assets/Thunder.svg';

export default function CurrentWeatherDisplay({ Location, CurrentTemp, WeatherCondition }) {

  // Switch Case for displaying right SVG icon off of WeatherCondition.
  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'Clear':
        return <Sunny width={290} height={290} />;
      case 'Clouds':
        return <Cloudy width={290} height={290} />;
      case 'Rain':
        return <Rainy width={290} height={290} />;
      case 'Snow':
        return <Snow width={290} height={290} />;
      case 'Wind':
        return <Windy width={290} height={290} />;
      case 'Thunderstorm':
        return <Thunder width={290} height={290} />;
      default:
        return <Sunny width={290} height={290} />;
    }
  };

  return (
    <View>
      <Text style={styles.CityText}> {Location} </Text>
      <View style={styles.WeatherContainer}>
        {getWeatherIcon(WeatherCondition)}
      </View>
      <Text style={styles.TemperatureText}> {CurrentTemp}° </Text>
      <Text style={styles.WeatherText}> {WeatherCondition} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  CityText: {
    color: '#EBECED',
    fontSize: 35,
    fontWeight: '600',
    paddingBottom: 4,
  },
  TemperatureText: {
    fontSize: 60,
    fontWeight: '500',
    color: '#EBECED',
  },
  WeatherText: {
    fontSize: 19,
    paddingTop: 5,
    fontWeight: '400',
    color: '#EBECED',
  },
  WeatherContainer: {
    display: 'flex',
    alignItems: 'center',
  },
});
