import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

  
const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <p>{JSON.stringify(user)}</p>
  )
}

export default Dashboard;