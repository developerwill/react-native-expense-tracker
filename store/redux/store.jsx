import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from './expensesSlice';

export const store = configureStore({
    reducer: {
        expensesList: expensesReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});