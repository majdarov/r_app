import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { setTitleAC } from '../../redux/store';

const Navbar = props => {

  function setTitle(title) {
    props.dispatch(setTitleAC(title));
  }

  let navElements = props.navBar.map((nav, idx) => {
    let ex;
    nav.link === "/" ? ex = true : ex = false;
    return (
      <div className={s.item} key={idx}>
        <NavLink 
          exact={ex}
          to={nav.link} 
          activeClassName={s.active}
          onClick={(e) => {setTitle(nav.title)}}
        >
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