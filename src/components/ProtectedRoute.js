import { Navigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setIsAuthenticated(false);
      setIsLoading(false);
      return;
    }

    axios.get('http://localhost:8000/users/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {

      if (response.data.User && response.data.User.role === 'seller') {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setIsLoading(false);
    })
    .catch(error => {
      setIsAuthenticated(false);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
