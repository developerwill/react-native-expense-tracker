/* Redux */
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense, addExpense, updateExpense, setExpenses } from '../store/redux/expensesSlice';

/* React */
import { useEffect, useLayoutEffect, useState } from 'react';

import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import { StyleSheet, View } from 'react-native';
import ExpenseForm from './ExpenseForm';

import { firebaseDeleteExpense, firebaseUpdateExpense, storeExpense } from '../utils/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ErrorOverlay from '../components/UI/ErrorOverlay';

export default function ManageExpense({ route, navigation }) {
    const expenseID = route.params?.expenseID;
    const isEditing = !!expenseID; // converts the value into a boolean
    const dispatch = useDispatch();
    const [updatedExpenses, setUpdatedExpenses] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const expenseData = useSelector((state) =>
        state.expensesList.allExpenses.find((expense) =>
            expense.id === expenseID
        ));

    useEffect(() => {
        if(updatedExpenses) {
            async function getExpenses() {
                const expenses = await updatedExpenses();
                dispatch(setExpenses(expenses));
            }
            void getExpenses();
        }
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing, updatedExpenses]);

    async function deleteExpenseHandler() {
        setIsSubmitting(true);

        try {
            await firebaseDeleteExpense(expenseID);
            dispatch(deleteExpense({ id: expenseID }));
            navigation.goBack();
        } catch (error) {
            setError('Could not delete expense - Try again later');
            setIsSubmitting(false);
        }
    }

    function cancelHandler() {
        navigation.goBack();
    }

    async function confirmHandler(expenseData) {
        setIsSubmitting(true);

        try {
            if (!expenseID) {
                const id = await storeExpense(expenseData);

                dispatch(addExpense({ ...expenseData, id: id }));
                setUpdatedExpenses(true);
                navigation.goBack();
                return;
            }

            await firebaseUpdateExpense(expenseID, expenseData);
            dispatch(updateExpense({ ...expenseData, id: expenseID }));
            navigation.goBack();
        } catch (error) {
            setError('Could not save date - Try again later');
            setIsSubmitting(false);
        }
    }

    if(error && !isSubmitting) {
        return <ErrorOverlay message={error}/>
    }

    if(isSubmitting) {
        return <LoadingOverlay/>
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