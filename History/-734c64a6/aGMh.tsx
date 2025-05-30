import { FormEvent, useRef } from 'react';
import { CourseGoalType } from '../utils/types';

function NewGoal({
  onAddGoal,
}: {
  onAddGoal: (newGoal: CourseGoalType) => void;
}) {

  const goal = useRef()
  const sumarry = useRef()
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
      const data = new FormData(e.currentTarget);
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
          // value={title}
          placeholder="Write your goal here..."
          // onChange={e => setTitle(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="description">Goal description</label>
        <input
          name="description"
          id="description"
          type="text"
          // value={description}
          placeholder="Write some description here..."
          // onChange={e => setDescription(e.target.value)}
        />
      </p>
      <p>
        <button>Add goal</button>
      </p>
    </form>
  );
}

export default NewGoal;
