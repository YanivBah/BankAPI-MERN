import moment from 'moment';
const Transactions = ({array, user}) => {
  array.length = 10;
  if (array) {
    return (
      <div>
        <h3 className="text-gray-700 text-2xl mb-2">Latest transactions</h3>
        <div className="grid grid-cols-3 items-center gap-20 p-4 text-center border bg-gray-200 font-bold">
          <p>Date</p>
          <p>Type</p>
          <p>Cash</p>
        </div>
        {array.map((trans, index) => {
          let style = '';
          let preCash = '';
          switch (trans.type) {
            case 'withdraw':
              style = 'text-red-600'
              preCash = '-';
              break;
            case 'deposit':
              style = 'text-green-600'
              preCash = '+';
              break;
            case 'transfer':
              if (trans.from === user.passportID) {
                style = 'text-red-600'
                preCash = '-'
              } else {
                style = 'text-green-600'
                preCash = '+'
              }
              break;
            default:
              break;
          }
          return (
            <div
              key={index}
              className="grid grid-cols-3 items-center gap-20 p-4 text-center border hover:bg-gray-100 transition-colors"
            >
              <p>{moment(trans.date).format("DD/MM/YYYY")}</p>
              <p className="capitalize">{trans.type}</p>
              <p className={style}>
                {preCash}
                {trans.cash} $
              </p>
            </div>
          );
        })}
      </div>
    );
  } else return null
}

export default Transactions;