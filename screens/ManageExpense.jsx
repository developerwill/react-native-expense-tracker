/* Redux */
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense, addExpense, updateExpense } from '../store/redux/expensesSlice';

import { useLayoutEffect } from 'react';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import { StyleSheet, View } from 'react-native';
import ExpenseForm from './ExpenseForm';
import { storeExpense } from '../utils/http';

export default function ManageExpense({ route, navigation }) {
    const expenseID = route.params?.expenseID;
    const isEditing = !!expenseID; // converts the value into a boolean
    const dispatch = useDispatch();

    const expenseData = useSelector((state) =>
        state.expensesList.allExpenses.find((expense) =>
            expense.id === expenseID
        ));

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

    function confirmHandler(expenseData) {
        if (!expenseID) {
            storeExpense(expenseData);
            dispatch(addExpense(expenseData));
            navigation.goBack();
            return;
        }

        dispatch(updateExpense(expenseData));
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <ExpenseForm
                onCancel={cancelHandler}
                onSubmit={confirmHandler}
                isEditing={isEditing}
                defaultValues={expenseData}
            />

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
    }
});