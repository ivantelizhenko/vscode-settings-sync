import TodoList from "./components/TodoList";

function App(): JSX.Element {
  const todos: { id: string; text: string }[] = [
    { id: "t1", text: "Finish the course" },
    { id: "d2", text: "Have a breakfast" },
    { id: "x5", text: "Go to the gym" },
    { id: "z8", text: "Reading a book" },
  ];

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
