import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import UserDetails from './pages/UserDetails'

const App = () => {
  return (
    <div className="App">
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/dashboard/:email" element={<Dashboard />} />
          <Route path="/users/:email" element={<Users />} />
          <Route path="/user-details/:id" element={<UserDetails />} />
        </Routes>
    </div>
  );
}

export default App;
