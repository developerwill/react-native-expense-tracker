import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from './styles';
import IconButton from '../components/UI/IconButton';

export const screensOptions = {
    BottomTabsDefault: {
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
            <IconButton icon={'add'} color={tintColor} size={24} onPress={() =>{}}/>
        ),
        RecentExpenses: {
            title: 'Recent Expenses',
            tabBarLabel: 'Recent',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name={'hourglass'} size={size} color={color}/>
            )
        },
        AllExpenses: {
            title: 'All Expenses',
            tabBarLabel: 'Recent',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name={'calendar'} size={size} color={color}/>
            )
        }
    }
};