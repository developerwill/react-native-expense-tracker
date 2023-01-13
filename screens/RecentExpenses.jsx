import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { useSelector } from 'react-redux';
import { getDateMinusDays } from '../utils/date';
import { useEffect } from 'react';
import { fetchExpenses } from '../utils/http';

export default function RecentExpenses(){
    useEffect(() => {
        async function getExpenses() {
            const expenses = await fetchExpenses();
        }

        getExpenses();
    }, []);

    const recentExpenses = useSelector((state) =>
        state.expensesList.allExpenses.filter((expense) => {
            const today = new Date();
            const date7daysAgo = getDateMinusDays(today, 7);

            return (expense.date > date7daysAgo) && (expense.date <= today);
        })
    );

    return (
        <ExpensesOutput
            expenses={recentExpenses}
            expensesPeriod={'Last 7 Days'}
            fallbackText={'No expenses registered for the last 7 days'}
        />
    );
}