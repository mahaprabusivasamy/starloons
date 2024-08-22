import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/SignUp';
import Login from './pages/LoginPage';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashBoard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
