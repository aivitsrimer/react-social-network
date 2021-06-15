import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        Navigation
        <br />
        <a>Profile</a>
      </div>
      <div className={`${style.item} ${style.active}`}>
        <a>Messages</a>
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
};

export default Navbar;
