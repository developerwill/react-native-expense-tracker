import { StyleSheet, View } from 'react-native';
import CustomInput from '../components/ManageExpense/CustomInput';

export default function ExpenseForm() {
    function amountChangeHandler(){}

    return (
        <View>
            <CustomInput label={'Amount'} textInputConfig={{
                keyboardType: 'decimal-pad',
                onChangeText: amountChangeHandler
            }}
            />
            <CustomInput label={'Date'} textInputConfig={{
                placeholder: 'YYYY-MM-DD',
                maxLength: 10,
                onChangeText: () => {}
            }}
            />
            <CustomInput label={'Description'} textInputConfig={{
                multiline: true,
                numberOfLines: 4
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({});