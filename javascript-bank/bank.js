/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

function restrictions(check) {
  if (check !== Math.floor(check) || check <= 0 || typeof check !== 'number' || isNaN(check)) {
    return true;
  }
}

Bank.prototype.openAccount = function (holder, balance) {
  if (restrictions(balance)) {
    return null;
  } else {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var accountsIndex = 0; accountsIndex < this.accounts.length; accountsIndex++) {
    if (this.accounts[accountsIndex].number === number) {
      return this.accounts[accountsIndex];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var grandTotal = 0;
  for (var gtIndex = 0; gtIndex < this.accounts.length; gtIndex++) {
    grandTotal = grandTotal + this.accounts[gtIndex].getBalance();
  }
  return grandTotal;
};
