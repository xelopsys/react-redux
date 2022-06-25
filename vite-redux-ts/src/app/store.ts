import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
// import counterReducer from '../features/counterSlice'
import { apiSlice } from "../features/dogs/dogsApiSlice";

export const store = configureStore({
	reducer: {
		counter: counterSlice,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddelware) => {
		return getDefaultMiddelware().concat(apiSlice.middleware);
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
