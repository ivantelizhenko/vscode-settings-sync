import { PropsWithChildren } from "react";

type CourseGoalProps = PropsWithChildren<{
  title: string;
  description: string;
}>;

function CourseGoal({ title, description, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>{children}</button>
    </article>
  );
}

export default CourseGoal;
