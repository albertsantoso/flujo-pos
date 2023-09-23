import "./App.css";

// Import Dependencies
import { Routes, Route } from 'react-router-dom'

// Import Components

// Import Pages
import LoginPage from './pages/auth/LoginPage';
import AdminPage from './pages/admin/AdminPage';
import CashierPage from "./pages/cashier/CashierPage";
import ChangePasswordPage from "./pages/auth/ChangePasswordPage";

import { useDispatch } from "react-redux";
import { onCheckIsLogin } from "../redux/features/users";
import { useEffect } from "react";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(onCheckIsLogin())
	}, []);

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
