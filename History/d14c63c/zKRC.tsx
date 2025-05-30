import { PropsWithChildren } from "react";

type HeaderProps = PropsWithChildren<{
  title: string;
  description: string;
}>;

function Header({ title, description, children }: HeaderProps) {
  return (
    <article>
      img
      {children}
    </article>
  );
}

export default Header;

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
