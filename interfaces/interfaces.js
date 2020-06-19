function fullName(person) {
  return `${person.firstName} ${person.lastName}`;
}

function demo() {
  fullName({ firstName: 'Adam', lastName: 'Miller' }));

  const person = {
    firstName: 'Adam',
    lastName: 'Miller',
    old: true,
  };

  fullName(person);
}
