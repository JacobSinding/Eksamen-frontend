import React, { useState, useEffect } from "react";
import LoggedIn from "./Components/LoggedIn";
import facade from "./Components/apiFacade";
import LogIn from "./Components/Login";
import Header from "./Components/Header";
import { Container } from "react-bootstrap";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from "./Components/NoMatch";
import AddComponent from "./Components/AddComponent";
import Dinnerevents from "./Components/Dinnerevents";
import CreateEvent from "./Components/CreateEvent";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [errorMessage, setErrorMessage] = useState("All is good... so far");

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setErrorMessage("Logged out");
  };

  return (
    <Container>
      <Router>
        <Header facade={facade} LoggedIn={loggedIn} />
        <Switch>
          <Route exact path="/">
            <Home
              logout={logout}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              facade={facade}
              setErrorMessage={setErrorMessage}
            />
          </Route>
          <Route path="/Events">
            {facade.hasUserAccess("user", loggedIn) && (
              <Dinnerevents facade={facade} loggedIn={loggedIn} setErrorMessage={setErrorMessage} />
            )}
          </Route>
          <Route path="/Event">
            {facade.hasUserAccess("admin", loggedIn) && (
              <CreateEvent facade={facade} setErrorMessage={setErrorMessage} />
            )}
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}
export default App;
