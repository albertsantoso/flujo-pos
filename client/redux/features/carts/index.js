import { Instance } from "../../../src/api/instance";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	carts: [],
	totalItems: 0,
	subtotal: 0,
	tax: 0,
	totalAmount: 0,
};

export const cartsSlice = createSlice({
	name: "carts",
	initialState,
	reducers: {
		setCarts: (initialState, { payload }) => {
			initialState.carts = payload;
		},
		setTotalItems: (initialState, { payload }) => {
			initialState.totalItems = payload;
		},
		setSubtotal: (initialState, { payload }) => {
			initialState.subtotal = payload;
		},
		setTax: (initialState, { payload }) => {
			initialState.tax = payload;
		},
		setTotalAmount: (initialState, { payload }) => {
			initialState.totalAmount = payload;
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
export const setOrderSummary = (userId) => async (dispatchEvent) => {
	try {
		let totalItems = 0;
		let subtotal = 0;
		let tax = 0;
		const { data } = await Instance().get(`carts/${userId}`);
		const carts = data.data;
		carts.map((v) => {
			totalItems += Number(v.quantity);
			subtotal += Number(Number(v.product.product_price) * Number(v.quantity));
		});
		tax = 0.1 * subtotal;
		let totalAmount = subtotal + tax;
		dispatchEvent(setTotalItems(totalItems));
		dispatchEvent(setSubtotal(subtotal));
		dispatchEvent(setTax(tax));
		dispatchEvent(setTotalAmount(totalAmount));
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

export const { setCarts, setTotalItems, setSubtotal, setTax, setTotalAmount } = cartsSlice.actions;

export default cartsSlice.reducer;
