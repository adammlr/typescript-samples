function wrapInArray(input) {
  return [input];
}

async function fetchData(url) {
  return await fetch(url).then((response) => response.json());
}

async function demoGenerics() {
  wrapInArray('Hello');
  wrapInArray(1);

  const todos = await fetchData('https://jsonplaceholder.typicode.com/todos/1');
  todos.id = 3;
}
