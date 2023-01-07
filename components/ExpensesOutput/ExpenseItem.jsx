import { Pressable, StyleSheet, View, Text } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { getFormattedDate } from '../../utils/date';
import { useNavigation } from '@react-navigation/native';

export default function ExpenseItem({ description, amount, date }) {
    const navigation = useNavigation();

    function expensePressHandler() {
        navigation.navigate('ManageExpense');
    }

    return (
        <View style={styles.expenseItemOuter}>
            <Pressable onPress={expensePressHandler} android_ripple={{color: 'rgba(204,204,204,0.58)'}}>
                <View style={styles.expenseItem}>
                    <View>
                        <Text style={[styles.textBase, styles.description]}>{description}</Text>
                        <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
                    </View>
                    <View style={styles.amountContainer}>
                        <Text style={styles.amount}>{amount.toFixed(2)}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    expenseItemOuter: {
        marginVertical: 8,
        borderRadius: 6,
        backgroundColor: GlobalStyles.colors.primary500,
        overflow: 'hidden'
    },
    expenseItem: {
        padding: 12,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textBase: {
        color: GlobalStyles.colors.primary50
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 80
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold'
    },
    pressed: {
        opacity: 0.75
    }
});