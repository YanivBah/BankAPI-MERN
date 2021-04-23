import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const [data, setData] = useState('Not fetched yet');

  useEffect(() => {
    const fetching = async () => {
      const newData = await axios.get("/accounts");
      setData(JSON.stringify(newData.data));
    }
    fetching();
  }, []);

  return (
      <React.Fragment>
        <BrowserRouter>

          <Route path="/" exact>
            <SignIn/>
          </Route>

          <Route path="/signup" exact>
            <SignUp/>
          </Route>

        </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
