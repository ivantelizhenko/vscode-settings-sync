function TodoList(): JSX.Element {
  const todos: { id: string; title: string }[] = [
    { id: "t1", title: "Finish the course" },
  ];

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
