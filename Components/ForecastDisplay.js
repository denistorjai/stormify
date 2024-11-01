// Imports
import { StyleSheet, Text, View } from 'react-native';

// Icon
import Sunny from '../assets/Sunny.svg'

// Component Rendering
export default function ForecastDisplay({ Temperature, Hour }) {
    return (
        <View style={styles.DisplayContainer}>
            <Text style={styles.Hour}> {Hour} </Text>
            <Sunny width={60} height={60} />
            <Text style={styles.Temp}> {Temperature}° </Text>
        </View>
    )
}

// Style Sheet
const styles = StyleSheet.create({
    DisplayContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    Hour: {
        fontWeight: '500',
        color: '#EBECED',
        paddingBottom: 8,
    },
    Temp: {
        fontWeight: '500',
        color: '#EBECED',
        paddingTop: 8,
    }
});
