import { configureStore } from "@reduxjs/toolkit";
import cartsSlice from "../features/carts";

export const store = configureStore({
	reducer: {
		carts: cartsSlice,
	},
});
