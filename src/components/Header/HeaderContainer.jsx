import React from 'react';
import s from './Header.module.css';
import { connect } from 'react-redux';
import Header from './Header';
import { withRouter } from 'react-router-dom';
import { getTitle } from '../../redux/navReduser';
import { authMe } from '../../redux/auth_reduser';
import { updateProducts } from '../../redux/commodityReduser';

class HeaderContainer extends React.Component {
    componentDidMount() {
        let path = '/' + this.props.location.pathname.split('/')[1];
        this.props.getTitle(path);
        this.props.authMe();
    };
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = state => {

    let update;
    let className;
    let lastUpdate;
    if (state.navigation.title === "Товары") {
        lastUpdate = state.commodityPage.lastUpdate;
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
        user: {
            id: state.auth.id,
            email: state.auth.email,
            login: state.auth.login
        },
        isAuth: state.auth.isAuth,
        navBar: state.navigation.navBar,
        title: state.navigation.title,
        update,
        className,
        lastUpdate
    }
}

// const mapDispatch = dispatch => {
//     return {
//         receiveData: (dataServer, headers, path) =>
//             fetchData(dataServer, path, headers, dispatch),
//         getTitle: path => dispatch(getTitleAC(path)),
//         // setUserData: data => dispatch(setUserDataAC(data)),
//         authMe
//     };
// };

export default connect(mapStateToProps, { authMe, getTitle, updateProducts })(withRouter(HeaderContainer));