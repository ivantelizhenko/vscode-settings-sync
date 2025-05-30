import { PropsWithChildren } from 'react';

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  description: string;
  onDelete: (curGoal: number) => void;
}>;

function CourseGoal({
  id,
  title,
  description,
  onDelete,
  children,
}: CourseGoalProps) {
  return (
    <li>
      <article>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <button onClick={() => onDelete(id)}>{children}</button>
      </article>
    </li>
  );
}

export default CourseGoal;

// const CourseGoal: FC<CourseGoalProps> = function ({
//   title,
//   description,
//   children,
// }) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{description}</p>
//       </div>
//       <button>{children}</button>
//     </article>
//   );
// };

// export default CourseGoal;
