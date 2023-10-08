/* eslint-disable react/jsx-key */
import { Route } from "react-router-dom";

// protected.jsx
import Protected from "./protected";
import LoginPage from "../pages/auth/LoginPage";
import AdminOverviewPage from "../pages/admin/AdminOverviewPage";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import AdminProductsPage from "../pages/admin/AdminProductsPage";
import AdminUsersPage from "../pages/admin/AdminUsersPage";
import CashierPage from "../pages/cashier/CashierPage";
import ChangePasswordPage from "../pages/auth/ChangePasswordPage";

const routes = [
    <Route path="/login"
        element={
            <Protected>
                <LoginPage />
            </Protected>
        }
    />,
    <Route path="/admin"
        element={
            <Protected adminPage={true}>
                <AdminOverviewPage />
            </Protected>
        }
    />,
    <Route path="/admin/dashboard"
        element={
            <Protected adminPage={true}>
                <AdminDashboardPage />
            </Protected>
        }
    />,
    <Route path="/admin/products"
        element={
            <Protected adminPage={true}>
                <AdminProductsPage />
            </Protected>
        }
    />,
    <Route path="/admin/users"
        element={
            <Protected adminPage={true}>
                <AdminUsersPage />
            </Protected>
        }
    />,
    <Route path="/"
        element={
            <Protected cashierPage={true}>
                <CashierPage />
            </Protected>
        }
    />,
    <Route path="/change-password"
        element={
            <Protected cashierPage={true}>
                <ChangePasswordPage />
            </Protected>
        }
    />
]

export default routes