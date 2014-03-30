// TODO: Implement this!

var display = {};

display.price = function (price) {
  console.log('Price: ' + price);
};

// I don't think this is necessary, but...
display.balance = function (balance) {
  console.log('Balance: ' + balance);
};

display.outOfStock = function (product) {
  console.log(product + ' out of stock');
};

display.noChange = function () {
  console.log('No change. Sorry!');
};

module.exports = display;