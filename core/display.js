// TODO: Implement this!

var display = module.exports = {

  price: function (price) {
    console.log('Price: ' + price);
  },

  // I don't think this is necessary, but...
  balance: function (balance) {
    console.log('Balance: ' + balance);
  },

  outOfStock: function (product) {
    console.log(product + ' out of stock');
  },

  noChange: function () {
    console.log('No change. Sorry!');
  }

};