var display = require('display');

var options = {};

options.coffee = function () {
  console.log('Coffee');
};

options.coffeeWithSugar = function () {
  console.log('Coffee with sugar');
};

options.coffeeWithCream = function () {
  console.log('Coffee with cream');
};

options.coffeeWithCreamAndSugar = function () {
  console.log('Coffee with cream and sugar');
};

options.soup = function () {
  console.log('Soup');
};

module.exports = menu;