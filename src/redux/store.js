import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsSlice';
import filterSlice from './filterSlice';
// import { filterReducer } from './reducer';

// export const store = configureStore({
//   reducer: {
//     contacts: phoneBookReducer,
//     filter: filterReducer,
//   },
// });

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
