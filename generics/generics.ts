function wrapInArray<T>(input: T): T[] {
  return [input];
}

async function fetchData<T>(url: string) {
  return (await fetch(url).then((response) => response.json())) as T;
}

interface Todos {
  id: number;
}

async function demoGenerics() {
  wrapInArray<string>('Hello');
  wrapInArray<number>(1);

  const todos = await fetchData<Todos>(
    'https://jsonplaceholder.typicode.com/todos/1'
  );

  todos.id = 3;
}
