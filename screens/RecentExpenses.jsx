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
import ErrorOverlay from '../components/UI/ErrorOverlay';
import { StyleSheet } from 'react-native';
import Button from '../components/UI/Button';

/* Notifications */
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
    handleNotification: async () => {
        return {
            shouldPlaySound: false,
            shouldSetBadge: false,
            shouldShowAlert: true
        }
    }
});

export default function RecentExpenses() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        async function getExpenses() {
            try {
                const expenses = await firebaseFetchExpenses();
                dispatch(setExpenses(expenses));
            }
            catch (error) {
                setError('Could not fetch expenses!');
            }
            setIsLoading(false);
        }

        void getExpenses();
    }, []);

    useEffect(() => {
        const subscription = Notifications.addNotificationReceivedListener((notification) => {
            const userName = notification.request.content.data.userName;
            console.log(userName);
        });

        return () => {
            subscription.remove();
        }
    }, []);

    const recentExpenses = useSelector((state) =>
        state.expensesList.allExpenses.filter((expense) => {
            const today = new Date();
            const date7daysAgo = getDateMinusDays(today, 7);

            return (expense.date > date7daysAgo) && (expense.date <= today);
        })
    );

    if (error && !isLoading) {
        return <ErrorOverlay message={error}/>;
    }

    if (isLoading) {
        return <LoadingOverlay/>;
    }

    function scheduleLocalNotificationHandler() {
        void Notifications.scheduleNotificationAsync({
           trigger: {
               seconds: 2
           },
           content: {
               title: 'Local notification',
               body: 'This is the local notification',
               data: { userName: 'Max'}
           },
        });
    }

    return (
        <>
            <ExpensesOutput
                expenses={recentExpenses}
                expensesPeriod={'Last 7 Days'}
                fallbackText={'No expenses registered for the last 7 days'}
            />
            <Button style={styles.scheduleButton} mode={'flat'} onPress={scheduleLocalNotificationHandler}>Schedule
                Local Notification</Button>
        </>
    );
}

const styles = StyleSheet.create({
    scheduleButton: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});