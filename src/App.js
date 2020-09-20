import React, { createContext, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import BookingPage from "./Components/BookingPage";
import PrivateRoute from "./Components/PrivateRoute";
import FinalBook from "./Components/FinalBook";
import CreateUser from "./Components/CreateUser";
import Login from "./Components/Login";
import firebaseConfig from './firebase';
import * as firebase from "firebase/app";



firebase.initializeApp(firebaseConfig);

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        password: "",
        success: false
  });

  return (
    <userContext.Provider value={[user, setUser]}>
      <Router>
        <div className="app">
          <div className="app__body">
            <Header />

            <Switch>
              <Route exact path="/">
                <Body />
              </Route>

              <Route path="/book/:place">
                <BookingPage />
              </Route>
              
              <PrivateRoute path="/finalbook/:place">

                <FinalBook />

              </PrivateRoute>

              <Route path="/CreateUser">
                  <CreateUser />
              </Route>

              <Route path="/login">
                  <Login />
              </Route>

            </Switch>
          </div>
        </div>
      </Router>
    </userContext.Provider>
  );
}

export default App;
