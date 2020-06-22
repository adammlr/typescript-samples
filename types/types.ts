/**
 * Add two numbers
 * https://www.typescriptlang.org/docs/handbook/basic-types.html
 */
function add(x: any, y: any) {
  return x + y;
}

//https://www.typescriptlang.org/docs/handbook/basic-types.html#array
//Note the return type is inferred: https://www.typescriptlang.org/docs/handbook/functions.html#inferring-the-types
function sum(numberArray: number[]) {
  return numberArray.reduce((a, b) => a + b, 0);
}

/**
 * Subtract two numbers (jsdoc)
 * https://www.typescriptlang.org/docs/handbook/functions.html#optional-and-default-parameters
 * @param x the first number
 * @param y the scond number
 */
function subtract(x: number, y: number = 1): number {
  return x - y;
}

//object parameter type
function stringify(obj: object) {
  return JSON.stringify(obj);
}

//function types https://www.typescriptlang.org/play/index.html?e=164#example/typing-functions
function submitRequest(successCallback: (x: number) => void) {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((data) => successCallback(data.id));
}
//type successCallback = (x: number) => void;

const cache = new Map<number, string>();
function addToCache(key: number, value: string) {
  cache.set(key, value);
}
function getFromCache(key: number) {
  return cache.get(key);
}

function demoFunction() {
  add('1', 2);
  subtract(1, 2);
  subtract(1);
  stringify({ x: 1, y: 2 });
}
