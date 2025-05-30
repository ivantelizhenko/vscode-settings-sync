import { useEffect, useState } from "react";
import clickSound from "./ClickSound.m4a";

import Calculator from "./Calculator";
import ToggleSounds from "./ToggleSounds";
import Timer from "./Timer";

function App() {
  const [allowSound, setAllowSound] = useState(true);
  const [time, setTime] = useState(formatTime(new Date()));

  // Will be be AM or PM
  const partOfDay = time.slice(-2);

  const handlePlaySound = function () {
    if (!allowSound) return;
    const sound = new Audio(clickSound);
    sound.play();
  };

  function formatTime(date) {
    return new Intl.DateTimeFormat("en", {
      month: "short",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(date);
  }

  useEffect(function () {
    const id = setInterval(function () {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <main>
      <h1>Workout timer</h1>
      <Timer time={time} />
      <ToggleSounds allowSound={allowSound} setAllowSound={setAllowSound} />
      <Calculator workouts={workouts} onPlaySound={handlePlaySound} />
    </main>
  );
}

export default App;
