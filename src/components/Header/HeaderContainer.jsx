import React from 'react';
import s from './Header.module.css';
import { connect } from 'react-redux';
import Header from './Header';
import { fetchData } from '../Commodity/fetchData';
import { withRouter } from 'react-router-dom';
import { getTitleAC } from '../../redux/navReduser';
import Axios from 'axios';
import { setUserDataAC } from '../../redux/auth_reduser';

class HeaderContainer extends React.Component {
    componentDidMount() {
        let path = '/' + this.props.location.pathname.split('/')[1];
        this.props.getTitle(path);
        
        Axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(res => {
                if (res.resultCode === 0) {
                    this.props.setUserData(res.data.data);
                } else {
                    console.log('no login');
                    // this.props.setUserData({userId: 1, email: 'test@test', login: 'test_user' });
                }
            });
    };
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = state => {

    let update;
    let className;
    if (state.title === "Товары") {
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
        user: {
            id: state.auth.userId,
            email: state.auth.email,
            login: state.auth.login
        },
        isAuth: state.auth.isAuth,
        dataServer: state.commodityPage.dataServer,
        navBar: state.navigation.navBar,
        title: state.navigation.title,
        update,
        className
    }
}

const mapDispatch = dispatch => {
    return {
        receiveData: (dataServer, headers, path) =>
            fetchData(dataServer, path, headers, dispatch),
        getTitle: path => dispatch(getTitleAC(path)),
        setUserData: data => dispatch(setUserDataAC(data))
    };
};

export default connect(mapStateToProps, mapDispatch)(withRouter(HeaderContainer));