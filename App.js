import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';;
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';

// Pages
import Calgary from './Tabs/Calgary';
import CurrentLocation from './Tabs/CurrentLocation';
import Seoul from './Tabs/Seoul';
import Vancouver from './Tabs/Vancouver';
import Singapore from './Tabs/Singapore';

export default function App() {

  // Expo Router
  const router = useRouter();

  // Page Index
  const [pageIndex, setPageIndex] = useState(0);

  // Pages/Locations
  const locations = ['CurrentLocation', 'Calgary', 'Seoul', 'Vancouver', 'Singapore'];

  // On Swipe, Check the Swipe Direction and Index The Page
  const onSwipe = ({ nativeEvent }) => {
      // TranslationX -50 = Swipe to the left, check if PageIndex exceeds
    if (nativeEvent.translationX < -50 && pageIndex < locations.length - 1) {
      // Set Page Index and Push Router
      setPageIndex(pageIndex + 1);
      router.push(`/${locations[pageIndex + 1].toLowerCase()}`);
      // Else if Swipe is Right, Add Index and Push Router
    } else if (nativeEvent.translationX > 50 && pageIndex > 0) {
      setPageIndex(pageIndex - 1);
      router.push(`/${locations[pageIndex - 1].toLowerCase()}`);
    }

  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <PanGestureHandler onGestureEvent={onSwipe}>
        <View style={styles.pageContainer}>
          <Text style={styles.header}>Weather App</Text>
          <Text style={styles.location}>{locations[pageIndex]}</Text>
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
  },
});
