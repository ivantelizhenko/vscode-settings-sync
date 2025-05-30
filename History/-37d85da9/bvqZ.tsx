import goalsImg from './assets/goals.jpg';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import CourseGoalList from './components/CourseGoalList';
import { CourseGoalType } from './utils/types';
import NewGoal from './components/NewGoal';
import InfoBox from './components/InfoBox';

function App() {
  const [goals, setGoal] = useState<CourseGoalType[]>([]);

  function handleAddGoal(newGoal: CourseGoalType) {
    setGoal(prevGoals => [...prevGoals, newGoal]);
  }

  useEffect(() => {
    console.log(goals);
  }, [goals]);

  function handleDeleteGoal(curGoal: number) {
    setGoal(prevGoals => {
      return [...prevGoals.filter(goal => goal.id !== curGoal)];
    });
  }

  return (
    <main>
      {goals.length >= 4 && (
        <InfoBox mode="warning">
          You have a lot of course goals. Start adding some!
        </InfoBox>
      )}
      <Header imgDetails={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goal</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />

      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}

export default App;
