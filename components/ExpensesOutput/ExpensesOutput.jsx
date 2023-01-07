import { StyleSheet, Text, View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import { GlobalStyles } from '../../constants/styles';

export default function ExpensesOutput({ expensesPeriod, expenses, fallbackText }) {
    let content = <Text style={styles.infoText}>{fallbackText}</Text>

    if(expenses.length > 0) {
        content = <ExpensesList expenses={expenses}/>
    }

    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32,
        flex: 1
    }
});