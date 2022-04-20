import React from 'react';
import Header from '../Header';
import Menu from '../Menu';
import HeaderBlock from '../HeaderBlock';

function MainPage({ isMenuOpen, setIsMenuOpen }) {
  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <Menu />}
      <HeaderBlock />
    </>
  );
}

export default MainPage;
