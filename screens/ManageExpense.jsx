import { Text } from 'react-native';
import { useLayoutEffect } from 'react';

export default function ManageExpense({route, navigation}) {
    const toEdit = route.params?.expenseID;
    const isEditing = !!toEdit; // converts the value into a boolean

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    return (
        <Text>Manage Expense</Text>
    );
}