function account(id, initialState) {
  let { balance, transactions } = initialState;
  return {
    id,
    debit: (id, amount) => {
      if (balance - amount < 0) {
        return false;
      }
      balance -= amount;
      transactions.push({
        id,
        type: 'debit',
        amount,
        effectiveDate: Date.now(),
      });
    },
    credit: (id, amount) => {
      balance += amount;
      transactions.push({
        id,
        type: 'credit',
        amount,
        effectiveDate: Date.now(),
      });
    },
    getBalance: () => balance,
    getTransactions: () => transactions,
    getTransactionById: (id) => transactions.find((trans) => trans.id === id),
  };
}

module.exports = account;
