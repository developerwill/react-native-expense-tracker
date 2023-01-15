/* Redux */
import { useDispatch, useSelector } from 'react-redux';
import { setExpenses } from '../store/redux/expensesSlice';

/* React */
import { useEffect, useState } from 'react';

/* Axios */
import { firebaseFetchExpenses } from '../utils/http';

/* Other Imports */
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { getDateMinusDays } from '../utils/date';
import LoadingOverlay from '../components/UI/LoadingOverlay';

export default function RecentExpenses() {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        async function getExpenses() {
            const expenses = await firebaseFetchExpenses();
            setIsLoading(false);
            dispatch(setExpenses(expenses));
        }

        void getExpenses();
    }, []);

    const recentExpenses = useSelector((state) =>
        state.expensesList.allExpenses.filter((expense) => {
            const today = new Date();
            const date7daysAgo = getDateMinusDays(today, 7);

            return (expense.date > date7daysAgo) && (expense.date <= today);
        })
    );

    if (isLoading) {
        return <LoadingOverlay/>;
    }

    return (
        <ExpensesOutput
            expenses={recentExpenses}
            expensesPeriod={'Last 7 Days'}
            fallbackText={'No expenses registered for the last 7 days'}
        />
    );
}