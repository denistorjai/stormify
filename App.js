import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, TextInput, Button, View, FlatList, TouchableOpacity } from 'react-native';

// Weather Display Screen
import WeatherScreen from './Screens/WeatherScreen';

// Stack Navigator
const Stack = createStackNavigator();

// City Selection Screen
function CitySelectionScreen({ navigation }) {

  // City States & Error States
  const [cities, setCities] = useState(['Calgary', 'Vancouver', 'Seoul', 'Singapore']);
  const [newCity, setNewCity] = useState('');
  const [error, setError] = useState('');

  // City Weather Verification
  const verifyCity = async (city) => {

    // Try & Catch, if Response is 200 and not 404, City is real.
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cbce13c2fe20b0b066a2b25f40575c58`
      );
      const data = await response.json();
      if (response.status === 200 && data.cod !== '404') {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.error(err);
      return false;
    }

  };

  // Add City to the list, if City is verified, and not empty then add to list.
  const handleAddCity = async () => {

    if (newCity.trim()) {

      if (cities.includes(newCity.trim())) {
        setError('City already added, Please enter a different city');
        return;
      }  

      const isValid = await verifyCity(newCity.trim());

      if (isValid) {
        setCities([...cities, newCity.trim()]);
        setNewCity('');
        setError('');
      } else {
        setError('City not found, Please enter a valid city');
      }

    } else {
      setError('Please enter a city name');
    }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add a city</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter City"
          value={newCity}
          onChangeText={setNewCity}
          placeholderTextColor="rgb(157, 157, 157)"
        />
        <Button color="#ffffff" title="Add" onPress={handleAddCity} />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Text style={styles.header}>Select a City</Text>
      <FlatList
        style={styles.list}
        data={cities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cityButton}
            onPress={() => navigation.navigate('WeatherScreen', { city: item })}
          >
            <Text style={styles.cityText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

// Default App navigation.
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CitySelectionScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1D2635',
            borderBottomWidth: 0,
            elevation: 0,
            shadowOpacity: 0, 
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'medium',
            fontSize: 18,
          },
        }}
      >
        <Stack.Screen name="CitySelectionScreen" component={CitySelectionScreen} options={{ title: 'Select City' }} />
        <Stack.Screen name="WeatherScreen" component={WeatherScreen} options={{ title: 'Weather' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#1D2635',
  },
  header: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cityButton: {
    padding: 14,
    backgroundColor: '#233046',
    marginVertical: 5,
    borderRadius: 10,
  },
  cityText: {
    color: '#fff',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#233046',
    borderColor: '#233046',
    borderRadius: 10,
    padding: 14,
    marginRight: 5,
    color: '#ffffff',
    fontSize: 16,
  },
  errorText: {
    marginTop: -10,
    marginBottom: 25,
    color: 'red',
    fontSize: 14,
  },
});
