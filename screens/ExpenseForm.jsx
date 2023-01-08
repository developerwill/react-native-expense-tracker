import { StyleSheet, Text, View } from 'react-native';
import CustomInput from '../components/ManageExpense/CustomInput';
import { useState } from 'react';

export default function ExpenseForm() {
    const [inputValues, setInputValues] = useState({
        amount: '',
        date: '',
        description: ''
    });

    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInputValues((currentInputValues) => {
            return {
                ...currentInputValues,
                [inputIdentifier]: enteredValue
            };
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.amountDate}>
                <CustomInput label={'Amount'} style={styles.input} textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangeHandler.bind(this, 'amount'),
                    value: inputValues.amount
                }}
                />
                <CustomInput label={'Date'} style={styles.input} textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: inputChangeHandler.bind(this, 'date'),
                    value: inputValues.date
                }}
                />
            </View>
            <CustomInput label={'Description'} textInputConfig={{
                multiline: true,
                numberOfLines: 4,
                onChangeText: inputChangeHandler.bind(this, 'description'),
                value: inputValues.description
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40
    },
    amountDate: {
        flexDirection: 'row'
    },
    input: {
        flex: 1
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40
    }
});