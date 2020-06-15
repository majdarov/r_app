import s from './Header.module.css';
import { connect } from 'react-redux';
import Header from './Header';
import { fetchData } from '../Commodity/fetchData';

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
    let update;
    let className;
    if (title === "Товары") {
        let lastUpdate = state.commodityPage.lastUpdate;
        if (!lastUpdate || Date.now() - lastUpdate > 86400000) {
            update = true;
            className = s.needupdate;
        } else {
            update = false;
            className = s.updated;
        }
    } else {
        update = null;
    }
    return {
        dataServer: state.commodityPage.dataServer,
        title,
        update,
        className
    }
}

const mapDispatch = dispatch => {
    return {
      receiveData: (dataServer, headers, path) =>
        fetchData(dataServer, path, headers, dispatch)
    };
  };


const HeaderContainer = connect(mapStateToProps, mapDispatch)(Header);

export default HeaderContainer;