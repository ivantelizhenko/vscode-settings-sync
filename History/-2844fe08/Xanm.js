import Calculator from "./Calculator";
import ToggleSounds from "./ToggleSounds";
import Timer from "./Timer";
import { WorkoutProvider } from "./WorkoutContext";
import { TimeProvider } from "./TimeContext";

function App() {
  return (
    <TimeProvider>
      <WorkoutProvider>
        <main>
          <h1>Workout timer</h1>
          <Timer />
          <ToggleSounds />
          <Calculator />
        </main>
      </WorkoutProvider>
    </TimeProvider>
  );
}

export default App;
