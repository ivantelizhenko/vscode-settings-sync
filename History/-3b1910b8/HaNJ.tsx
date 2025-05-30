import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <NavLink to="/">Back to home</NavLink>
    </div>
  );
}

export default PageNotFound;
