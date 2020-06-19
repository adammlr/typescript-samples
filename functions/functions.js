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

function fullName(person) {
  return `${person.firstName} ${person.lastName}`;
}

function getHexCode(color) {
  switch (color) {
    case 'red':
      return '#FF0000';
    case 'blue':
      return '#0000FF';
    case 'green':
      return '#00FF00';
    default:
      throw new Error('Unkown color');
  }
}

function submitRequest(successCallback) {
  fetch('https://jsonplaceholder.typicode.com/todos/1m')
    .then((response) => response.json())
    .then((data) => successCallback(data.id));
}

//TODO: generics

function demo() {
  console.log(add(1, 2));
  console.log(subtract(1, 2));
  console.log(stringify({ x: 1, y: 2 }));
  console.log(fullName({ firstName: 'Adam', lastName: 'Miller' }));

  const person = {
    firstName: 'Adam',
    lastName: 'Miller',
    old: true,
  };

  console.log(fullName(person));
  console.log(getHexCode('red'));
}
