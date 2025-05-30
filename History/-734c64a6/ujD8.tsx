import { FormEvent, useState } from 'react';
import { CourseGoalType } from '../utils/types';

function NewGoal({
  onAddGoal,
}: {
  onAddGoal: (newGoal: CourseGoalType) => void;
}) {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (title.trim().length > 0 && description.trim().length > 0) {
      onAddGoal({ id: Math.random(), title, description });
      setTitle('');
      setDescription('');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input
          id="goal"
          type="text"
          placeholder="Write your goal here..."
          onChange={e => setTitle(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="description">Goal description</label>
        <input
          id="description"
          type="text"
          placeholder="Write some description here..."
          onChange={e => setDescription(e.target.value)}
        />
      </p>
      <p>
        <button>Add goal</button>
      </p>
    </form>
  );
}

export default NewGoal;
