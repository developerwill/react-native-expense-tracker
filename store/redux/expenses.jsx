import { createSlice } from '@reduxjs/toolkit';
import DUMMY_DATA from '../../data/DUMMY_DATA';

const expenseSlice = createSlice({
    name: 'expenses',
    initialState: {
        allExpenses: DUMMY_DATA
    },
    reducers: {
        addExpense: (state, action) => {
            state.allExpenses.push(action.payload.expense);
        },
        deleteExpense: (state, action) => {
            state.allExpenses = state.allExpenses.filter(
                (expense) => expense.id !== action.payload.id
            );
        },
        updateExpense: (state, action) => {
            const expenseIndex = state.allExpenses.find(
                (expense) => expense.id === action.payload.item.id
            );

            const index = state.allExpenses.indexOf(expenseIndex);
            // this is possible because we can mutate it in redux toolkit
            allExpenses[index] = {
                item: item
            };
        }
    }
});

export const addExpense = expenseSlice.actions.addExpense;
export const deleteExpense = expenseSlice.actions.deleteExpense;
export const updateExpense = expenseSlice.actions.updateExpense;
export default expenseSlice.reducer;