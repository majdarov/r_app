import React from "react";
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
import CommodityContainer from "./components/Commodity/CommodityContainer";
import ImpExcel from "./components/ImpExcel/ImpExcel";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from './components/Login/login';

const App = () => {

  return (
    <div className="app">
      <HeaderContainer />
      <NavbarContainer />
      <div className="app-content">
        <Route exact path="/" location={'http://localhost:5000'}/>
        <Route path="/dialogs" component={DialogsContainer}/>
        <Route path="/profile/:userId?" component={ProfileContainer}/>
        <Route path="/muzik" component={MuzikContainer} />
        <Route path="/commodity" component={CommodityContainer} />
        <Route path="/users" component={UsersContainer} />
        <Route path="/game" component={Game} />
        <Route path="/table" component={ImpExcel} />
        <Route path="/login" component={Login} />
      </div>
    </div>
  );
};

export default App;
