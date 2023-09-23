import { configureStore } from "@reduxjs/toolkit";
import cartsSlice from "../features/carts";
import userSlice from "../features/users";
import productsSlice from "../features/products";

export const store = configureStore({
	reducer: {
		users: userSlice,
		carts: cartsSlice,
		products: productsSlice,
	},
});
