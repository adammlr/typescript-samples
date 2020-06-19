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

//interface https://www.typescriptlang.org/docs/handbook/interfaces.html
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
 * https://www.typescriptlang.org/docs/handbook/interfaces.html#extending-interfaces
 * https://www.typescriptlang.org/docs/handbook/interfaces.html#optional-properties
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

//enums https://www.typescriptlang.org/docs/handbook/basic-types.html#enum
enum HexColor {
  red,
  blue,
  green,
}

function getHexCodeEnum(color: HexColor) {
  switch (color) {
    case HexColor.red:
      return '#FF0000';
    case HexColor.blue:
      return '#0000FF';
    case HexColor.green:
      return '#00FF00';
  }
}

function createRandomStudent(id: number) {
  //Type assertions https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions
  const newStudent = {
    id,
    person: null as Person,
  };

  newStudent.person = { firstName: 'Jane', lastName: 'Doe' };
  //api.createStudent(newStudent);
}

//function types https://www.typescriptlang.org/play/index.html?e=164#example/typing-functions
function submitRequest(successCallback: (x: number) => void) {
  fetch('https://jsonplaceholder.typicode.com/todos/1m')
    .then((response) => response.json())
    .then((data) => successCallback(data.id));
}
//type successCallback = (x: number) => void;

function demo() {
  console.log(add('1', 2));
  console.log(subtract(1, 2));
  console.log(subtract(1));
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
  //or 0
  console.log(getHexCodeEnum(HexColor.green));
}
