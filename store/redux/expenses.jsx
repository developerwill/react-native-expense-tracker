import { createSlice } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
    name: 'expenses',
    initialState: {
        ids: []
    },
    reducers: {
        addExpense: (state, action) => {
            state.ids.push(action.payload.id);
        },
        removeExpense: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    }
});

export const addExpense = expenseSlice.actions.addExpense;
export const removeExpense = expenseSlice.actions.removeExpense;
export default expenseSlice.reducer;