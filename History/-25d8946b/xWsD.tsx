function TodoList(): JSX.Element {
  const todos: object[] = [];

  return <ul>{todos.map((todo) => TodoListItem(todo))}</ul>;
}

export default TodoList;
