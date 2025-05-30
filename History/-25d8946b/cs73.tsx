type Component = ({ id: string; text: string }[]) => JSX.Element;

function TodoList(todos: { id: string; text: string }[]): JSX.Element {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;
