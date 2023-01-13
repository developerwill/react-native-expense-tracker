import axios from 'axios';

export function storeExpense(expenseData) {
    axios.post('https://react-native-expenses-4e0ad-default-rtdb.firebaseio.com/expenses.json', expenseData)
}