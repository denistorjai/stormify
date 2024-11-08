import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';

// Components
import CurrentWeatherDisplay from './Components/CurrentWeatherDisplay';
import ForecastDisplay from './Components/ForecastDisplay';
import DailyDisplay from './Components/DailyDisplay';

export default function Vancouver() {

    // Add Functionality for Getting Weather Data & Setting Variables

  return (
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <CurrentWeatherDisplay Location={'Vancouver'} CurrentTemp={'9'} />
            <Text style={styles.headertext} > Hourly Forecast </Text>
            <View style={styles.hourlyforecastcontainer} >
              <ForecastDisplay Temperature={'16'} Hour={'1:00'} />
              <ForecastDisplay Temperature={'25'} Hour={'2:00'} />
              <ForecastDisplay Temperature={'35'} Hour={'3:00'} />
              <ForecastDisplay Temperature={'14'} Hour={'4:00'} />
            </View>
            <Text style={styles.headertext} > Daily Forecast </Text>
            <View style={styles.dailyforecastcontainer} >
            <DailyDisplay 
                Day={'Monday'} 
                MinTemperature={'16'} 
                MaxTemperature={'36'} 
              />
              <DailyDisplay 
                Day={'Tuesday'} 
                MinTemperature={'20'} 
                MaxTemperature={'24'} 
              />
              <DailyDisplay 
                Day={'Wednesday'} 
                MinTemperature={'5'} 
                MaxTemperature={'14'} 
              />
              <DailyDisplay 
                Day={'Thursday'} 
                MinTemperature={'10'} 
                MaxTemperature={'16'} 
              />
              <DailyDisplay 
                Day={'Friday'} 
                MinTemperature={'5'} 
                MaxTemperature={'9'} 
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
    paddingTop: 80,
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
    color: '#ffffff'
  },
  dailyforecastcontainer: {
    display: 'flex',
    paddingBottom: 45,
  }
});
