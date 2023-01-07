import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* Screens */
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { screensOptions } from './constants/screensOptions';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
    return (
        <BottomTabs.Navigator screenOptions={screensOptions('BottomTabsDefault')}>
            <BottomTabs.Screen
                name={'RecentExpenses'}
                component={RecentExpenses}
                options={screensOptions('RecentExpenses')}
            />
            <BottomTabs.Screen
                name={'AllExpenses'}
                component={AllExpenses}
                options={screensOptions('AllExpenses')}
            />
        </BottomTabs.Navigator>
    );
}

export default function App() {
    return (
        <>
            <StatusBar style="auto"/>

            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name={'ExpensesOverview'}
                        component={ExpensesOverview}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name={'ManageExpense'} component={ManageExpense}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}