import "./App.css";

// Import Dependencies
import { Routes, Route } from 'react-router-dom'

// Import Components

// Import Pages
import LoginPage from './pages/auth/LoginPage';
import AdminPage from './pages/admin/AdminPage';

function App() {
	return (
		<>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/admin" element={<AdminPage />} />
			</Routes>
		</>
	);
}

export default App;
