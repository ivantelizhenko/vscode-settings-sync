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
    <ul>
      {goals.length >= 4 && (
        <InfoBox mode="warning">
          You have a lot of course goals. Start adding some!
        </InfoBox>
      )}
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
  );
}

export default CourseGoalList;
