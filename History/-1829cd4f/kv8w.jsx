import { Link } from 'react-router-dom';

function LinkButton({ children, to }) {
  return <Link>{children}</Link>;
}

export default LinkButton;
