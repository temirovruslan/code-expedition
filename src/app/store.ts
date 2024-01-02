import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/MoviesSlice";

export const store = configureStore({
	reducer: {
		movies: moviesSlice,
		
	},
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
