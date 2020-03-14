import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { getTitleAC } from '../../redux/navReduser';
import Navbar from './Navbar';

const NavbarContainer = props => {

  function getTitle(path) {
    props.store.dispatch(getTitleAC(path));
  }

  let state = props.store.getState();

  let navElements = state.navigation.navBar.map((nav, idx) => {
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
    <Navbar 
      navElements={navElements}
    />
  );
}

export default NavbarContainer;