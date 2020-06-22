/**
 * Add two numbers
 */
function add(x, y) {
  return x + y;
}

function sum(numberArray) {
  return numberArray.reduce((a, b) => a + b, 0);
}

/**
 * Subtract two numbers (jsdoc)
 * @param {number} x the first number
 * @param {number} y the scond number
 */
function subtract(x, y) {
  return x - y;
}

function stringify(obj) {
  return JSON.stringify(obj);
}

function submitRequest(successCallback) {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((data) => successCallback(data.id));
}

function demoFunction() {
  add(1, 2);
  subtract(1, 2);
  stringify({ x: 1, y: 2 });
}
