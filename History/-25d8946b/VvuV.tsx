type Component = ;

function TodoList(todos): React.JSX<{ id: string; text: string }> {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;
