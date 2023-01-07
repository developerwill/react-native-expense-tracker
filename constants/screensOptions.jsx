import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from './styles';
import IconButton from '../components/UI/IconButton';
import { useNavigation } from '@react-navigation/native';

export function screensOptions(screen) {
    const navigation = useNavigation();

    switch (screen) {
        case 'BottomTabsDefault': return {
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: 'white',
            tabBarBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            tabBarActiveTintColor: GlobalStyles.colors.accent500,
            headerRight: ({ tintColor }) => (
                <IconButton icon={'add'} color={tintColor} size={24} onPress={() => {
                    navigation.navigate('ManageExpense');
                }}/>
            )
        }
        case 'RecentExpenses': return {
            title: 'Recent Expenses',
            tabBarLabel: 'Recent',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name={'hourglass'} size={size} color={color}/>
            )
        }
        case 'AllExpenses': return {
            title: 'All Expenses',
            tabBarLabel: 'Recent',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name={'calendar'} size={size} color={color}/>
            )
        }
    }
}