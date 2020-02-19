import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
  let navElements = props.navBar.map((nav, idx) => {
    return (
      <div className={s.item} key={idx}>
        <NavLink to={nav.link} activeClassName={s.active} >
          {nav.title}
        </NavLink>
      </div>
    );
  });
  return (
    <nav className='navbar'>
      {navElements}
    </nav>
  );
}

export default Navbar;