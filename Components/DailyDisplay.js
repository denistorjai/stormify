// Imports
import { StyleSheet, Text, View } from 'react-native';

// Component Rendering
export default function DailyDisplay({ Day, MinTemperature, MaxTemperature }) {
    return (
        <View style={styles.DisplayContainer}>
            <View style={styles.Container} >
                <Text style={styles.Day}> {Day} </Text>
                <View style={styles.MinMax} >
                    <Text style={styles.MinTemperature}> Min {MinTemperature}° -</Text>
                    <Text style={styles.MaxTemperature}> {MaxTemperature}° Max </Text>
                </View>
            </View>
        </View>
    )
}

// Style Sheet
const styles = StyleSheet.create({
    DisplayContainer: {
        display: 'flex',
        width: '100%',
        paddingBottom: 12,
    },
    Container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Day: {
        color: '#EBECED',
        fontWeight: '500',
        fontSize: 16,
    },
    MinTemperature: {
        color: '#EBECED',
        fontWeight: '400',
        fontSize: 13,
    },
    MaxTemperature: {
        color: '#EBECED',
        fontWeight: '400',
        fontSize: 13,
    },
    MinMax: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        alignItems: 'center'
    }
});
