import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';

// Components
import CurrentWeatherDisplay from './Components/CurrentWeatherDisplay';
import ForecastDisplay from './Components/ForecastDisplay';
import DailyDisplay from './Components/DailyDisplay';
import DotIndicator from './Components/DotIndicator';

export default function App() {

  // Temporary Data Before Phase 4 Data Implementation
  const TemporaryData = {
    Calgary: {
      CurrentTemp: '13',
      HourlyForecast: {
        '1:00': 15,
        '2:00': 7,
        '3:00': 12,
        '4:00': 10,
      },
      WeeklyForecast: {
        'Monday': { MinTemperature: '4', MaxTemperature: '8' },
        'Tuesday': { MinTemperature: '2', MaxTemperature: '6' },
        'Wednesday': { MinTemperature: '-3', MaxTemperature: '12' },
        'Thursday': { MinTemperature: '5', MaxTemperature: '15' },
        'Friday': { MinTemperature: '3', MaxTemperature: '5' },
      }
    },
    Vancouver: {
      CurrentTemp: '17',
      HourlyForecast: {
        '1:00': 12,
        '2:00': 16,
        '3:00': 5,
        '4:00': 3,
      },
      WeeklyForecast: {
        'Monday': { MinTemperature: '2', MaxTemperature: '6' },
        'Tuesday': { MinTemperature: '3', MaxTemperature: '9' },
        'Wednesday': { MinTemperature: '5', MaxTemperature: '6' },
        'Thursday': { MinTemperature: '2', MaxTemperature: '4' },
        'Friday': { MinTemperature: '3', MaxTemperature: '4' },
      }
    },
    Toronto: {
      CurrentTemp: '10',
      HourlyForecast: {
        '1:00': 9,
        '2:00': 7,
        '3:00': 9,
        '4:00': 8,
      },
      WeeklyForecast: {
        'Monday': { MinTemperature: '2', MaxTemperature: '5' },
        'Tuesday': { MinTemperature: '4', MaxTemperature: '6' },
        'Wednesday': { MinTemperature: '3', MaxTemperature: '10' },
        'Thursday': { MinTemperature: '6', MaxTemperature: '7' },
        'Friday': { MinTemperature: '-2', MaxTemperature: '12' },
      }
    },
  };

  // Tab States for Current Location and Swiping
  const PresetLocations = ['Calgary', 'Vancouver', 'Toronto'];
  const [currentTab, setCurrentTab] = useState(0);
  const [swipeLocked, setSwipeLocked] = useState(false); // New swipe lock state

  // Swap Tab States between
  const onGestureEvent = (event) => {

    // Switching Between Tabs

    // TranslationX = current finger position
    const { translationX } = event.nativeEvent;

    // Check if Swipe is locked, if not then lock it
    if (!swipeLocked) {

      // If Delta of position is towards right, then rotate Current Index to the Right +1
      if (translationX > 50) {
        setSwipeLocked(true);
        setCurrentTab((prevIndex) =>
          prevIndex === 0 ? PresetLocations.length - 1 : prevIndex - 1
        );

      // Else if Position is to the left, then rotate Current Index to the Left -1
      } else if (translationX < -50) {
        setSwipeLocked(true);
        setCurrentTab((prevIndex) =>
          prevIndex === PresetLocations.length - 1 ? 0 : prevIndex + 1
        );

      }
    }
  };

  // Unlock swipe on gesture release
  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.state === State.END) {
      setSwipeLocked(false);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChange}>
        <View style={styles.container}>
          <DotIndicator currentIndex={currentTab} total={PresetLocations.length} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <CurrentWeatherDisplay Location={PresetLocations[currentTab]} CurrentTemp={TemporaryData[PresetLocations[currentTab]].CurrentTemp} />
            <Text style={styles.headertext} > Hourly Forecast </Text>
            <View style={styles.hourlyforecastcontainer} >
              <ForecastDisplay Temperature={TemporaryData[PresetLocations[currentTab]].HourlyForecast['1:00']} Hour={'1:00'} />
              <ForecastDisplay Temperature={TemporaryData[PresetLocations[currentTab]].HourlyForecast['2:00']} Hour={'2:00'} />
              <ForecastDisplay Temperature={TemporaryData[PresetLocations[currentTab]].HourlyForecast['3:00']} Hour={'3:00'} />
              <ForecastDisplay Temperature={TemporaryData[PresetLocations[currentTab]].HourlyForecast['4:00']} Hour={'4:00'} />
            </View>
            <Text style={styles.headertext} > Daily Forecast </Text>
            <View style={styles.dailyforecastcontainer} >
            <DailyDisplay 
                Day={'Monday'} 
                MinTemperature={TemporaryData[PresetLocations[currentTab]].WeeklyForecast['Monday'].MinTemperature} 
                MaxTemperature={TemporaryData[PresetLocations[currentTab]].WeeklyForecast['Monday'].MaxTemperature} 
              />
              <DailyDisplay 
                Day={'Tuesday'} 
                MinTemperature={TemporaryData[PresetLocations[currentTab]].WeeklyForecast['Tuesday'].MinTemperature} 
                MaxTemperature={TemporaryData[PresetLocations[currentTab]].WeeklyForecast['Tuesday'].MaxTemperature} 
              />
              <DailyDisplay 
                Day={'Wednesday'} 
                MinTemperature={TemporaryData[PresetLocations[currentTab]].WeeklyForecast['Wednesday'].MinTemperature} 
                MaxTemperature={TemporaryData[PresetLocations[currentTab]].WeeklyForecast['Wednesday'].MaxTemperature} 
              />
              <DailyDisplay 
                Day={'Thursday'} 
                MinTemperature={TemporaryData[PresetLocations[currentTab]].WeeklyForecast['Thursday'].MinTemperature} 
                MaxTemperature={TemporaryData[PresetLocations[currentTab]].WeeklyForecast['Thursday'].MaxTemperature} 
              />
              <DailyDisplay 
                Day={'Friday'} 
                MinTemperature={TemporaryData[PresetLocations[currentTab]].WeeklyForecast['Friday'].MinTemperature} 
                MaxTemperature={TemporaryData[PresetLocations[currentTab]].WeeklyForecast['Friday'].MaxTemperature} 
              />
            </View>
          </ScrollView>
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
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
