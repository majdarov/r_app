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
import { getTitleAC } from "./redux/store";

const App = props => { 
  
  let path = window.location.pathname;
  let title = props.dispatch(getTitleAC(path));

  return (
    <BrowserRouter>
      <div className="app">
        <Header title={title} dispatch={props.dispatch}/>
        <Navbar navBar={props.state.navBar} dispatch={props.dispatch}/>
        <div className="app-content">
          {/* <Route exact path="/" /> */}
          <Route path="/dialogs" render={() => <Dialogs 
            dialogsPage={props.state.dialogsPage} 
            dispatch={props.dispatch}  
            />} 
          />
          <Route path="/profile"
            render={() => <Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
            />}
          />
          <Route path="/muzik" render={() => <Muzik title={title}/>} />
          <Route path="/users" component={Users} />
          <Route path="/game" component={Game} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
