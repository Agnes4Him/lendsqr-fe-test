import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import UserDetails from './pages/UserDetails'

const App = () => {
  return (
    <div className="App">
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user-details/:id" element={<UserDetails />} />
        </Routes>
    </div>
  );
}

export default App;
