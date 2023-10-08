import "./App.css";

// Import Dependencies
import { Routes } from "react-router-dom";

import { Toaster } from "react-hot-toast";

// Routes
import routes from "./routes/routes";

function App() {
	return (
		<>
			<Toaster />
			<Routes>
				{
					routes?.map((route) => route)
				}
			</Routes>
		</>
	);
}

export default App;
