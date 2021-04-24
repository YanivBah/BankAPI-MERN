const Summary = ({user}) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div>
        <div className="widget w-full p-4 rounded-lg bg-white border border-green-400">
          <div className="flex items-center">
            <div className="icon w-14 p-3.5 bg-green-400 text-white rounded-full mr-3">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-lg">Current Balance</div>
              <div className="text-md text-gray-400">${user.account.cash}</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="widget w-full p-4 rounded-lg bg-white border border-purple-400">
          <div className="flex items-center">
            <div className="icon w-14 p-3.5 bg-purple-400 text-white rounded-full mr-3">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-lg">Credit</div>
              <div className="text-md text-gray-400">
                ${user.account.credit}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;