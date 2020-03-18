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
import Commodity from "./components/Commodity/Commdoity";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import MuzikContainer from "./components/Muzik/MuzikContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = props => {

  return (
    <div className="app">
      <HeaderContainer />
      <NavbarContainer store={props.store} />
      <div className="app-content">
        {/* <Route exact path="/" /> */}
        <Route path="/dialogs" render={() => <DialogsContainer
          store={props.store}
        />}
        />
        <Route path="/profile"
          render={() => <Profile
            store={props.store}
          />}
        />
        <Route path="/muzik" component={MuzikContainer} />
        <Route path="/commodity" render={() => <Commodity
          store={props.store}
        />} />
        <Route path="/users" component={Users} />
        <Route path="/game" component={Game} />
      </div>
    </div>
  );
};

export default App;
