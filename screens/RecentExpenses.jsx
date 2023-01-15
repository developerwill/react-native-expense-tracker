import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { getDateMinusDays } from '../utils/date';
import { useEffect, useState } from 'react';
import { fetchExpenses } from '../utils/http';

export default function RecentExpenses(){
    const [fetchedExpenses, setFetchedExpenses] = useState([]);

    useEffect(() => {
        async function getExpenses() {
            const expenses = await fetchExpenses();
            setFetchedExpenses(expenses);
        }

        void getExpenses();
    }, []);

    const recentExpenses = fetchedExpenses.filter((expense) => {
            const today = new Date();
            const date7daysAgo = getDateMinusDays(today, 7);

            return (expense.date > date7daysAgo) && (expense.date <= today);
        });

    return (
        <ExpensesOutput
            expenses={recentExpenses}
            expensesPeriod={'Last 7 Days'}
            fallbackText={'No expenses registered for the last 7 days'}
        />
    );
}