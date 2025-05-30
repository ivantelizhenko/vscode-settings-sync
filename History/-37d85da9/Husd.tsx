import goalsImg from './assets/goals.jpg';
import Header from './components/Header';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList';
import { CourseGoalType } from './utils/types';

function App() {
  const [goals, setGoal] = useState<CourseGoalType[]>([]);

  function handleAddGoal() {
    setGoal(prevGoals => {
      const newGoal: CourseGoalType = {
        id: Math.random(),
        title: 'i am a custom title',
        description: 'i am a custom desc',
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(curGoal: number) {
    setGoal(prevGoals => {
      return [...prevGoals.filter(goal => goal.id !== curGoal)];
    });
  }

  return (
    <main>
      <Header imgDetails={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goal</h1>
      </Header>
      <button onClick={handleAddGoal}>Add goal</button>
      <CourseGoalList goals={goals} />
    </main>
  );
}

export default App;
