import "./App.css";

// Import Dependencies
import { Routes, Route } from 'react-router-dom'

// Import Components

// Import Pages
import LoginPage from './pages/auth/LoginPage';
import AdminPage from './pages/admin/AdminPage';
import CashierPage from "./pages/cashier/CashierPage";
import ChangePasswordPage from "./pages/auth/ChangePasswordPage";

function App() {
	return (
		<>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/admin" element={<AdminPage />} />
				<Route path="/" element={<CashierPage />} />
				<Route path="/change-password" element={<ChangePasswordPage />} />
			</Routes>
		</>
	);
}

export default App;
