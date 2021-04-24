import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import {UserContext} from './UserContext';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Transfer from "./pages/Transfer";

function App() {
  const [user, setUser] = useState(null);

  const updateUser = async () => {
    const newData = await axios.post("/user/login", { passportID: user.passportID });
    setUser(newData.data);
  }
  
  return (
    <React.Fragment>
      <UserContext.Provider value={{ user, setUser, updateUser }}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <SignIn />
            </Route>

            <Route path="/signup" exact>
              <SignUp />
            </Route>

            <Route path="/dashboard" exact>
              {user ? <Dashboard /> : <Redirect to="/" />}
            </Route>

            <Route path="/deposit" exact>
              {user ? <Deposit /> : <Redirect to="/" />}
            </Route>

            <Route path="/withdraw" exact>
              {user ? <Withdraw /> : <Redirect to="/" />}
            </Route>

            <Route path="/transfer" exact>
              {user ? <Transfer /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </BrowserRouter>
      </UserContext.Provider>
    </React.Fragment>
  );
}

export default App;
