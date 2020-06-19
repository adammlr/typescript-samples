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
  log?: activityLog[];
}

interface activityLog {
  date: string;
  activity: string;
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

function demoInterface() {
  fullName({ firstName: 'Adam', lastName: 'Miller' });

  const person: FullPerson = {
    firstName: 'Adam',
    lastName: 'Miller',
    old: true,
  };

  fullName(person);
}
