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
            <img src="/assets/deposit.svg" alt="" />
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
            <img src="/assets/withdraw.svg" alt="" />
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
            <img src="/assets/transfer.svg" alt="" />
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
