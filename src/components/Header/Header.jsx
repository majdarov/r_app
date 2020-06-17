import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    function clickUpdate() {
        let headers = { get: "update" };
        props.receiveData(props.dataServer, headers, '');
    }

    let update;

    if (props.update) {
        update = "(need update!)";
    } else if (props.update !== null) {
        update = "(updated!)";
    } else {
        update = null;
    }

    return (
        <header>
            <img src='/terminal-5.png' alt='...'></img>
            <h2>{props.title}</h2>
            <div className={props.className} onClick={() => clickUpdate()}>
                {update}
            </div>
            <div className={s.loginBlock}>
                {props.isAuth ? props.user.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;