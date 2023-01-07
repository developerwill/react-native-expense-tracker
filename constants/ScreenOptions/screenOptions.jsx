import { GlobalStyles } from '../styles';

export function screenOptions(navigator) {
    switch (navigator) {
        case 'default': return {
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: 'white',
        }
    }
}