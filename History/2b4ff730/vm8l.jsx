import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav';

function Homepage() {
  return (
    <div>
      <PageNav />

      <h1>Worldwise</h1>

      <Link to="/pricing">Pricing</Link>

      <Link to="/app">text</Link>
    </div>
  );
}

export default Homepage;
