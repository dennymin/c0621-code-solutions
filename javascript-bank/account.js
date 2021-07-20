/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

function restrictions(check) {
  if (check !== Math.floor(check) || check <= 0 || typeof check !== 'number' || isNaN(check)) {
    return true;
  }
}

Account.prototype.deposit = function (amount) {
  var newTransaction = new Transaction('deposit', amount);
  if (restrictions(amount)) {
    return false;
  } else {
    this.transactions.push(newTransaction);
    return true;
  }
};

Account.prototype.withdraw = function (amount) {
  var newTransaction = new Transaction('withdrawal', amount);
  if (restrictions(amount)) {
    return false;
  } else {
    this.transactions.push(newTransaction);
    return true;
  }
};

Account.prototype.getBalance = function () {
  var accountBalance = 0;
  for (var transactionIndex = 0; transactionIndex < this.transactions.length; transactionIndex++) {
    if (this.transactions[transactionIndex].type === 'deposit') {
      accountBalance = accountBalance + this.transactions[transactionIndex].amount;
    } else if (this.transactions[transactionIndex].type === 'withdrawal') {
      accountBalance = accountBalance - this.transactions[transactionIndex].amount;
    }
  }
  return accountBalance;
};
