import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import Header from '../components/Header';
import Overview from '../components/Overview';
  
const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <Header user={user} />
      <Overview user={user} />
    </div>
  );
}

export default Dashboard;