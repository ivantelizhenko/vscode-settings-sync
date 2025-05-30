import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../src/features/user/Username';

function Header() {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
