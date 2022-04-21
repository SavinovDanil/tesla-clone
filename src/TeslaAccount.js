import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';

import './TeslaAccount.css';
import { logout, selectUser } from './features/userSlice';
import Car from './Car';
import { auth } from './firebase';

function TeslaAccount({ isMenuOpen, setIsMenuOpen }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutOfApp = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
        navigate('/', { replace: false });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="teslaAccount">
      <div className="teslaAccount__header">
        <div className="teslaAccount__logo">
          <Link to="/">
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
        <div className="teslaAccount__links">
          <Link to="/account">Model S</Link>
          <Link to="/account">Model 3</Link>
          <Link to="/account">Model X</Link>
          <Link to="/account">Model Y</Link>
          <Link to="/account">Solar Roof</Link>
          <Link to="/account">Solar Panels</Link>
          <Link to="/account">Shop</Link>
          <Link to="/account">Tesla account</Link>
          <Link to="/login" onClick={logoutOfApp}>
            Log out
          </Link>
          <div className="teslaAccount__menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CloseIcon className="teslaAccount__closeMenu" /> : <MenuIcon />}
          </div>
        </div>
      </div>
      <div className="teslaAccount__info">
        <div className="teslaAccount__person">
          <h4>{user?.displayName + "'s"} Tesla</h4>
        </div>
        <div className="teslaAccount__infoRight">
          <Link to="#">Home</Link>
          <Link to="#">Account</Link>
          <Link to="#">History</Link>
          <Link to="#" onClick={logoutOfApp}>
            Sign out
          </Link>
        </div>
      </div>
      <div className="teslaAccount__car">
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815"
          model="model s"
          testDrive
        />
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815"
          model="model x"
        />
      </div>
    </div>
  );
}

export default TeslaAccount;
