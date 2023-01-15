import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { useEffect, useState } from 'react';
import { fetchExpenses } from '../utils/http';

export default function AllExpenses() {
    const [fetchedExpenses, setFetchedExpenses] = useState([]);

    useEffect(() => {
        async function getExpenses() {
            const expenses = await fetchExpenses();
            setFetchedExpenses(expenses);
        }

        void getExpenses();
    }, []);

    return (
        <ExpensesOutput
            expensesPeriod={'Total'}
            expenses={fetchedExpenses}
            fallbackText={'No registered expenses found!'}
        />
    );
}