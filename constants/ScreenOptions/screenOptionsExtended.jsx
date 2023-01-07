import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../styles';
import IconButton from '../../components/UI/IconButton';

export function screenOptionsExtended(navigator) {
    const navigation = useNavigation();

    switch (navigator) {
        case 'bottomTabsDefault':
            return {
                headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
                headerTintColor: 'white',
                tabBarBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
                tabBarActiveTintColor: GlobalStyles.colors.accent500,
                headerRight: ({ tintColor }) => (
                    <IconButton icon={'add'} color={tintColor} size={24} onPress={() => {
                        navigation.navigate('ManageExpense');
                    }}/>
                )
            };
    }
}