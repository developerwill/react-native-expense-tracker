import { StyleSheet, Text, View } from 'react-native';
import CustomInput from '../components/ManageExpense/CustomInput';

export default function ExpenseForm() {
    function amountChangeHandler(){}

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.amountDate}>
                <CustomInput label={'Amount'} style={styles.input} textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: amountChangeHandler
                }}
                />
                <CustomInput label={'Date'} style={styles.input} textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: () => {}
                }}
                />
            </View>
            <CustomInput label={'Description'} textInputConfig={{
                multiline: true,
                numberOfLines: 4
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 40
    },
    amountDate: {
        flexDirection: 'row',
    },
    input: {
        flex: 1
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40
    }
});