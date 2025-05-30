import { PropsWithChildren } from "react";

type HeaderProps = PropsWithChildren<{
  imgDetails: { src: string; alt: string };
}>;

function Header({ imgDetails, children }: HeaderProps) {
  return (
    <header>
      <img {...imgDetails} />
      {children}
    </header>
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
