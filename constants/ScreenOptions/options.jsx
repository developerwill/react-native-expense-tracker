import { Ionicons } from '@expo/vector-icons';
import { screenNames } from '../screenNames';

export function options(screen) {
    switch (screen) {
        case screenNames.RecentExpenses:
            return {
                title: 'Recent Expenses',
                tabBarLabel: 'Recent',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name={'hourglass'} size={size} color={color}/>
                )
            };
        case screenNames.AllExpenses:
            return {
                title: 'All Expenses',
                tabBarLabel: 'Recent',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name={'calendar'} size={size} color={color}/>
                )
            };
        case screenNames.ExpensesOverview:
            return {
                headerShown: false
            };
        case screenNames.ManageExpense:
            return {
                title: 'Manage Expense'
            };
    }
}