import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { getTitleAC } from '../../redux/navReduser';

const Navbar = props => {

  function getTitle(path) {
    // console.log(path);
    props.dispatch(getTitleAC(path));
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
          onClick={(e) => {getTitle(nav.link)}}
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