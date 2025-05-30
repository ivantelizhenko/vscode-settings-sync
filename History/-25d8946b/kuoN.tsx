function TodoList(): JSX.Element {
  const todos: { id: string; text: string }[] = [
    { id: "t1", text: "Finish the course" },
    { id: "d2", text: "Have a breakfast" },
    { id: "x5", text: "Go to the gym" },
    { id: "z8", text: "Reading a book" },
  ];

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;
