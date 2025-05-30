import CourseGoal from "./components/CourseGoal";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/HEader";

function App() {
  function handleAddGoal() {}

  return (
    <main>
      <Header imgDetails={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goal</h1>
      </Header>
      <button onClick={handleAddGoal}>Add goal</button>
      <CourseGoal
        title="Learn React + TS"
        description="Learn it from the ground up"
        key={1}
      >
        Delete
      </CourseGoal>
    </main>
  );
}

export default App;
