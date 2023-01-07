import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { useSelector } from 'react-redux';
import { getDateMinusDays } from '../utils/date';

export default function RecentExpenses(){
    const recentExpenses = useSelector((state) =>
        state.expensesList.allExpenses.filter((expense) => {
            const today = new Date();
            const date7daysAgo = getDateMinusDays(today, 7);

            return expense.date > date7daysAgo;
        })
    );

    return (
        <ExpensesOutput expenses={recentExpenses} expensesPeriod={"Last 7 Days"}/>
    );
}