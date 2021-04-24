import { Link, Redirect } from "react-router-dom";
import Summary from "./Summary";

const Dashboard = ({ user }) => {
  return (
    <main className="max-w-7xl mx-auto px-2 sm:px-10 lg:px-8 py-5">
      <div className="relative flex items-center justify-between h-16">
        <h1 className="text-3xl">
          Welcome {user.firstName} {user.lastName}!
        </h1>
      </div>
      <Summary user={user} />

      <Link to="/deposit">
        <div className="flex p-4 border items-center gap-8">
          <div className="w-14">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Deposit</h3>
            <p>Deposit money to your account</p>
          </div>
        </div>
      </Link>

      <Link to="/withdraw">
        <div className="flex p-4 border border-t-0 items-center gap-8">
          <div className="w-14">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              ></path>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Withdraw</h3>
            <p>Withdraw money from your account</p>
          </div>
        </div>
      </Link>

      <Link to="/transfer">
        <div className="flex p-4 border border-t-0 items-center gap-8">
          <div className="w-14">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              ></path>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Transfer</h3>
            <p>Transfer money to other account</p>
          </div>
        </div>
      </Link>
    </main>
  );
};

export default Dashboard;
