import { createSlice } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
    name: 'expenses',
    initialState: {
        allExpenses: []
    },
    reducers: {
        setExpenses: (state, action) => {
            state.allExpenses = action.payload.reverse();
        },
        addExpense: (state, action) => {
            state.allExpenses.push(action.payload);
        },
        deleteExpense: (state, action) => {
            state.allExpenses = state.allExpenses.filter(
                (expense) => expense.id !== action.payload.id
            );
        },
        updateExpense: (state, action) => {
            const id = state.allExpenses.findIndex(
                (expense) => expense.id === action.payload.id
            );

            // Gets current list of expenses and updates it
            const currentExpenses = [...state.allExpenses];
            currentExpenses[id] = action.payload;

            state.allExpenses = currentExpenses;
        }
    }
});

export const addExpense = expenseSlice.actions.addExpense;
export const deleteExpense = expenseSlice.actions.deleteExpense;
export const updateExpense = expenseSlice.actions.updateExpense;
export const setExpenses = expenseSlice.actions.setExpenses;
export default expenseSlice.reducer;