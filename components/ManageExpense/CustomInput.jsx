import { TextInput, View, Text } from 'react-native';

export default function CustomInput({label, textInputConfig}) {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput {...textInputConfig}/>
        </View>
    );
}