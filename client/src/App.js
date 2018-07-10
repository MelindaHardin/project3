import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import { Provider } from "react-redux";
import store from './store';

import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import SignUp from "./Pages/SignUp";
import "./App.css";
import Nav from "./components/Nav/Nav";
import FooterPage from "./components/Footer/Footer";
import SearchForm from "./components/SearchForm/SearchForm";


class App extends Component {
  render() {
    return (
     
      <Router> 
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/search" component={SearchForm} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
          <FooterPage />
        </div>
      </Router>
    
    );
  }
}

export default App;
