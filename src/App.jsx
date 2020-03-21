import React from "react";
import "./App.css";
import "./css/fontawesome.css";
import "./css/solid.css";
import "./css/regular.css";
import "./css/brands.css";
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom";
import Users from "./components/Users/Users";
import Game from "./components/Game/Game";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import MuzikContainer from "./components/Muzik/MuzikContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import CommodityContainer from "./components/Commodity/CommodityContainer";

const App = () => {

  return (
    <div className="app">
      <HeaderContainer />
      <NavbarContainer />
      <div className="app-content">
        {/* <Route exact path="/" /> */}
        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
        <Route path="/profile" render={() => <Profile />}/>
        <Route path="/muzik" component={MuzikContainer} />
        <Route path="/commodity" component={CommodityContainer} />
        <Route path="/users" component={Users} />
        <Route path="/game" component={Game} />
      </div>
    </div>
  );
};

export default App;
