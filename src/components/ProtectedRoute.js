import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  axios.get('http://localhost:8000/users/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => {
      if (response.data.role !== 'seller') {
        return <Navigate to="/login" replace />;
      }
      return <Outlet />;
    })
    .catch(error => {
      console.error(error);
      return <Navigate to="/login" replace />;
    });
};

export default ProtectedRoute;