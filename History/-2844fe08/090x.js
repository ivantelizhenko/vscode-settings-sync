import { useEffect, useMemo, useState } from "react";
import clickSound from "./ClickSound.m4a";

import Calculator from "./Calculator";
import ToggleSounds from "./ToggleSounds";
import Timer from "./Timer";
import { WorkoutProvider } from "./WorkoutContext";

function App() {
  return (
    <WorkoutProvider>
      <main>
        <h1>Workout timer</h1>
        <Timer time={time} />
        <ToggleSounds allowSound={allowSound} setAllowSound={setAllowSound} />
        <Calculator workouts={workouts} onPlaySound={handlePlaySound} />
      </main>
    </WorkoutProvider>
  );
}

export default App;
