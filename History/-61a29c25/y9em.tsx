import { CourseGoalType } from '../utils/types';
import CourseGoal from './CourseGoal';

function CourseGoalList({ goals }) {
  return (
    <ul>
      {goals.map(goal => (
        <li key={goal.id}>
          <CourseGoal
            id={goal.id}
            title={goal.title}
            description={goal.description}
            onDelete={handleDeleteGoal}
          >
            Delete
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}

export default CourseGoalList;
