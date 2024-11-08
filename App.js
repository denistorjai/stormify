import 'react-native-gesture-handler'; // Important for navigation
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

// Screens
import CalgaryScreen from './Screens/CalgaryScreen';
import VancouverScreen from './Screens/VancouverScreen';
import SeoulScreen from './Screens/SeoulScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer styles={styles.container}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false, // Hide the header
          tabBarActiveTintColor: '#ffffff', // Active tab color
          tabBarInactiveTintColor: '#4e6591', // Inactive tab color
          tabBarStyle: styles.tabBar, // Style for the tab bar
          tabBarLabelStyle: styles.tabLabel, // Style for the tab labels
        }}
      >
        <Tab.Screen name="Calgary" component={CalgaryScreen} />
        <Tab.Screen name="Vancouver" component={VancouverScreen} />
        <Tab.Screen name="Seoul" component={SeoulScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  tabBar: {
    backgroundColor: '#283448',
    borderTopWidth: 0, 
    height: 90,
  },
  tabLabel: {
    fontSize: 14
  },
});
