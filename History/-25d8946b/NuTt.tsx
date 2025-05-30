import TodoListItem from "./TodoListItem";

function TodoList(): JSX.Element {
  const todos: { todo: object }[] = [];

  return <ul>{todos.map((todo) => TodoListItem(todo))}</ul>;
}

export default TodoList;
