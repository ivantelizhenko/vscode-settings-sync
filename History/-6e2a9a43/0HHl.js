import { memo } from "react";
import { useWorkout } from "./WorkoutContext";

function ToggleSounds() {
  const { allowSound, setAllowSound } = useWorkout();

  return (
    <button
      className="btn-sound"
      onClick={() => setAllowSound((allow) => !allow)}
    >
      {allowSound ? "🔈" : "🔇"}
    </button>
  );
}

export default memo(ToggleSounds);
