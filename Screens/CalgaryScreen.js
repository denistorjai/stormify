import { StyleSheet, Text, View, ScrollView } from 'react-native';

// Components
import CurrentWeatherDisplay from '../Components/CurrentWeatherDisplay';
import ForecastDisplay from '../Components/ForecastDisplay';
import DailyDisplay from '../Components/DailyDisplay';

export default function CalgaryScreen() {

    // Weather Data Logic Required

  return (
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <CurrentWeatherDisplay Location={'Calgary'} CurrentTemp={'5'} />
            <Text style={styles.headertext} > Hourly Forecast </Text>
            <View style={styles.hourlyforecastcontainer} >
              <ForecastDisplay Temperature={'3'} Hour={'1:00'} />
              <ForecastDisplay Temperature={'6'} Hour={'2:00'} />
              <ForecastDisplay Temperature={'9'} Hour={'3:00'} />
              <ForecastDisplay Temperature={'4'} Hour={'4:00'} />
            </View>
            <Text style={styles.headertext} > Daily Forecast </Text>
            <View style={styles.dailyforecastcontainer} >
            <DailyDisplay 
                Day={'Monday'} 
                MinTemperature={'3'} 
                MaxTemperature={'7'} 
              />
              <DailyDisplay 
                Day={'Tuesday'} 
                MinTemperature={'4'} 
                MaxTemperature={'10'} 
              />
              <DailyDisplay 
                Day={'Wednesday'} 
                MinTemperature={'12'} 
                MaxTemperature={'14'} 
              />
              <DailyDisplay 
                Day={'Thursday'} 
                MinTemperature={'3'} 
                MaxTemperature={'9'} 
              />
              <DailyDisplay 
                Day={'Friday'} 
                MinTemperature={'14'} 
                MaxTemperature={'19'} 
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
    paddingBottom: 35,
  }
});
