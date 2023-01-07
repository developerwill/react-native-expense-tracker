import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* Screens */
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { screensOptions } from './constants/screensOptions';
import { screenNames } from './constants/screenNames';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
    return (
        <BottomTabs.Navigator screenOptions={screensOptions('BottomTabsDefault')}>
            <BottomTabs.Screen
                name={screenNames.RecentExpenses}
                component={RecentExpenses}
                options={screensOptions(screenNames.RecentExpenses)}
            />
            <BottomTabs.Screen
                name={screenNames.AllExpenses}
                component={AllExpenses}
                options={screensOptions(screenNames.AllExpenses)}
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
                        name={screenNames.ExpensesOverview}
                        component={ExpensesOverview}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name={screenNames.ManageExpense} component={ManageExpense}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}