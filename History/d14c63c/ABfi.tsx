import { PropsWithChildren } from "react";

type HeaderProps = PropsWithChildren<{
  img: { src: string; alt: string };
}>;

function Header({ img, children }): HeaderProps {
  return (
    <article>
      <img src={src} alt={alt} />
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
