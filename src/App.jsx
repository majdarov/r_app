import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";
import Muzik from "./components/Muzik/Muzik";
import Users from "./components/Users/Users";
import Game from "./components/Game/Game";

const App = props => {
  let Music = () => {
    return <Muzik link={document.documentURI} />;
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Header link={props.store.state.link} />
        <Navbar />
        <div className="app-content">
          <Route path="/dialogs" render={() => <Dialogs dialogsPage={props.store.state.dialogsPage} />} />
          <Route path="/profile" render={() => <Profile profilePage={props.store.state.profilePage} />} />
          <Route path="/muzik" component={Music} />
          <Route path="/users" component={Users} />
          <Route path="/game" component={Game} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
