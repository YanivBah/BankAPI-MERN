import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [selectedRadio, setSelectedRadio] = useState("getusers");
  const [passportID, setPassportID] = useState('0000');
  const [data, setData] = useState('Not fetched yet');

  const handleChange = (e) => {
    setSelectedRadio(e.target.id);
  }

  const handleFetch = () => {
    let url;
    if (selectedRadio === "getusers") {
      url = "/bank/users";
      axios.get(url)
      .then((res) => {
        setData(JSON.stringify(res.data));
      })
      .catch((e) => setData(e));
      ;
    } else if (selectedRadio === "create") {
      url = "/bank/newuser/" + passportID;
      axios
        .post(url)
        .then((res) => {
          setData(JSON.stringify(res.data));
        })
        .catch((e) => setData(JSON.stringify(e.response.data)));
    }
    

  }

  return (
    <div className="App">
      <div className="form">
        <input
          type="radio"
          onChange={handleChange}
          name="fetch"
          val="getusers"
          id="getusers"
          defaultChecked
        />
        <label htmlFor="getusers">Get all users</label>
        <br />
        <input
          type="radio"
          onChange={handleChange}
          name="fetch"
          val="create"
          id="create"
        />
        <label htmlFor="create">Create new user</label>
        <br />
        {selectedRadio === "create" && (
          <React.Fragment>
            <br />
            <label htmlFor="passport">Passport ID:</label>
            <input
              type="number"
              name="passport"
              id="passport"
              value={passportID}
              onChange={e => {
                setPassportID(e.target.value);
              }}
            />
          </React.Fragment>
        )}
        <br />
        <button onClick={handleFetch}>Fetch Data</button>
      </div>
      <textarea name="data" id="" cols="100" rows="30" disabled value={data}></textarea>
    </div>
  );
}

export default App;
