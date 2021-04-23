import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import Header from '../components/Header';
  
const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <Header user={user} />
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}

export default Dashboard;