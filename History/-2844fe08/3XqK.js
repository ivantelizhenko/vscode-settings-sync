import Calculator from "./Calculator";
import ToggleSounds from "./ToggleSounds";
import Timer from "./Timer";
import { WorkoutProvider } from "./WorkoutContext";

function App() {
  return (
    <WorkoutProvider>
      <main>
        <h1>Workout timer</h1>
        <Timer />
        <ToggleSounds />
        <Calculator />
      </main>
    </WorkoutProvider>
  );
}

export default App;
