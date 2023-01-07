import { useLayoutEffect } from 'react';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/UI/Button';
import { StyleSheet, View } from 'react-native';

export default function ManageExpense({ route, navigation }) {
    const toEdit = route.params?.expenseID;
    const isEditing = !!toEdit; // converts the value into a boolean

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    function deleteExpenseHandler() {
    }

    function cancelHandler() {

    }

    function confirmHandler() {

    }

    return (
        <View style={styles.container}>
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