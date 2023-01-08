import { TextInput, View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

export default function CustomInput({label, textInputConfig, style}) {
    const inputStyles = [styles.input];

    if(textInputConfig?.multiline) {
        inputStyles.push(styles.inputMultiline);
    }

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 4,
        marginVertical: 8
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4
    },
    input: {
        color: GlobalStyles.colors.primary700,
        backgroundColor: GlobalStyles.colors.primary100,
        padding: 6,
        borderRadius: 6,
        fontSize: 18
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    }
});