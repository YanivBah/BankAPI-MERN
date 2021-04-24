import React, { useState, useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";

const Header = ({user}) => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {

    }
  }, [menu])

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setMenu(!menu)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!menu && (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
              {menu && (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <h3 className="text-3xl text-gray-200 font-bold">myBank</h3>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/dashboard"
                  className="bg-green-400 hover:bg-green-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/deposit"
                  className="bg-green-400 hover:bg-green-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Deposit
                </Link>
                <Link
                  to="/withdraw"
                  className="bg-green-400 hover:bg-green-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Withdraw
                </Link>
                <Link
                  to="/transfer"
                  className="bg-green-400 hover:bg-green-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Transfer
                </Link>
                <Link
                  to="/logout"
                  className="bg-red-400 hover:bg-red-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <p className="text-xs text-gray-400 hover:text-white">
              Passport ID: {user && user.passportID}
            </p>
          </div>
        </div>
      </div>

      <div className={menu ? "" : "sm:hidden hidden"} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/dashboard"
            className="bg-green-400 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="#"
            className="bg-green-400 block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
            Transactions
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;