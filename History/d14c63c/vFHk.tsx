import { PropsWithChildren } from "react";

type HeaderProps = PropsWithChildren<{
  imgDetails: { src: string; alt: string };
}>;

function Header({ imgDetails, children }): HeaderProps {
  return (
    <article>
      <img src={imgDetails.src} alt={imgDetails.alt} />
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
