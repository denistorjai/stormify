import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';

// Components
import CurrentWeatherDisplay from './Components/CurrentWeatherDisplay';
import ForecastDisplay from './Components/ForecastDisplay';
import DailyDisplay from './Components/DailyDisplay';

export default function Singapore() {

    // Add Functionality for Getting Weather Data & Setting Variables

  return (
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <CurrentWeatherDisplay Location={'Singapore'} CurrentTemp={'24'} />
            <Text style={styles.headertext} > Hourly Forecast </Text>
            <View style={styles.hourlyforecastcontainer} >
              <ForecastDisplay Temperature={'27'} Hour={'1:00'} />
              <ForecastDisplay Temperature={'32'} Hour={'2:00'} />
              <ForecastDisplay Temperature={'20'} Hour={'3:00'} />
              <ForecastDisplay Temperature={'16'} Hour={'4:00'} />
            </View>
            <Text style={styles.headertext} > Daily Forecast </Text>
            <View style={styles.dailyforecastcontainer} >
            <DailyDisplay 
                Day={'Monday'} 
                MinTemperature={'12'} 
                MaxTemperature={'15'} 
              />
              <DailyDisplay 
                Day={'Tuesday'} 
                MinTemperature={'14'} 
                MaxTemperature={'18'} 
              />
              <DailyDisplay 
                Day={'Wednesday'} 
                MinTemperature={'9'} 
                MaxTemperature={'14'} 
              />
              <DailyDisplay 
                Day={'Thursday'} 
                MinTemperature={'9'} 
                MaxTemperature={'14'} 
              />
              <DailyDisplay 
                Day={'Friday'} 
                MinTemperature={'5'} 
                MaxTemperature={'10'} 
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
