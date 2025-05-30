import { FormEvent, useRef } from 'react';
import { CourseGoalType } from '../utils/types';

function NewGoal({
  onAddGoal,
}: {
  onAddGoal: (newGoal: CourseGoalType) => void;
}) {
  const goal = useRef<HTMLInputElement>(null);
  const sumarry = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // const data = new FormData(e.currentTarget);
    console.log(goal.current);
    console.log(sumarry.current);
  }
}

return (
  <form onSubmit={handleSubmit}>
    <p>
      <label htmlFor="goal">Your goal</label>
      <input
        name="goal"
        id="goal"
        type="text"
        placeholder="Write your goal here..."
        ref={goal}

        // value={title}
        // onChange={e => setTitle(e.target.value)}
      />
    </p>
    <p>
      <label htmlFor="description">Goal description</label>
      <input
        name="description"
        id="description"
        type="text"
        placeholder="Write some description here..."
        ref={summary}
        // value={description}
        // onChange={e => setDescription(e.target.value)}
      />
    </p>
    <p>
      <button>Add goal</button>
    </p>
  </form>
);

export default NewGoal;
