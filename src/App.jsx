import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import "./css/all.css";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import Muzik from "./components/Muzik/Muzik";
import Users from "./components/Users/Users";
import Game from "./components/Game/Game";
import { getTitleAC } from "./redux/navReduser";
import Commodity from "./components/Commodity/Commdoity";

const App = props => { 
  
  let path = window.location.pathname;
  
  if (!props.state.navigation._title) {
    props.dispatch(getTitleAC(path));
  }

  let title = props.state.navigation._title;

  return (
      <div className="app">
        <Header title={title}/>
        <Navbar navBar={props.state.navigation.navBar} dispatch={props.dispatch}/>
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
          <Route path="/commodity" render={() => <Commodity 
            title={title}
            data={props.state.commodityPage.data}
            />} />
          <Route path="/users" component={Users} />
          <Route path="/game" component={Game} />
        </div>
      </div>
  );
};

export default App;
