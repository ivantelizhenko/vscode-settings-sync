import { CourseGoalType } from '../utils/types';
import CourseGoal from './CourseGoal';
import InfoBox from './InfoBox';

interface CourseGoalListProps {
  goals: CourseGoalType[];
  onDelete: (curId: number) => void;
}

function CourseGoalList({ goals, onDelete }: CourseGoalListProps) {
  if (goals.length === 0)
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );

  return (
    <>
      {goals.length >= 1 && (
        <InfoBox mode="warning" severity="medium">
          You are collecting a lot of goals. Don't put too much on your plate!
        </InfoBox>
      )}
      <ul>
        {goals.map(goal => (
          <li key={goal.id}>
            <CourseGoal
              id={goal.id}
              title={goal.title}
              description={goal.description}
              onDelete={onDelete}
            >
              Delete
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CourseGoalList;
