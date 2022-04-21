import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { Navigate } from 'react-router-dom';
import Menu from '../Menu';
import TeslaAccount from '../TeslaAccount';

function AccountPage({ isMenuOpen, setIsMenuOpen }) {
  const user = useSelector(selectUser);
  return (
    <>
      {!user ? (
        <Navigate to="/login" />
      ) : (
        <>
          <TeslaAccount isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          {isMenuOpen && <Menu />}
        </>
      )}
    </>
  );
}

export default AccountPage;
