import {
	bindActionCreators,
	createSlice,
	PayloadAction,
} from "@reduxjs/toolkit";

interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: 0,
};

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.value++;
		},
		amountadded: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		reset: (state) => {
			state.value = 0;
		},
	},
});

export const { increment, decrement, reset, amountadded } =
	counterSlice.actions;
export default counterSlice.reducer;
