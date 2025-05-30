import { CourseGoalType } from '../utils/types';
import CourseGoal from './CourseGoal';

interface CourseGoalListProps {
  goals: CourseGoalType[];
  onDelete: (curId: number) => void;
}

function CourseGoalList({ goals, onDelete }: CourseGoalListProps) {
  return (
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
  );
}

export default CourseGoalList;
