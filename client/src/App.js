import React, { useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import {UserContext} from './UserContext';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

function App() {
  const [data, setData] = useState('Not fetched yet');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetching = async () => {
      const newData = await axios.get("/accounts");
      setData(JSON.stringify(newData.data));
    }
    fetching();
  }, []);

  return (
    <React.Fragment>
      <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
          <Route path="/" exact>
            <SignIn />
          </Route>

          <Route path="/signup" exact>
            <SignUp />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard/>
          </Route>
        </BrowserRouter>
      </UserContext.Provider>
    </React.Fragment>
  );
}

export default App;
