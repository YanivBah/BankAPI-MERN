const SignIn = () => {
  return (
    <div className="max-w-md w-full space-y-8 bg-white rounded-lg shadow-lg p-5">
      <div>
        <h2 className="mt-1 text-center text-3xl font-extrabold text-gray-800">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center">
          Or
          <a href="/signup" className="ml-1 text-green-600">
            sign up now
          </a>
        </p>
      </div>
      <form action="#" className="mt-8 space-y-6">
        <div className="rounded-md -space-y-px">
          <div>
            <input
              type="text"
              name="passport-id"
              id="passport-id"
              autoComplete="false"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Passport ID"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="false"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
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
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;