import { Instance } from "../../../src/api/instance";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	id: 0,
	username: "",
	profile_picture: "",
	updated_picture: null,
	role: "",
	email: "",
};

export const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		setId: (initialState, { payload }) => {
			initialState.id = payload;
		},
		setUsername: (initialState, { payload }) => {
			initialState.username = payload;
		},
		setProfile_Picture: (initialState, { payload }) => {
			initialState.profile_picture = payload;
		},
		setRole: (initialState, { payload }) => {
			initialState.role = payload;
		},
		setEmail: (initialState, { payload }) => {
			initialState.email = payload;
		},
		setUpdatedPicture: (initialState, { payload }) => {
			initialState.updated_picture = payload;
		},
	},
});

export const onLoginAsync =
	({ username, password }) =>
	async (dispatch) => {
		try {
			const { data } = await Instance().post(`users/login`, { username, password });
			console.log(data);
			localStorage.setItem("accessToken", data.accessToken);
			dispatch(setId(data.data.id));
			dispatch(setUsername(data.data.username));
			dispatch(setProfile_Picture(data.data.profile_picture));
			dispatch(setRole(data.data.role));
			dispatch(setEmail(data.data.email));
		} catch (error) {
			console.log(error);
			return error;
		}
	};

export const onCheckIsLogin = () => async (dispatch) => {
	try {
		const accessToken = localStorage.getItem("accessToken");
		const { data } = await Instance(accessToken).get(`users/one`);
		dispatch(setId(data.data.id));
		dispatch(setUsername(data.data.username));
		dispatch(setProfile_Picture(data.data.profile_picture));
		dispatch(setRole(data.data.role));
		dispatch(setEmail(data.data.email));
	} catch (error) {
		console.log(error);
	}
};

export const onLogout = () => async (dispatch) => {
	try {
		localStorage.removeItem("accessToken");
		const res = "";
		dispatch(setId(0));
		dispatch(setUsername(res));
		dispatch(setProfile_Picture(res));
		dispatch(setRole(res));
		dispatch(setEmail(res));
	} catch (error) {
		console.log(error);
	}
};

export const { setUsername, setId, setRole, setProfile_Picture, setEmail, setUpdatedPicture } =
	userSlice.actions;
export default userSlice.reducer;