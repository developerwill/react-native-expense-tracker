import { GlobalStyles } from '../styles';

export function screenOptions(screen) {
    switch (screen) {
        case 'default': return {
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: 'white',
        }
    }
}