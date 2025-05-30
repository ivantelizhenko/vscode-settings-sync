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
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button
        onClick={e => {
          console.log(e);
          // onDelete(id);
        }}
      >
        {children}
      </button>
    </article>
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
