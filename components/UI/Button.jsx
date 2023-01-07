import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

export default function Button({ children, onPress, mode, style }) {
    return (
        <View style={style}>
            {mode === 'flat'
                ?
                <Pressable onPress={onPress} android_ripple={{ color: 'rgba(204,204,204,0.42)' }}>
                    <View style={[styles.button, styles.flat]}>
                        <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
                    </View>
                </Pressable>
                :
                <View style={styles.buttonNotFlat}>
                    <Pressable onPress={onPress} android_ripple={{ color: 'rgba(204,204,204,0.42)' }}>
                        <View style={[styles.button]}>
                            <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
                        </View>
                    </Pressable>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        padding: 8
    },
    buttonNotFlat: {
        backgroundColor: GlobalStyles.colors.primary500
    },
    flat: {
        backgroundColor: 'transparent'
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    },
    flatText: {
        color: GlobalStyles.colors.primary200
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius: 4
    }
});