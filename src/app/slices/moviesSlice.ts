import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/react";
import { moviesState } from "../../types";

const initialState: moviesState = {
	data: [],
	loading: false,
	error: null,
	comments: "",
};

export const fetchMovies = createAsyncThunk(
	"fetchMovies",
	async (_, { rejectWithValue }) => {
		try {
			const url = `http://localhost:3000/moviesInfo`;
			const response = await fetch(url);
			if (response.ok) {
				const data = await response.json();
				return data;
			} else {
				// Throw an error to trigger the 'rejected' action
				throw new Error("Failed");
			}
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

export const getAComment = createAsyncThunk(
	"getAComment",
	async (id: number) => {
		try {
			const url = `http://localhost:3000/reviews/${id}`;
			const response = await fetch(url);
			if (response.ok) {
				const data = await response.json();
				return data;
			} else {
				console.log("Faild to return");
			}
		} catch (error) {
			console.log(error);
		}
	}
);

const moviesSlice = createSlice({
	name: "moviesSlice",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchMovies.pending, (state) => {
			state.loading = true;
			state.error = null;
		});
		builder.addCase(fetchMovies.fulfilled, (state, action) => {
			state.data = action.payload;
			state.loading = false;
		});
		builder.addCase(fetchMovies.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload as null;
		});

		// For comments

		builder.addCase(getAComment.fulfilled, (state, action) => {
			state.comments = action.payload;
		});
	},
});

export default moviesSlice.reducer;
