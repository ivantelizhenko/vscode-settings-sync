function TodoList(): JSX.Element {
  const todos: { id: string; text: string }[] = [
    { id: "t1", text: "Finish the course" },
    { id: "d2", text: "Have a breakfast" },
    { id: "x5", text: "Finish the course" },
    { id: "z8", text: "Finish the course" },
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
