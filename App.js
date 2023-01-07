import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* Screens */
import { screenNames } from './constants/screenNames';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';

/* Screen Options */
import { options } from './constants/ScreenOptions/options';
import { screenOptionsExtended } from './constants/ScreenOptions/screenOptionsExtended';
import { screenOptions } from './constants/ScreenOptions/screenOptions';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
    return (
        <BottomTabs.Navigator screenOptions={screenOptionsExtended('bottomTabsDefault')}>
            <BottomTabs.Screen
                name={screenNames.RecentExpenses}
                component={RecentExpenses}
                options={options(screenNames.RecentExpenses)}
            />
            <BottomTabs.Screen
                name={screenNames.AllExpenses}
                component={AllExpenses}
                options={options(screenNames.AllExpenses)}
            />
        </BottomTabs.Navigator>
    );
}

export default function App() {
    return (
        <>
            <StatusBar style="auto"/>

            <NavigationContainer>
                <Stack.Navigator screenOptions={screenOptions('default')}>
                    <Stack.Screen
                        name={screenNames.ExpensesOverview}
                        component={ExpensesOverview}
                        options={options(screenNames.ExpensesOverview)}
                    />
                    <Stack.Screen
                        name={screenNames.ManageExpense}
                        component={ManageExpense}
                        options={options(screenNames.ManageExpense)}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}