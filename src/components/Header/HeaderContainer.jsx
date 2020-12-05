import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { withRouter } from 'react-router-dom';
import { getTitle, chooseLang } from '../../redux/navReduser';
import { logout } from '../../redux/auth_reduser';
import { useEffect } from 'react';
import { compose } from 'redux';

const HeaderContainer = props => {

    let path = '/' + props.location.pathname.split('/')[1];

    const getTitle = props.getTitle;
    useEffect(() => {
        getTitle(path);
    }, [path, getTitle])

    return <Header {...props} path={path} />
}

const mapStateToProps = state => {

    return {
        user: {
            id: state.auth.id,
            email: state.auth.email,
            login: state.auth.login
        },
        isAuth: state.auth.isAuth,
        navBar: state.navigation.navBar,
        title: state.navigation.title,
        currentLang: state.navigation.currentLang
    }
}

export default compose(
    connect(mapStateToProps, { getTitle, chooseLang, logout }),
    withRouter,
)(HeaderContainer)
