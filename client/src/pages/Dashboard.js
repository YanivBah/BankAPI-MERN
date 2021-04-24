import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import Header from '../components/Header';
import Overview from '../components/Overview';
import Transactions from "../components/Transactions";
  
const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <Header user={user} />
      <Overview user={user} />
       <div className="max-w-5xl mx-auto px-2 sm:px-10 lg:px-8 py-5">
        <Transactions array={user.account.transactions} user={user} />
       </div>
    </div>
  );
}

export default Dashboard;