/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0) {
    var depositsTransaction = new Transaction('deposit', amount);
    this.transactions.push(depositsTransaction);
    return true;
  } else { return false; }
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0) {
    var withdrawalTransaction = new Transaction('withdrawal', amount);
    this.transactions.push(withdrawalTransaction);
    return true;
  } else { return false; }
};

Account.prototype.getBalance = function () {
  var depositTotal = 0;
  var withdrawTotal = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      depositTotal = depositTotal + this.transactions[i].amount;
    }
    if (this.transactions[i].type === 'withdrawal') {
      withdrawTotal = withdrawTotal + this.transactions[i].amount;
    }
  }
  return depositTotal - withdrawTotal;
};
