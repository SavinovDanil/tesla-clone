import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUser } from '../features/userSlice';
import Login from '../Login';

function LoginPage() {
  const user = useSelector(selectUser);

  return <>{user ? <Navigate to="/account" /> : <Login />}</>;
}

export default LoginPage;
