import { Instance } from "../../../src/api/instance";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
	orderField: "",
	orderDirection: "",
	search: "",
	category: "",
	page: 1,
	offset: 0,
};

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		setProducts: (initialState, { payload }) => {
			initialState.products = payload;
		},
		setOrderField: (initialState, { payload }) => {
			initialState.orderField = payload;
		},
		setOrderDirection: (initialState, { payload }) => {
			initialState.orderDirection = payload;
		},
		setSearch: (initialState, { payload }) => {
			initialState.search = payload;
		},
		setPage: (initialState, { payload }) => {
			initialState.page = payload;
		},
		setOffset: (initialState, { payload }) => {
			initialState.offset = payload;
		},
		resetPage: (initialState) => {
			initialState.page = 1;
		},
		resetOffset: (initialState) => {
			initialState.offset = 0;
		},
		nextPage: (initialState) => {
			initialState.page += 1;
		},
		addOffset: (initialState) => {
			initialState.offset += 10;
		},
		previousPage: (initialState) => {
			if (initialState.page == 1) {
				initialState.page = 1;
			} else {
				initialState.page -= 1;
			}
		},
		subtractOffset: (initialState) => {
			if (initialState.offset == 0) {
				initialState.offset = 0;
			} else {
				initialState.offset -= 10;
			}
		},
		setCategory: (initialState, { payload }) => {
			initialState.category = payload;
		},
	},
});

export const fetchProductAsync = (query) => async (dispatchEvent) => {
	try {
		const accessToken = localStorage.getItem("accessToken");
		const { data } = await Instance(accessToken).get(`products/all${query ? query : ""}`);
		dispatchEvent(setProducts(data.data));
	} catch (error) {
		console.log(error);
	}
};
export const onSort = (field, direction) => async (dispatchEvent) => {
	try {
		dispatchEvent(setOrderField(field));
		dispatchEvent(setOrderDirection(direction));
		dispatchEvent(resetPage());
		dispatchEvent(resetOffset());
	} catch (error) {
		console.log(error);
	}
};
export const onSearch = (search) => async (dispatchEvent) => {
	try {
		dispatchEvent(setSearch(search));
		dispatchEvent(resetPage());
		dispatchEvent(resetOffset());
	} catch (error) {
		console.log(error);
	}
};
export const onCategory = (category) => async (dispatchEvent) => {
	try {
		dispatchEvent(setCategory(category));
	} catch (error) {
		console.log(error);
	}
};
export const onNextPage = () => async (dispatchEvent) => {
	try {
		dispatchEvent(nextPage());
		dispatchEvent(addOffset());
	} catch (error) {
		console.log(error);
	}
};
export const onPreviousPage = () => async (dispatchEvent) => {
	try {
		dispatchEvent(previousPage());
		dispatchEvent(subtractOffset());
	} catch (error) {
		console.log(error);
	}
};
export const setPagination = (page, offset) => async (dispatchEvent) => {
	try {
		dispatchEvent(setPage(page));
		dispatchEvent(setOffset(offset));
	} catch (error) {
		console.log(error);
	}
};

export const onClear = () => async (dispatchEvent) => {
	try {
		dispatchEvent(resetPage());
		dispatchEvent(resetOffset());
		dispatchEvent(setOrderField(""));
		dispatchEvent(setOrderDirection(""));
		dispatchEvent(setCategory(""));
	} catch (error) {
		console.log(error);
	}
};

export const {
	setProducts,
	setOrderField,
	setOrderDirection,
	setSearch,
	setPage,
	setOffset,
	nextPage,
	addOffset,
	previousPage,
	subtractOffset,
	resetPage,
	resetOffset,
	setCategory,
} = productsSlice.actions;

export default productsSlice.reducer;
