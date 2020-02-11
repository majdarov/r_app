import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className='navbar'>
        <div className={s.item}>
          <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/muzik" activeClassName={s.active}>Muzik</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/game" activeClassName={s.active}>Game</NavLink>
        </div>
      </nav>
    );
}

export default Navbar;