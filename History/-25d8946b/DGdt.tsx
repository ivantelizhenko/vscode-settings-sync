import TodoListItem from "./TodoListItem";

function TodoList(): JSX.Element {
  const todos: { id: string; title: string }[] = [
    { id: "t1", title: "Finish the course" },
  ];

  return (
    <ul>
      {todos.map((todo: { id: string; title: string }) => TodoListItem(todo))}
    </ul>
  );
}

export default TodoList;
