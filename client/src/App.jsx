import "./App.css";

// Import Dependencies
import { Routes, Route } from "react-router-dom";

// Import Components

// Import Pages
import LoginPage from "./pages/auth/LoginPage";
import CashierPage from "./pages/cashier/CashierPage";
import ChangePasswordPage from "./pages/auth/ChangePasswordPage";

import { useDispatch } from "react-redux";
import { onCheckIsLogin } from "../redux/features/users";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminOverviewPage from "./pages/admin/AdminOverviewPage";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(onCheckIsLogin());
	}, []);

	return (
		<>
			<Toaster />
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/admin" element={<AdminOverviewPage />} />
				<Route path="/admin/dashboard" element={<AdminDashboardPage />} />
				<Route path="/admin/products" element={<AdminProductsPage />} />
				<Route path="/admin/users" element={<AdminUsersPage />} />
				<Route path="/" element={<CashierPage />} />
				<Route path="/change-password" element={<ChangePasswordPage />} />
			</Routes>
		</>
	);
}

export default App;
