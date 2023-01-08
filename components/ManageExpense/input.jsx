import { TextInput } from 'react-native';

export default function input({label, textInputConfig}) {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput {...textInputConfig}/>
        </View>
    );
}