/* Redux */
import { useDispatch } from 'react-redux';
import { deleteExpense, addExpense, updateExpense } from '../store/redux/expensesSlice';

import { useLayoutEffect } from 'react';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/UI/Button';
import { StyleSheet, View } from 'react-native';
import ExpenseForm from './ExpenseForm';

export default function ManageExpense({ route, navigation }) {
    const expenseID = route.params?.expenseID;
    const isEditing = !!expenseID; // converts the value into a boolean
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    function deleteExpenseHandler() {
        dispatch(deleteExpense({ id: expenseID }));
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler() {
        if (!expenseID) {
            dispatch(addExpense(
                {
                    id: 'e99',
                    description: 'Test',
                    amount: 99.99,
                    date: new Date('2023-01-02')
                }
            ));
            navigation.goBack();
            return;
        }

        dispatch(updateExpense(
            {
                id: 'e99',
                description: 'Test update!',
                amount: 100,
                date: new Date('2023-01-02')
            }
        ));
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <ExpenseForm />
            <View style={styles.buttonsContainer}>
                <Button style={styles.button} mode={'flat'} onPress={cancelHandler}>Cancel</Button>
                <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
            </View>
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton
                        icon={'trash'}
                        color={GlobalStyles.colors.error500}
                        size={36}
                        onPress={deleteExpenseHandler}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 16,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        borderRadius: 6,
        minWidth: 120,
        marginHorizontal: 8,
        overflow: 'hidden'
    }
});