import { StyleSheet, Text, View } from 'react-native';
import CustomInput from '../components/ManageExpense/CustomInput';
import { useState } from 'react';
import Button from '../components/UI/Button';
import { getFormattedDate } from '../utils/date';
import { GlobalStyles } from '../constants/styles';

export default function ExpenseForm({ onCancel, onSubmit, isEditing, defaultValues }) {
    const [inputs, setInputs] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true // Equals to defaultValues ? true : false;
        },
        date: {
            value: defaultValues?.date ? getFormattedDate(defaultValues.date) : '',
            isValid: true
        },
        description: {
            value: defaultValues ? defaultValues.description : '',
            isValid: true
        }
    });

    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInputs((currentInputValues) => {
            return {
                ...currentInputValues,
                [inputIdentifier]: { value: enteredValue, isValid: true }
            };
        });
    }

    function submitHandler() {
        const amount = +inputs.amount.value;
        const date = new Date(inputs.date.value);
        const description = inputs.description.value;

        const expenseData = {
            amount: amount,
            date: date,
            description: description
        };

        const amountIsValid = !isNaN(amount) && amount > 0;
        const dateIsValid = date.toString() !== 'Invalid Date';
        const descriptionIsValid = description.trim().length > 0;

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            setInputs((currentInputs) => {
                return {
                    amount: {
                        value: currentInputs.amount.value,
                        isValid: amountIsValid
                    },
                    date: {
                        value: currentInputs.date.value,
                        isValid: dateIsValid
                    },
                    description: {
                        value: currentInputs.description.value,
                        isValid: descriptionIsValid
                    }
                };
            });
            return;
        }
        onSubmit(expenseData);
    }

    const formIsInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Expense</Text>

            <View style={styles.amountDate}>
                <CustomInput
                    label={'Amount'}
                    invalid={!inputs.amount.isValid}
                    style={styles.input}
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputChangeHandler.bind(this, 'amount'),
                        value: inputs.amount.value
                    }}
                />
                <CustomInput
                    label={'Date'}
                    invalid={!inputs.date.isValid}
                    style={styles.input}
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: inputChangeHandler.bind(this, 'date'),
                        value: inputs.date.value
                    }}
                />
            </View>

            <CustomInput
                label={'Description'}
                invalid={!inputs.description.isValid}
                textInputConfig={{
                multiline: true,
                numberOfLines: 4,
                onChangeText: inputChangeHandler.bind(this, 'description'),
                value: inputs.description.value
            }}
            />

            {formIsInvalid && (
                <Text style={styles.errorText}>Invalid input values, please check your entered data!</Text>
            )}

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
    },
    errorText: {
        color: GlobalStyles.colors.error500,
        margin: 8
    }
});