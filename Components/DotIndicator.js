// Imports
import { StyleSheet, Text, View } from 'react-native';

// Component Rendering
export default function DotIndicator({ currentIndex, total }) {
    return (
    <View style={styles.dotContainer}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            { opacity: index === currentIndex ? 1 : 0.5 },
          ]}
        />
      ))}
    </View>
    )
}

// Style Sheet
const styles = StyleSheet.create({
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10,
        position: 'absolute',
        bottom: 30, 
        left: 0,
        right: 0,
      },
      dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#5d96ce',
        margin: 5,
      },
});
