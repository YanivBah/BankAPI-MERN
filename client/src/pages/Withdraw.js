import React, { useContext, useRef } from 'react';
import { UserContext } from '../UserContext';
import Header from '../components/Header';
import Summary from "../components/Summary";
import axios from 'axios';
  
const Withdraw = () => {
  const { user, updateUser } = useContext(UserContext);
  const cashRef = useRef(null);

  const handleClick = async() => {
    const body = {
      passportID: user.passportID,
      cash: Number(cashRef.current.value)
    }
    await axios.patch("/accounts/withdraw", body);
    updateUser();
  }

  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-2 sm:px-10 lg:px-8 py-5">
        <Summary user={user} />

        <div className="shadow-lg bg-white border-black border border-opacity-30 p-5">
          <h1 className="text-2xl font-semibold">Withdraw money</h1>
          <div className="p-5">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Cash
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                min="1"
                name="price"
                id="price"
                className="border outline-none focus:border-green-400 block w-full pl-7 pr-2 py-2 sm:text-sm rounded-md"
                placeholder="0.00"
                ref={cashRef}
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="border py-2 px-4 bg-green-400 rounded-md hover:bg-green-300 text-gray-700"
              onClick={handleClick}
            >
              Withdraw
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Withdraw;