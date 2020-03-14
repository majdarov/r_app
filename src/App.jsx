import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import "./css/fontawesome.css";
import "./css/solid.css";
import "./css/regular.css";
import "./css/brands.css";
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom";
import Muzik from "./components/Muzik/Muzik";
import Users from "./components/Users/Users";
import Game from "./components/Game/Game";
import { getTitleAC } from "./redux/navReduser";
import Commodity from "./components/Commodity/Commdoity";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";

const App = props => { 
  
  let path = '/' + window.location.pathname.split('/')[1];
  let state = props.store.getState();

  if (!state.navigation._title) {
    props.store.dispatch(getTitleAC(path));
  }

  let title = state.navigation._title;

  return (
      <div className="app">
        <Header title={title}/>
        <NavbarContainer store={props.store}/>
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
          <Route path="/muzik" render={() => <Muzik title={title}/>} />
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
