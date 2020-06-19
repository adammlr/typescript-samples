/**
 * Add two numbers
 * https://www.typescriptlang.org/docs/handbook/basic-types.html
 */
function add(x: any, y: any) {
  return x + y;
}

//https://www.typescriptlang.org/docs/handbook/basic-types.html#array
function sum(numberArray: number[]) {
  return numberArray.reduce((a, b) => a + b, 0);
}

/**
 * Subtract two numbers (jsdoc)
 * @param x the first number
 * @param y the scond number
 */
function subtract(x: number, y: number): number {
  return x - y;
}

//object parameter type
function stringify(obj: object) {
  return JSON.stringify(obj);
}

//interface
interface Person {
  firstName: string;
  /** sometimes referred to as surname */
  lastName: string;
}

function fullName(person: Person) {
  return `${person.firstName} ${person.lastName}`;
}

//extend an interface
/**
 * A person with more properties
 */
interface FullPerson extends Person {
  age?: number; //optional argument
  old: boolean;
}

//string literals https://www.typescriptlang.org/docs/handbook/advanced-types.html#string-literal-types
function getHexCode(color: 'red' | 'blue' | 'green') {
  switch (color) {
    case 'red':
      return '#FF0000';
    case 'blue':
      return '#0000FF';
    case 'green':
      return '#00FF00';
  }
}

function demo() {
  console.log(add('1', 2));
  console.log(subtract(1, 2));
  console.log(stringify({ x: 1, y: 2 }));
  console.log(fullName({ firstName: 'Adam', lastName: 'Miller' }));

  const person: FullPerson = {
    firstName: 'Adam',
    lastName: 'Miller',
    old: true,
  };

  console.log(fullName(person));

  //const colors = { blue: 'blue' };
  console.log(getHexCode('blue'));
}
