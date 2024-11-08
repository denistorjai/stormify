import { StyleSheet, Text, View, ScrollView } from 'react-native';

// Components
import CurrentWeatherDisplay from '../Components/CurrentWeatherDisplay';
import ForecastDisplay from '../Components/ForecastDisplay';
import DailyDisplay from '../Components/DailyDisplay';

export default function SeoulScreen() {

    // Weather Data Logic Required

  return (
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <CurrentWeatherDisplay Location={'Seoul'} CurrentTemp={'7'} />
            <Text style={styles.headertext} > Hourly Forecast </Text>
            <View style={styles.hourlyforecastcontainer} >
              <ForecastDisplay Temperature={'5'} Hour={'1:00'} />
              <ForecastDisplay Temperature={'2'} Hour={'2:00'} />
              <ForecastDisplay Temperature={'12'} Hour={'3:00'} />
              <ForecastDisplay Temperature={'-6'} Hour={'4:00'} />
            </View>
            <Text style={styles.headertext} > Daily Forecast </Text>
            <View style={styles.dailyforecastcontainer} >
            <DailyDisplay 
                Day={'Monday'} 
                MinTemperature={'20'} 
                MaxTemperature={'21'} 
              />
              <DailyDisplay 
                Day={'Tuesday'} 
                MinTemperature={'4'} 
                MaxTemperature={'15'} 
              />
              <DailyDisplay 
                Day={'Wednesday'} 
                MinTemperature={'6'} 
                MaxTemperature={'9'} 
              />
              <DailyDisplay 
                Day={'Thursday'} 
                MinTemperature={'5'} 
                MaxTemperature={'12'} 
              />
              <DailyDisplay 
                Day={'Friday'} 
                MinTemperature={'2'} 
                MaxTemperature={'6'} 
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
