import React, { useEffect } from "react";
import "./App.css";
import "./css/fontawesome.css";
import "./css/solid.css";
import "./css/regular.css";
import "./css/brands.css";
import { Route } from "react-router-dom";
import Game from "./components/Game/Game";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import MuzikContainer from "./components/Muzik/MuzikContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ImpExcel from "./components/ImpExcel/ImpExcel";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from './components/Login/login';
import Wrapper from "./components/Example/Wrapper";
import { initializeApp } from './redux/appReducer';
import { connect } from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";

const App = props => {

  let i = 0;
  useEffect(() => {
    do {
      i++;
      if (!props.isAuth) {
        props.initializeApp();
      }
    } while (i === 0);
  })

  if (!props.initialized) {
    return <Preloader />
  }

  return (
    <div className="app">
      <HeaderContainer />
      <NavbarContainer />
      <div className="app-content">
        <Route exact path="/" />
        <Route path="/example" component={Wrapper} />
        <Route path="/dialogs" component={DialogsContainer} />
        <Route path="/profile/:userId?" component={ProfileContainer} />
        <Route path="/muzik" component={MuzikContainer} />
        <Route path="/users" component={UsersContainer} />
        <Route path="/game" component={Game} />
        <Route path="/table" component={ImpExcel} />
        <Route path="/login" component={Login} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {

  return {
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, { initializeApp })(App)
