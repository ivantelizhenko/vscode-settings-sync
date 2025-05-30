import CourseGoal from './components/CourseGoal';
import goalsImg from './assets/goals.jpg';
import Header from './components/HEader';
import { useState } from 'react';

interface CourseGoal {
  id: number;
  title: string;
  description: string;
}

function App() {
  const [goals, setGoal] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoal(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: 'i am a custom title',
        description: 'i am a custom desc',
      };
      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <Header imgDetails={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goal</h1>
      </Header>
      <button onClick={handleAddGoal}>Add goal</button>
      <ul>
        {goals.map(goal => (
          <li>
            <CourseGoal
              title={goal.title}
              description={goal.description}
              key={goal.id}
            >
              Delete
            </CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
