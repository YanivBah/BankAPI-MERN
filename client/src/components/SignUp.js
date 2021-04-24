import React, { useRef, useState } from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom";

const SignUp = () => {
  const [redirect, setRedirect] = useState(null);
  const [registered, setRegistered] = useState(false);
  const refFirstName = useRef(null);
  const refLastName = useRef(null);
  const refPassport = useRef(null);
  const refPassword = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      refFirstName.current.value &&
      refLastName.current.value &&
      refPassport.current.value &&
      refPassword.current.value
    ) {
      const newUser = {
        firstName: refFirstName.current.value,
        lastName: refLastName.current.value,
        passportID: refPassport.current.value,
        password: refPassword.current.value,
      };
      const response = await axios.post("/user", newUser);
      if (response.status === 201) {
        setRegistered(true);

        setTimeout(() => {
          setRedirect("/");
        }, 3000);
      }
    }
  };

  return (
    <div className="max-w-md w-full space-y-8 bg-white rounded-lg shadow-lg p-5">
      {redirect && <Redirect to="/" />}
      {!registered && (
        <React.Fragment>
          <div>
            <h2 className="mt-1 text-center text-3xl font-extrabold text-gray-800">
              Sign up now
            </h2>
          </div>

          <form action="#" className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md space-y-px">
              <div className="pb-3">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="false"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="First Name"
                  ref={refFirstName}
                />
              </div>

              <div className="pb-3">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="false"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Last Name"
                  ref={refLastName}
                />
              </div>

              <div className="pb-3">
                <input
                  type="text"
                  name="passport-id"
                  id="passport-id"
                  autoComplete="false"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Passport ID"
                  ref={refPassport}
                />
                <p className="text-xs text-gray-600">* Enter only numbers</p>
              </div>

              <div className="pb-3">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="false"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  ref={refPassword}
                />
                <p className="text-xs text-gray-600">
                  * Minimum length 6 letters
                </p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-gray-700 group-hover:text-gray-900"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-gray-700 group-hover:text-gray-900"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Sign up
              </button>
            </div>
          </form>
        </React.Fragment>
      )}
      {registered && (
        <div className="text-center">
          <h2 className="text-3xl">You now have account!</h2>
          <p>You will redirected to login page in 3 seconds.</p>
        </div>
      )}
    </div>
  );
}

export default SignUp;