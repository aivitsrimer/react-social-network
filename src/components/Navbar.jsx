import React from 'react';
import style from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        Navigation
        <br />
        <a href="#1">Profile</a>
      </div>
      <div className={style.item}>
        <a href="#2">Messages</a>
      </div>
      <div className={style.item}>
        <a href="#3">News</a>
      </div>
      <div className={style.item}>
        <a href="#4">Music</a>
      </div>
      <div className={style.item}>
        <a href="#5">Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;
