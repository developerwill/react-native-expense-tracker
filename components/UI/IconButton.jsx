import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ({icon, size, color, onPress}) {
    return (
        <Pressable style={({pressed}) => pressed && styles.pressed} onPress={onPress}>
            <View style={size.buttonContainer}>
                <Ionicons name={icon} size={size} color={color}/>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 10,
        marginVertical: 2
    },
    pressed: {
        opacity: 0.75
    }
});