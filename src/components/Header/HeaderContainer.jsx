import './Header.module.css';
import { connect } from 'react-redux';
import Header from './Header';

function getTitle(navBar) {
    let title;
    let path = '/' + window.location.pathname.split('/')[1];
    let nav = navBar.find(item => item.link === path);
    if (nav !== undefined) {
        title = nav.title;
    } else {
        title = "UnSet";
    }
    return title;
}

const mapStateToProps = state => {
    let title = state.navigation._title;
    if (!title) {
        title = getTitle(state.navigation.navBar);
    }
    return {
        title: title
    }
}

const HeaderContainer = connect(
    mapStateToProps
)(Header);

export default HeaderContainer;