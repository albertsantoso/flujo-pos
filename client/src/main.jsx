import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "../redux/app/store.js";
import { BrowserRouter } from "react-router-dom";

import { extendTheme, ChakraProvider } from '@chakra-ui/react';
// import theme from '../theme.js'

const theme = extendTheme({
	fonts: {
		body: `Inter`,
		heading: `Inter`
	}
})


ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<BrowserRouter>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</BrowserRouter>
	</Provider>,
);
