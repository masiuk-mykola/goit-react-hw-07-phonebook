import { configureStore } from '@reduxjs/toolkit';
import { filterReducer, phoneBookReducer } from './reducer';

export const store = configureStore({
  reducer: {
    contacts: phoneBookReducer,
    filter: filterReducer,
  },
});
