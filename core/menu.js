var display = require('display');

var options = {};

options.coffee = function () {
  return 'Coffee';
};

options.coffeeWithSugar = function () {
  return 'Coffee with sugar';
};

options.coffeeWithCream = function () {
  return 'Coffee with cream';
};

options.coffeeWithCreamAndSugar = function () {
  return 'Coffee with cream and sugar';
};

options.soup = function () {
  return 'Soup';
};

module.exports = menu;