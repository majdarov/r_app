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

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header link={props.link}/>
        <Navbar />
        <div className="app-content">
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
          <Route path="/muzik" component={Muzik} />
          <Route path="/users" component={Users} />
          <Route path="/game" component={Game} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
