import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { useSelector } from 'react-redux';

export default function AllExpenses() {
    const fetchedExpenses = useSelector((state) => state.expensesList.allExpenses);

    return (
        <ExpensesOutput
            expensesPeriod={'Total'}
            expenses={fetchedExpenses}
            fallbackText={'No registered expenses found!'}
        />
    );
}