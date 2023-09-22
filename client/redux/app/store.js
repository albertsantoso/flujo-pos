import { configureStore } from "@reduxjs/toolkit";
import cartsSlice from "../features/carts";
import userSlice from "../features/users";

export const store = configureStore({
	reducer: {
		users: userSlice,
		carts: cartsSlice,
	},
});
