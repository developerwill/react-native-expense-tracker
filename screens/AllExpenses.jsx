/* Redux */
import { useSelector } from 'react-redux';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

export default function AllExpenses() {
    const expenses = useSelector((state) => state.expensesList.allExpenses);

    return (
        <ExpensesOutput expensesPeriod={'Total'} expenses={expenses}/>
    );
}