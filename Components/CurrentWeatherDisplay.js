// Imports
import { StyleSheet, Text, View, Image } from 'react-native';

// Icons
import Sunny from '../assets/Sunny.svg'

// Component Rendering
export default function CurrentWeatherDisplay({ Location }) {
    return (
        <View>
            <Text style={styles.CityText}> {Location} </Text>
            <View style={styles.WeatherContainer}>
                <Sunny width={290} height={290}/>
            </View>
            <Text style={styles.TemperatureText}> 14° </Text>
            <Text style={styles.WeatherText}> Sunny </Text>
        </View>
    )
}

// Style Sheet
const styles = StyleSheet.create({
    CityText: {
        color: '#EBECED',
        fontSize: 35,
        fontWeight: '600',
        paddingBottom: 4,
    },
    TemperatureText: {
        fontSize: 60,
        fontWeight: '500',
        color: '#EBECED',
    },
    WeatherText: {
        fontSize: 19,
        paddingTop: 5,
        fontWeight: '400',
        color: '#EBECED',
    },
    WeatherContainer: {
        display: 'flex',
        alignItems: 'center',
    }
});
