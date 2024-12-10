import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Icons
import Sunny from '../assets/Sunny.svg';
import Cloudy from '../assets/Cloudy.svg';
import Rainy from '../assets/Rainy.svg';
import Snow from '../assets/Snow.svg';
import Windy from '../assets/Windy.svg';
import Thunder from '../assets/Thunder.svg';

export default function ForecastDisplay({ Temperature, Hour, WeatherCondition }) {
  
  // Switch Case for displaying right SVG icon off of WeatherCondition.
  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'Clear':
        return <Sunny width={60} height={60} />;
      case 'Clouds':
        return <Cloudy width={60} height={60} />;
      case 'Rain':
        return <Rainy width={60} height={60} />;
      case 'Snow':
        return <Snow width={60} height={60} />;
      case 'Wind':
        return <Windy width={60} height={60} />;
      case 'Thunderstorm':
        return <Thunder width={60} height={60} />;
      default:
        return <Sunny width={60} height={60} />;
    }
  };

  return (
    <View style={styles.DisplayContainer}>
      <Text style={styles.Hour}> {Hour} </Text>
      {getWeatherIcon(WeatherCondition)}
      <Text style={styles.Temp}> {Temperature}° </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  DisplayContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  Hour: {
    fontWeight: '500',
    color: '#EBECED',
    paddingBottom: 8,
  },
  Temp: {
    fontWeight: '500',
    color: '#EBECED',
    paddingTop: 8,
  },
});
