import "./App.css";

// Import Dependencies
import { Routes, Route } from 'react-router-dom'

// Import Components

// Import Pages
import LoginPage from './pages/auth/LoginPage';
import AdminPage from './pages/admin/AdminPage';
import CashierPage from "./pages/cashier/CashierPage";

function App() {
	return (
		<>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/admin" element={<AdminPage />} />
				<Route path="/" element={<CashierPage />} />
			</Routes>
		</>
	);
}

export default App;
