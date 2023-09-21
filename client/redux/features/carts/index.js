import { Instance } from "../../../src/api/instance";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	carts: [],
};

export const cartsSlice = createSlice({
	name: "carts",
	initialState,
	reducers: {
		setCarts: (initialState, { payload }) => {
			initialState.carts = payload;
		},
	},
});

export const fetchCartAsync = (userId) => async (dispatchEvent) => {
	try {
		const { data } = await Instance().get(`carts/${userId}`);
		dispatchEvent(setCarts(data.data));
	} catch (error) {
		console.log(error);
	}
};

export const changeQuantity = (userId, id, change) => async (dispatchEvent) => {
	try {
		await Instance().patch(`carts/${id}?change=${change}`);
		const { data } = await Instance().get(`carts/${userId}`);
		dispatchEvent(setCarts(data.data));
	} catch (error) {
		console.log(error);
	}
};
export const deleteOrder = (userId, id) => async (dispatchEvent) => {
	try {
		await Instance().delete(`carts/${id}`);
		const { data } = await Instance().get(`carts/${userId}`);
		dispatchEvent(setCarts(data.data));
	} catch (error) {
		console.log(error);
	}
};

export const addToCart = (userId, productId) => async (dispatchEvent) => {
	try {
		const dataToSend = {
			productId: Number(productId),
			quantity: 1,
			userId: 1,
		};
		await Instance().post(`carts`, dataToSend);
		const { data } = await Instance().get(`carts/${userId}`);
		dispatchEvent(setCarts(data.data));
	} catch (error) {
		console.log(error);
	}
};

export const { setCarts } = cartsSlice.actions;

export default cartsSlice.reducer;
