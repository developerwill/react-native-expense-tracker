import { StyleSheet, Text, View } from 'react-native';
import CustomInput from '../components/ManageExpense/CustomInput';
import { useState } from 'react';
import Button from '../components/UI/Button';
import { getFormattedDate } from '../utils/date';

export default function ExpenseForm({ onCancel, onSubmit, isEditing, defaultValues }) {
    const [inputValues, setInputValues] = useState({
        id: defaultValues ? defaultValues.id : Math.random().toString(),
        amount: defaultValues ? defaultValues.amount.toString() : '',
        date: defaultValues?.date ? getFormattedDate(defaultValues.date) : '',
        description: defaultValues ? defaultValues.description : ''
    });

    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInputValues((currentInputValues) => {
            return {
                ...currentInputValues,
                [inputIdentifier]: enteredValue
            };
        });
    }

    function submitHandler() {
        const expenseData = {
            id: inputValues.id,
            amount: +inputValues.amount,
            date: new Date(inputValues.date),
            description: inputValues.description
        };

        onSubmit(expenseData);
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

            <View style={styles.buttonsContainer}>
                <Button style={styles.button} mode={'flat'} onPress={onCancel}>Cancel</Button>
                <Button style={styles.button} onPress={submitHandler}>{isEditing ? 'Update' : 'Add'}</Button>
            </View>
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
    },
    button: {
        borderRadius: 6,
        minWidth: 120,
        marginHorizontal: 8,
        overflow: 'hidden'
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16
    }
});