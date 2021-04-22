import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

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
    <div className="App">
      <p>{data}</p>
    </div>
  );
}

export default App;
