import axios from 'axios';

const BACKEND_URL = 'https://react-native-expenses-4e0ad-default-rtdb.firebaseio.com/'

export async function storeExpense(expenseData) {
    const response = await axios.post(BACKEND_URL + 'expenses.json', expenseData);
    return response.data.name; // This is the Firebase object ID
}

export async function firebaseFetchExpenses() {
    const response = await axios.get(BACKEND_URL + 'expenses.json');

    const expenses = [];

    for (const key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        }
        expenses.push(expenseObj);
    }

    return expenses;
}

export function firebaseUpdateExpense(id, expenseData) {
    return axios.put(BACKEND_URL + `expenses/${id}.json`, expenseData)
}

export function firebaseDeleteExpense(id) {
    return axios.delete(BACKEND_URL + `expenses/${id}.json`)
}