import axios from "axios";

function ApiInstance(authrorization = null) {
	return axios.create({
		baseURL: import.meta.env.VITE_REACT_APP_URL,
		headers: {
			authrorization,
		},
	});
}

export const Instance = ApiInstance;
