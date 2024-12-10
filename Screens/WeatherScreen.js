import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

// Components
import CurrentWeatherDisplay from '../Components/CurrentWeatherDisplay';
import ForecastDisplay from '../Components/ForecastDisplay';
import DailyDisplay from '../Components/DailyDisplay';

export default function WeatherScreen({ route }) {

  // Get City Parameter from Nav Route
  const { city } = route.params;

  // State to hold weather data and loading state
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch Weather Data
  const fetchWeatherData = async () => {
    try {
      setLoading(true); // Set loading to true while fetching data
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=cbce13c2fe20b0b066a2b25f40575c58`
      );
      
      const data = await response.json();
      
      // Structure data correctly to pass through components
      const currentWeather = data.list[0];
      const hourlyForecast = data.list.slice(0, 4);
      const dailyForecast = data.list.filter((_, index) => index % 8 === 0);

      // Set Weather Data
      setWeatherData({
        currentWeather,
        hourlyForecast,
        dailyForecast,
      });

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  // Loading
  if (loading) {
    return <Text> loading... </Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {weatherData && weatherData.currentWeather && (
          <CurrentWeatherDisplay
            Location={city}
            CurrentTemp={Math.round(weatherData.currentWeather.main.temp).toString()}
            WeatherCondition={weatherData.currentWeather.weather[0].main}
          />
        )}
        <Text style={styles.headertext}>Hourly Forecast</Text>
        <View style={styles.hourlyforecastcontainer}>
          {weatherData.hourlyForecast.map((forecast, index) => (
            <ForecastDisplay
              key={index}
              Temperature={Math.round(forecast.main.temp).toString()}
              Hour={new Date(forecast.dt * 1000).getHours() + ':00'}
              WeatherCondition={forecast.weather[0].main} 
            />
          ))}
        </View>
        <Text style={styles.headertext}>Daily Forecast</Text>
        <View style={styles.dailyforecastcontainer}>
          {weatherData.dailyForecast.map((forecast, index) => (
            <DailyDisplay
              key={index}
              Day={new Date(forecast.dt * 1000).toLocaleString('en-us', { weekday: 'long' })}
              MinTemperature={Math.round(forecast.main.temp_min).toString()}
              MaxTemperature={Math.round(forecast.main.temp_max).toString()}
              WeatherCondition={forecast.weather[0].main}
            />
          ))}
        </View>
        <View style={styles.refreshButtonContainer}>
          <Button
            title="refresh data"
            onPress={fetchWeatherData}
            color="#ffffff"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D2635',
    flex: 1,
    padding: 30,
    justifyContent: 'space-between',
  },
  hourlyforecastcontainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: 22,
    flexDirection: 'row',
  },
  headertext: {
    paddingTop: 35,
    paddingBottom: 17,
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  dailyforecastcontainer: {
    display: 'flex',
    paddingBottom: 35,
  },
  refreshButtonContainer: {
    marginBottom: 20,
    padding: 2,
    borderRadius: 10,
    backgroundColor: '#233046',
  },
});
