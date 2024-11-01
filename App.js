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

  // Tab States for Current Location and Swiping
  const PresetLocations = ['Calgary', 'Vancouver', 'Seoul', 'London'];
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
            <CurrentWeatherDisplay Location={PresetLocations[currentTab]} />
            <Text style={styles.headertext} > Hourly Forecast </Text>
            <View style={styles.hourlyforecastcontainer} >
              <ForecastDisplay Temperature={14} Hour={'3:00'} />
              <ForecastDisplay Temperature={16} Hour={'4:00'} />
              <ForecastDisplay Temperature={12} Hour={'5:00'} />
              <ForecastDisplay Temperature={13} Hour={'6:00'} />
            </View>
            <Text style={styles.headertext} > Daily Forecast </Text>
            <View style={styles.dailyforecastcontainer} >
              <DailyDisplay Day={'Monday'} MinTemperature={3} MaxTemperature={5} />
              <DailyDisplay Day={'Tuesday'} MinTemperature={6} MaxTemperature={9} />
              <DailyDisplay Day={'Wednesday'} MinTemperature={3} MaxTemperature={5} />
              <DailyDisplay Day={'Thursday'} MinTemperature={3} MaxTemperature={5} />
              <DailyDisplay Day={'Friday'} MinTemperature={3} MaxTemperature={5} />
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
