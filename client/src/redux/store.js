import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice'; // We will create this file in the next step

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  // This middleware prevents errors when sending non-serializable data to Redux
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});