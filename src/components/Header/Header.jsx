import React from 'react';
import './Header.module.css';

const Header = (props) => {
    
    return (
        <header>
            <img src='/terminal-5.png' alt='...'></img>
            <h2>{props.title}</h2>
        </header>
    );
}

export default Header;