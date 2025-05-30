import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div>
      <h1>Worldwise</h1>

      <Link to="/pricing" />
    </div>
  );
}

export default Homepage;
