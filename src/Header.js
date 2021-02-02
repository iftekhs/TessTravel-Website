import React, { useState } from 'react';
import './Header.css';
import logo from './logo.png';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Header() {
  const [
    headerActive,
    setHeaderActive,
  ] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 1030) {
      setHeaderActive(true);
    } else {
      setHeaderActive(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return (
    <div
      className={
        !headerActive ? 'header' : 'header active'
      }>
      <div className="header_left">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="header_right">
        <div className="options">
          <h3> Services </h3>
          <ArrowDropDownIcon className="icons" />
        </div>
        <div className="options">
          <h3> Tours </h3>
          <ArrowDropDownIcon className="icons" />
        </div>
        <div className="options">
          <h3> Booking </h3>
          <ArrowDropDownIcon className="icons" />
        </div>
        <div className="options">
          <h3> Premium </h3>
          <ArrowDropDownIcon className="icons" />
        </div>
        <div className="options">
          <h3> Profile </h3>
          <ArrowDropDownIcon className="icons" />
        </div>
        <div className="options">
          <h3> Sign Up </h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
