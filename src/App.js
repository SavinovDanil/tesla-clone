import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { login, logout } from './features/userSlice';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AccountPage from './pages/AccountPage';
import { auth } from './firebase';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          }),
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<MainPage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/account"
            element={<AccountPage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
